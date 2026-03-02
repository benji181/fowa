import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react";
import { useSubscribeNewsletter } from "../../hooks/use-api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {insertNewsletterSubscriberSchema} from "../../../shared/schema.ts";

type NewsletterForm = z.infer<typeof insertNewsletterSubscriberSchema>;

export function Footer() {
  const { mutate, isPending } = useSubscribeNewsletter();
  const form = useForm<NewsletterForm>({
    resolver: zodResolver(insertNewsletterSubscriberSchema),
    defaultValues: { email: "" }
  });

  const onSubmit = (data: NewsletterForm) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/client/public" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="font-serif font-bold text-primary text-xl">FW</span>
              </div>
              <span className="font-serif font-bold text-xl tracking-wide">
                FOWA & TWHA
              </span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Celebrating our shared cultural heritage, the beauty of our waterways, and the artistry that flows from the soul of our communities.
            </p>
            <div className="flex gap-4">
              <a href="Footer.tsx#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="Footer.tsx#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="Footer.tsx#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="Footer.tsx#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">About the Festival</Link></li>
              <li><Link href="/events/fowa" className="text-primary-foreground/70 hover:text-accent transition-colors">Festival of Waters & Arts</Link></li>
              <li><Link href="/events/twha" className="text-primary-foreground/70 hover:text-accent transition-colors">Water Heritage Awards</Link></li>
              <li><Link href="/volunteer" className="text-primary-foreground/70 hover:text-accent transition-colors">Become a Volunteer</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-accent">Get Involved</h4>
            <ul className="space-y-3">
              <li><Link href="/register" className="text-primary-foreground/70 hover:text-accent transition-colors">Guest Registration</Link></li>
              <li><Link href="/donate" className="text-primary-foreground/70 hover:text-accent transition-colors">Make a Donation</Link></li>
              <li><Link href="/merchandise" className="text-primary-foreground/70 hover:text-accent transition-colors">Merchandise Store</Link></li>
              <li><Link href="/partners" className="text-primary-foreground/70 hover:text-accent transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-accent">Newsletter</h4>
            <p className="text-primary-foreground/70 mb-4">Subscribe to our quarterly newsletter for updates and announcements.</p>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  {...form.register("email")}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
                <button 
                  type="submit" 
                  disabled={isPending}
                  className="absolute right-2 top-2 bottom-2 bg-accent text-primary p-2 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {form.formState.errors.email && (
                <p className="text-red-400 text-sm">{form.formState.errors.email.message}</p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-primary-foreground/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Festival of the Waters & Arts. All rights reserved.</p>
          <p>Curated by La Fête Events Planning and Management</p>
        </div>
      </div>
    </footer>
  );
}
