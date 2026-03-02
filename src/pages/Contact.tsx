import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContact } from "../hooks/use-api";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import {PageLayout} from "../components/layout/PageLayout.tsx";
import {PageHeader} from "../components/ui/PageHeader.tsx";
import {insertContactSchema} from "../../shared/schema.ts";

type ContactForm = z.infer<typeof insertContactSchema>;

export default function Contact() {
  const { mutate, isPending } = useSubmitContact();

  const form = useForm<ContactForm>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });

  const onSubmit = (data: ContactForm) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with the FOWA & TWHA team."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <h3 className="text-2xl font-serif font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground font-light mb-8">
                Whether you're looking to partner with us, request information, or simply say hello, we'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+234 (0) 814 682 3900</p>
                    <p className="text-muted-foreground">+234 (0) 701 702 2376</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <p className="text-muted-foreground">lafeteoct2023@gmail.com</p>
                    <p className="text-muted-foreground text-sm truncate">Festivalofthewaterandarts@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Office</h4>
                    <p className="text-muted-foreground">La Fête Events Planning and Management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-card border border-border shadow-2xl rounded-3xl p-8 md:p-12">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      {...form.register("name")}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
                    />
                    {form.formState.errors.name && <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      {...form.register("email")}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
                    />
                    {form.formState.errors.email && <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <input
                    {...form.register("subject")}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
                  />
                  {form.formState.errors.subject && <p className="text-red-500 text-sm mt-1">{form.formState.errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    {...form.register("message")}
                    rows={6}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent resize-none"
                  />
                  {form.formState.errors.message && <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full md:w-auto px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isPending ? "Sending..." : <><Send className="w-5 h-5" /> Send Message</>}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}
