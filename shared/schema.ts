import { z } from "zod";

// --- Newsletter Subscribers ---
export const insertNewsletterSubscriberSchema = z.object({
  email: z.string().email("Invalid email address"),
});

// --- Guest Registrations (Invite-only) ---
export const insertRegistrationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  role: z.string().optional(),
});

// --- Volunteers ---
export const insertVolunteerSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  areaOfInterest: z.string().min(1, "Area of interest is required"),
  experience: z.string().optional(),
});

// --- Contacts ---
export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// --- Merchandise ---
export const insertMerchandiseSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().positive("Price must be positive"),
  imageUrl: z.string().url("Invalid image URL"),
  category: z.string().min(1, "Category is required"),
  inStock: z.boolean().default(true),
});

// --- Donations ---
export const insertDonationSchema = z.object({
  donorName: z.string().min(1, "Donor name is required"),
  email: z.string().email("Invalid email address"),
  amount: z.coerce.number().positive("Amount must be positive"),
  message: z.string().optional(),
});

// Types
export type InsertNewsletterSubscriber = z.infer<typeof insertNewsletterSubscriberSchema>;
export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type InsertVolunteer = z.infer<typeof insertVolunteerSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type InsertMerchandise = z.infer<typeof insertMerchandiseSchema>;
export type InsertDonation = z.infer<typeof insertDonationSchema>;

// Select types (dummy versions)
export type NewsletterSubscriber = InsertNewsletterSubscriber & { id: number; createdAt: Date };
export type Registration = InsertRegistration & { id: number; uniqueCode: string; status: string; createdAt: Date };
export type Volunteer = InsertVolunteer & { id: number; createdAt: Date };
export type Contact = InsertContact & { id: number; createdAt: Date };
export type Merchandise = InsertMerchandise & { id: number };
export type Donation = InsertDonation & { id: number; status: string; createdAt: Date };