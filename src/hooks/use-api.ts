import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import {
  api,
  type ContactInput, type DonationInput,
  type NewsletterInput,
  type RegistrationInput,
  type VolunteerInput
} from "../../shared/routes.ts";

// Fetch Merchandise
export function useMerchandise() {
  return useQuery({
    queryKey: [api.merchandise.list.path],
    queryFn: async () => {
      const res = await fetch(api.merchandise.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch merchandise");
      return api.merchandise.list.responses[200].parse(await res.json());
    },
  });
}

// Newsletter Subscription
export function useSubscribeNewsletter() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: NewsletterInput) => {
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
    },
    onSuccess: () => {
      toast({
        title: "Subscribed Successfully",
        description: "Thank you for subscribing to our newsletter.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Subscription Failed",
        description: error.message,
      });
    }
  });
}

// Guest Registration
export function useRegisterGuest() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: RegistrationInput) => {
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
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: error.message,
      });
    }
  });
}

// Volunteer Registration
export function useRegisterVolunteer() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: VolunteerInput) => {
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
    },
    onSuccess: () => {
      toast({
        title: "Volunteer Application Submitted",
        description: "We will review your application and get back to you.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message,
      });
    }
  });
}

// Contact Submission
export function useSubmitContact() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: ContactInput) => {
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
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Message Failed",
        description: error.message,
      });
    }
  });
}

// Make Donation
export function useCreateDonation() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: DonationInput) => {
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
    },
    onSuccess: () => {
      toast({
        title: "Donation Successful",
        description: "Thank you for your generous contribution!",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Donation Failed",
        description: error.message,
      });
    }
  });
}
