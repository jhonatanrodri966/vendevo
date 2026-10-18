import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(email: string, code: string) {
  try {
    await resend.emails.send({
      from: "Vendevo <onboarding@resend.dev>",
      to: email,
      subject: "Seu código de verificação Vendevo",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #0A0A0A; color: #ffffff; padding: 40px; text-align: center;">
          <h1 style="color: #10b981;">Vendevo</h1>
          <p>Seu código de verificação é:</p>
          <h2 style="font-size: 32px; letter-spacing: 8px; background: #111; padding: 20px; border-radius: 8px;">${code}</h2>
          <p style="color: #666; font-size: 12px;">Este código expira em 10 minutos.</p>
        </div>
      `,
    });
    return true;
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return false;
  }
}