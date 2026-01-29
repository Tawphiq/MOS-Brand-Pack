import { type ContactMessage, type InsertContactMessage, contactMessages } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    try {
      const [newMessage] = await db
        .insert(contactMessages)
        .values(message)
        .returning();
      return newMessage;
    } catch (err) {
      if (err instanceof Error) {
        // Provide more helpful error messages for common database issues
        if (err.message.includes('ECONNREFUSED') || err.message.includes('connect')) {
          throw new Error('Database connection failed. Please check your DATABASE_URL in .env file and ensure the database is running.');
        }
        if (err.message.includes('does not exist') || err.message.includes('relation') || err.message.includes('table')) {
          throw new Error('Database table does not exist. Please run: npm run db:push');
        }
      }
      throw err;
    }
  }
}

export const storage = new DatabaseStorage();
