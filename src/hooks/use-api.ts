import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import {
  api,
  type ContactInput, type DonationInput,
  type NewsletterInput,
  type RegistrationInput,
  type VolunteerInput
} from "../../shared/routes";

// Mock data for merchandise
const MOCK_MERCHANDISE = [
  {
    id: 1,
    name: "FOWA T-Shirt",
    description: "Premium cotton t-shirt with FOWA logo",
    price: 29.99,
    imageUrl: "/images/tshirt.jpg",
    category: "clothing",
    inStock: true,
  },
  {
    id: 2,
    name: "Heritage Cap",
    description: "Embroidered cap with TWHA logo",
    price: 24.99,
    imageUrl: "/images/cap.jpg",
    category: "accessories",
    inStock: true,
  },
  {
    id: 3,
    name: "Event Poster",
    description: "Limited edition FOWA 2025 poster",
    price: 15.99,
    imageUrl: "/images/poster.jpg",
    category: "art",
    inStock: true,
  },
];

// Fetch Merchandise (with mock data)
export function useMerchandise() {
  return useQuery({
    queryKey: [api.merchandise.list.path],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Return mock data instead of fetching
      return MOCK_MERCHANDISE;

      // When backend is ready, uncomment this:
      /*
      const res = await fetch(api.merchandise.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch merchandise");
      return api.merchandise.list.responses[200].parse(await res.json());
      */
    },
  });
}

// Newsletter Subscription (mock)
export function useSubscribeNewsletter() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: NewsletterInput) => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));

      // Simulate success (90% success rate)
      if (Math.random() > 0.9) {
        throw new Error("Email already subscribed");
      }

      console.log("Newsletter subscription:", data);
      return { message: "Successfully subscribed to newsletter" };

      // When backend is ready, uncomment this:
      /*
      const res = await fetch(api.newsletter.subscribe.path, {
        method: api.newsletter.subscribe.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to subscribe");
      }
      return api.newsletter.subscribe.responses[201].parse(await res.json());
      */
    },
    onSuccess: () => {
      toast({
        title: "Subscribed Successfully",
        description: "Thank you for subscribing to our newsletter.",
      });
    },
    onError: (error) => {
      toast({
        title: "Subscription Failed",
        description: error.message,
      });
    }
  });
}

// Guest Registration (mock)
export function useRegisterGuest() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: RegistrationInput) => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Generate a mock unique code
      const mockCode = "FOWA-" + Math.random().toString(36).substring(2, 8).toUpperCase();

      console.log("Guest registration:", data);
      return {
        message: "Registration successful",
        uniqueCode: mockCode
      };

      // When backend is ready, uncomment this:
      /*
      const res = await fetch(api.registration.create.path, {
        method: api.registration.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to register");
      }
      return api.registration.create.responses[201].parse(await res.json());
      */
    },
    onSuccess: (data) => {
      toast({
        title: "Registration Submitted",
        description: `Your gate pass code: ${data.uniqueCode}`,
      });
    },
    onError: (error) => {
      toast({
        title: "Registration Failed",
        description: error.message,
      });
    }
  });
}

// Volunteer Registration (mock)
export function useRegisterVolunteer() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: VolunteerInput) => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log("Volunteer registration:", data);
      return { message: "Volunteer application submitted" };

      // When backend is ready, uncomment this:
      /*
      const res = await fetch(api.volunteers.register.path, {
        method: api.volunteers.register.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Registration failed");
      }
      return api.volunteers.register.responses[201].parse(await res.json());
      */
    },
    onSuccess: () => {
      toast({
        title: "Volunteer Application Submitted",
        description: "We will review your application and get back to you.",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
      });
    }
  });
}

// Contact Submission (mock)
export function useSubmitContact() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));

      console.log("Contact submission:", data);
      return { message: "Message sent successfully" };

      // When backend is ready, uncomment this:
      /*
      const res = await fetch(api.contacts.submit.path, {
        method: api.contacts.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Message submission failed");
      }
      return api.contacts.submit.responses[201].parse(await res.json());
      */
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Message Failed",
        description: error.message,
      });
    }
  });
}

// Make Donation (mock)
export function useCreateDonation() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: DonationInput) => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1200));

      // Simulate success (95% success rate)
      if (Math.random() > 0.95) {
        throw new Error("Payment processing failed");
      }

      console.log("Donation:", data);
      return {
        message: "Donation successful",
        id: Math.floor(Math.random() * 1000)
      };

      // When backend is ready, uncomment this:
      /*
      const res = await fetch(api.donations.create.path, {
        method: api.donations.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Donation processing failed");
      }
      return api.donations.create.responses[201].parse(await res.json());
      */
    },
    onSuccess: () => {
      toast({
        title: "Donation Successful",
        description: "Thank you for your generous contribution!",
      });
    },
    onError: (error) => {
      toast({
        title: "Donation Failed",
        description: error.message,
      });
    }
  });
}