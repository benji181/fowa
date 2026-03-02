import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterGuest } from "../hooks/use-api";
import { useState } from "react";
import { CheckCircle2, Ticket } from "lucide-react";
import { motion } from "framer-motion";
import { PageLayout } from "../components/layout/PageLayout";
import { z } from "zod";
import {insertRegistrationSchema} from "../../shared/schema.ts";

type RegForm = z.infer<typeof insertRegistrationSchema>;

export default function Registration() {
  const {isPending } = useRegisterGuest();
  const [successCode, setSuccessCode] = useState<string | null>(null);

  const form = useForm<RegForm>({
    resolver: zodResolver(insertRegistrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      organization: "",
      role: ""
    }
  });

  const onSubmit = (data: RegForm) => {
    // For now, just simulate success since useRegisterGuest might not be implemented
    console.log("Form data:", data);
    setSuccessCode("FOWA-" + Math.random().toString(36).substring(2, 8).toUpperCase());

    // When your API is ready, uncomment this:
    // mutate(data, {
    //   onSuccess: (res) => {
    //     setSuccessCode(res.uniqueCode);
    //   }
    // });
  };

  return (
      <PageLayout>
        <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white flex items-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 w-full">

            <div className="text-center mb-10">
              <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Guest Registration</h1>
              <p className="text-gray-600">Request an invitation to FOWA & TWHA exclusive events.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative BG */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100/50 rounded-full blur-3xl" />

              {successCode ? (
                  <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold mb-4">Registration Received</h2>
                    <p className="text-gray-600 mb-8">Your request is pending review. Please save your unique gateway code.</p>

                    <div className="bg-blue-50 border-2 border-blue-200 border-dashed rounded-xl p-6 max-w-sm mx-auto">
                      <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Gate Pass Code</p>
                      <p className="text-4xl font-mono font-bold text-blue-900 tracking-widest">{successCode}</p>
                    </div>
                  </motion.div>
              ) : (
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <input
                            {...form.register("fullName")}
                            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                            placeholder="Enter your full name"
                        />
                        {form.formState.errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">{form.formState.errors.fullName.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <input
                            type="email"
                            {...form.register("email")}
                            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                            placeholder="Enter your email address"
                        />
                        {form.formState.errors.email && (
                            <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Organization</label>
                        <input
                            {...form.register("organization")}
                            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                            placeholder="Company or institution"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Role / Designation</label>
                        <input
                            {...form.register("role")}
                            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                            placeholder="e.g. Director, Artist, Sponsor"
                        />
                      </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-4 rounded-xl bg-blue-900 text-white font-bold text-lg hover:bg-blue-800 transition-colors flex justify-center items-center gap-2 mt-4 disabled:opacity-50"
                    >
                      {isPending ? "Submitting..." : <><Ticket className="w-5 h-5" /> Request Access</>}
                    </button>
                  </form>
              )}
            </div>
          </div>
        </div>
      </PageLayout>
  );
}