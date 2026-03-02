import { Target, Eye, Shield, Leaf } from "lucide-react";
import {PageLayout} from "../components/layout/PageLayout.tsx";
import {PageHeader} from "../components/ui/PageHeader.tsx";

export default function About() {
  return (
    <PageLayout>
      <PageHeader 
        title="About The Initiative" 
        subtitle="Discover the vision, mission, and objectives driving the Festival of the Waters & Arts."
        imageSrc="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Our Background & Rationale</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Festival of the Waters and Arts (FOWA) is a mission-driven, public-interest cultural diplomacy platform. It advances sustainable water stewardship, aquatic heritage preservation, and inclusive blue economy dialogue. This is subtly achieved through a vibrant celebration of arts, culture, community, and our shared water heritage for national development.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-10 rounded-3xl shadow-lg border border-border/50 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To position water as a unifying force for environmental sustainability, cultural preservation, creativity, and social responsibility on a global stage.
              </p>
            </div>
            
            <div className="bg-primary text-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-accent mb-6 relative z-10">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Our Mission</h3>
              <p className="text-white/80 leading-relaxed relative z-10">
                To celebrate excellence, innovation, and impact across sectors connected to water, culture, and heritage, inspiring generations to act as stewards of our natural resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Core Objectives</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Celebrate Excellence", desc: "Recognize outstanding contributions in water conservation, arts, tourism, and heritage." },
              { icon: Leaf, title: "Promote Stewardship", desc: "Elevate awareness of water sustainability and environmental protection." },
              { icon: Target, title: "Support Youth", desc: "Encourage young innovators and leaders to engage with environmental initiatives." }
            ].map((obj, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20">
                  <obj.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold font-serif mb-3">{obj.title}</h4>
                <p className="text-muted-foreground">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
