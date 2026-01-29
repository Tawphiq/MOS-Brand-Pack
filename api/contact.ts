import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { insertContactMessageSchema } from '../shared/schema';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Parse and validate the request body
    const input = insertContactMessageSchema.parse(req.body);
    
    // Log the contact form submission (you can replace this with email sending, etc.)
    console.log('Contact form submission received:', {
      name: input.name,
      email: input.email,
      subject: input.subject,
      message: input.message,
      timestamp: new Date().toISOString(),
    });
    
    // Return a success response matching the expected format
    return res.status(201).json({
      id: Date.now(), // Temporary ID
      name: input.name,
      email: input.email,
      subject: input.subject,
      message: input.message,
      createdAt: new Date().toISOString(),
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: err.errors[0].message,
        field: err.errors[0].path.join('.'),
      });
    }
    
    console.error('Error processing contact message:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
