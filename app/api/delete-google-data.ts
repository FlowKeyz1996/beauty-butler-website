// pages/api/delete-google-data.ts
"use server";
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { fullName, email, details } = req.body;

    // Validate required fields
    if (!fullName || !email) {
      return res.status(400).json({ message: 'Full name and email are required.' });
    }

    // Here you could add logic to store the deletion request in a database, send a confirmation email, etc.
    // For now, we'll simulate the deletion request handling.

    console.log('Data deletion request:', { fullName, email, details });

    // Respond with a success message
    return res.status(200).json({ message: 'Data deletion request submitted successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
