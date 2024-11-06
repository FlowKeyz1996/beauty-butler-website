// pages/api/sendQuestion.ts

import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

type EmailData = {
  name: string;
  email: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body as EmailData;

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or another email service provider
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    try {
      // Sending the email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "jonielsanni@gmail.com", // Replace with your email
        subject: "New FAQ Question",
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ message: "Question submitted successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
