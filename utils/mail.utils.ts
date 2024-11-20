import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: process.env.NODE_ENV !== "development", // Use SSL in production
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD, // Make sure to use `pass` here
  },
} as SMTPTransport.Options);

export type SendEmailDto = {
  sender: Mail.Address;
  receipient: Mail.Address[];
  subject: string;
  message: string;
};

export const sendEmail = async (dto: SendEmailDto) => {
  const { sender, receipient, subject, message } = dto;

  return await transport.sendMail({
    from: sender,
    to: receipient.map((r) => `${r.name} <${r.address}>`), // Convert to correct format
    subject,
    html: message, // For rich text
    text: message, // Fallback for plain text
  });
};
