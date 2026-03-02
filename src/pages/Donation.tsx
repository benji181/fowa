import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateDonation } from "../hooks/use-api";
import { HeartHandshake } from "lucide-react";
import type {insertDonationSchema} from "../../shared/schema.ts";
import {PageLayout} from "../components/layout/PageLayout.tsx";
import {PageHeader} from "../components/ui/PageHeader.tsx";

type DonationForm = z.infer<typeof insertDonationSchema>;

export default function Donation() {
  const { mutate, isPending } = useCreateDonation();
  
  const form = useForm<DonationForm>({
    resolver: zodResolver(insertDonationSchema),
    defaultValues: { donorName: "", email: "", amount: 100, message: "" }
  });

  const onSubmit = (data: DonationForm) => {
    mutate(data, {
      onSuccess: () => {
        form.reset({ amount: 100 });
        // In a real app, redirect to Stripe checkout here
      }
    });
  };

  const presetAmounts = [50, 100, 250, 500, 1000];

  return (
    <PageLayout>
      <PageHeader 
        title="Support the Initiative" 
        subtitle="Your contribution helps preserve aquatic heritage and drive sustainable environmental action."
      />

      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-card border border-border shadow-2xl rounded-3xl p-8 md:p-12 -mt-20 relative z-10">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-2">Make a Donation</h2>
              <p className="text-muted-foreground font-light">Select an amount or enter a custom contribution.</p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Preset Amounts */}
              <div>
                <label className="block text-sm font-medium mb-4">Select Amount (USD)</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => form.setValue("amount", amt)}
                      className={`py-3 rounded-xl border font-bold text-lg transition-all ${
                        form.watch("amount") === amt 
                          ? "bg-accent border-accent text-primary shadow-md" 
                          : "bg-background border-border text-foreground hover:border-accent"
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Custom Amount *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">$</span>
                  <input
                    type="number"
                    step="0.01"
                    {...form.register("amount")}
                    className="w-full bg-background border border-border rounded-xl pl-8 pr-4 py-3 text-lg font-bold focus:outline-none focus:border-accent"
                  />
                </div>
                {form.formState.errors.amount && <p className="text-red-500 text-sm mt-1">{form.formState.errors.amount.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    {...form.register("donorName")}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
                  />
                  {form.formState.errors.donorName && <p className="text-red-500 text-sm mt-1">{form.formState.errors.donorName.message}</p>}
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
                <label className="block text-sm font-medium mb-2">Leave a Message (Optional)</label>
                <textarea
                  {...form.register("message")}
                  rows={3}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent resize-none"
                  placeholder="Why are you supporting FOWA?"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isPending ? "Processing..." : `Donate $${form.watch("amount") || "0"}`}
              </button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Secure payment processing. (Note: Currently running in demo mode)
              </p>
            </form>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
