import { z } from "zod";
import {
  insertContactSchema, insertDonationSchema,
  insertNewsletterSubscriberSchema,
  insertRegistrationSchema,
  insertVolunteerSchema,
} from "./schema.ts";



export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  newsletter: {
    subscribe: {
      method: "POST" as const,
      path: "/api/newsletter/subscribe" as const,
      input: insertNewsletterSubscriberSchema,
      responses: {
        201: z.object({ message: z.string() }),
        400: errorSchemas.validation,
      },
    },
  },
  registration: {
    create: {
      method: "POST" as const,
      path: "/api/registration" as const,
      input: insertRegistrationSchema,
      responses: {
        201: z.object({ 
          message: z.string(),
          uniqueCode: z.string() 
        }),
        400: errorSchemas.validation,
      },
    },
  },
  volunteers: {
    register: {
      method: "POST" as const,
      path: "/api/volunteers" as const,
      input: insertVolunteerSchema,
      responses: {
        201: z.object({ message: z.string() }),
        400: errorSchemas.validation,
      },
    },
  },
  contacts: {
    submit: {
      method: "POST" as const,
      path: "/api/contact" as const,
      input: insertContactSchema,
      responses: {
        201: z.object({ message: z.string() }),
        400: errorSchemas.validation,
      },
    },
  },
  merchandise: {
    list: {
      method: "GET" as const,
      path: "/api/merchandise" as const,
      responses: {
       // 200: z.array(z.custom<typeof merchandise.$inferSelect>()),
      },
    },
  },
  donations: {
    create: {
      method: "POST" as const,
      path: "/api/donations" as const,
      input: insertDonationSchema,
      responses: {
        201: z.object({ 
          message: z.string(),
          id: z.number() 
        }),
        400: errorSchemas.validation,
      },
    },
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type NewsletterInput = z.infer<typeof api.newsletter.subscribe.input>;
export type RegistrationInput = z.infer<typeof api.registration.create.input>;
export type VolunteerInput = z.infer<typeof api.volunteers.register.input>;
export type ContactInput = z.infer<typeof api.contacts.submit.input>;
export type DonationInput = z.infer<typeof api.donations.create.input>;
export type MerchandiseListResponse = z.infer<typeof api.merchandise.list.responses[200]>;
