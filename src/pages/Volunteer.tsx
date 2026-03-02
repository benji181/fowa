import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRegisterVolunteer } from "../hooks/use-api";
import { Heart } from "lucide-react";
import {insertVolunteerSchema} from "../../shared/schema.ts";
import {PageLayout} from "../components/layout/PageLayout.tsx";
import {PageHeader} from "../components/ui/PageHeader.tsx";

type VolForm = z.infer<typeof insertVolunteerSchema>;

export default function Volunteer() {
  const { mutate, isPending } = useRegisterVolunteer();
  
  const form = useForm<VolForm>({
    resolver: zodResolver(insertVolunteerSchema),
    defaultValues: { fullName: "", email: "", phone: "", areaOfInterest: "", experience: "" }
  });

  const onSubmit = (data: VolForm) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Become a Volunteer" 
        subtitle="Join our community of passionate individuals dedicated to preserving our water heritage."
        imageSrc="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-card border border-border shadow-2xl rounded-3xl p-8 md:p-12 -mt-20 relative z-10">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-2">Volunteer Application</h2>
              <p className="text-muted-foreground font-light">Fill out the form below to register your interest.</p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    {...form.register("fullName")}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
                  />
                  {form.formState.errors.fullName && <p className="text-red-500 text-sm mt-1">{form.formState.errors.fullName.message}</p>}
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
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  {...form.register("phone")}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
                />
                {form.formState.errors.phone && <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Area of Interest *</label>
                <select
                  {...form.register("areaOfInterest")}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
                >
                  <option value="">Select an area...</option>
                  <option value="Event Logistics">Event Logistics</option>
                  <option value="Media & Photography">Media & Photography</option>
                  <option value="Guest Protocol">Guest Protocol & Ushering</option>
                  <option value="Environmental Cleanup">Environmental Cleanup Teams</option>
                </select>
                {form.formState.errors.areaOfInterest && <p className="text-red-500 text-sm mt-1">{form.formState.errors.areaOfInterest.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Relevant Experience (Optional)</label>
                <textarea
                  {...form.register("experience")}
                  rows={4}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
                  placeholder="Tell us about any past volunteer work..."
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isPending ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
