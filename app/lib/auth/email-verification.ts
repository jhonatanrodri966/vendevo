import { generateRandomString, alphabet, Argon2id } from "oslo/crypto";
import { TimeSpan, createDate } from "oslo";
import { prisma } from "@/lib/prisma";

const CODE_TTL_MINUTES = 10;
const MAX_ATTEMPTS = 5;

export async function createVerificationCode(userId: string, email: string) {
  await prisma.emailVerificationCode.updateMany({
    where: { userId, usedAt: null },
    data: { usedAt: new Date() },
  });

  const code = generateRandomString(6, alphabet("0-9"));
  const codeHash = await new Argon2id().hash(code);

  await prisma.emailVerificationCode.create({
    data: {
      userId,
      email,
      codeHash,
      expiresAt: createDate(new TimeSpan(CODE_TTL_MINUTES, "m")),
    },
  });

  return code;
}

export async function verifyCode(userId: string, inputCode: string): Promise<boolean> {
  const record = await prisma.emailVerificationCode.findFirst({
    where: { userId, usedAt: null, expiresAt: { gt: new Date() } },
    orderBy: { createdAt: "desc" },
  });

  if (!record) return false;
  if (record.attempts >= MAX_ATTEMPTS) {
    await prisma.emailVerificationCode.update({
      where: { id: record.id },
      data: { usedAt: new Date() },
    });
    return false;
  }

  const valid = await new Argon2id().verify(record.codeHash, inputCode);

  await prisma.emailVerificationCode.update({
    where: { id: record.id },
    data: { attempts: record.attempts + 1, ...(valid ? { usedAt: new Date() } : {}) },
  });

  if (!valid) return false;

  await prisma.user.update({ where: { id: userId }, data: { emailVerified: true } });
  return true;
}