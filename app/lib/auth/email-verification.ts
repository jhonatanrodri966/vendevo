import { randomBytes, createHash } from "crypto";
import { prisma } from "@/app/lib/prisma";

const CODE_TTL_MINUTES = 10;
const MAX_ATTEMPTS = 5;

export async function createVerificationCode(userId: string, email: string) {
  await prisma.emailVerificationCode.updateMany({
    where: { userId, usedAt: null },
    data: { usedAt: new Date() },
  });

  const code = randomBytes(3).toString("hex").toUpperCase();
  const codeHash = createHash("sha256").update(code).digest("hex");

  await prisma.emailVerificationCode.create({
    data: {
      userId,
      email,
      codeHash,
      expiresAt: new Date(Date.now() + CODE_TTL_MINUTES * 60000),
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

  const inputHash = createHash("sha256").update(inputCode).digest("hex");
  const valid = record.codeHash === inputHash;

  await prisma.emailVerificationCode.update({
    where: { id: record.id },
    data: { attempts: record.attempts + 1, ...(valid ? { usedAt: new Date() } : {}) },
  });

  if (!valid) return false;

  await prisma.user.update({ where: { id: userId }, data: { emailVerified: true } });
  return true;
}