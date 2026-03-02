import { Link } from "wouter";
import { ArrowRight, Droplets, Trophy, Users, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import {PageLayout} from "../components/layout/PageLayout.tsx";

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden">
        {/* landing page hero scenic water landscape */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pixabay.com/get/gd51704825694c8f8c74e88746cdf18c0f5515513f35f83b590d31047b4cd396a4e9277bd9145bbf7f527a8f2cfa8f55a38fe18c7aafad83b5d86beaaa09668c8_1280.jpg" 
            alt="Beautiful water landscape" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-accent/50 bg-accent/10 text-accent font-medium text-sm tracking-wider mb-6">
              A CULTURAL & ENVIRONMENTAL INITIATIVE
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
              Festival of the <br />
              <span className="text-gradient-gold">Waters & Arts</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light drop-shadow-md">
              A coastal heritage, arts, tourism, and water sustainability initiative celebrating the lifeblood of our communities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-primary font-bold text-lg hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-1 transition-all">
                Request Invitation
              </Link>
              <Link href="/about" className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2">
                Discover More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ArrowRight className="w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* Features/Pillars Section */}
      <section className="py-24 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Core Pillars</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Droplets, title: "Water Heritage", desc: "Preserving and celebrating our aquatic ecosystems and traditions." },
              { icon: Trophy, title: "Excellence Awards", desc: "Recognizing outstanding contributions to environmental sustainability." },
              { icon: Users, title: "Community", desc: "Uniting artists, leaders, and citizens for a shared purpose." },
              { icon: HeartHandshake, title: "Sustainability", desc: "Driving actionable dialogue on the inclusive blue economy." }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-xl shadow-black/5 border border-border/50 hover:-translate-y-2 hover:shadow-2xl hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Section: FOWA vs TWHA */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-l-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-accent font-medium tracking-widest text-sm">THE FESTIVAL</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                A Vibrant Celebration of Arts & Culture
              </h2>
              <p className="text-lg text-white/80 font-light leading-relaxed">
                The Festival of the Waters and Arts (FOWA) is a public-interest cultural diplomacy platform. We advance sustainable water stewardship and inclusive blue economy dialogue through vibrant arts, culture, and community engagement.
              </p>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> Live Performances & Exhibitions</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> Environmental Sensitization</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> Cultural Tourism</li>
              </ul>
              <Link href="/events/fowa" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all">
                Explore the Festival <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              {/* aesthetic traditional art or water context */}
              <img 
                src="https://pixabay.com/get/g8e1bbd3d41f7a21244b4a2f668aa2731b075757e21b948c5145010c6a6d5f5aae8a9174d9dfed8e6e9337bc8f361efec3b939d5daf21bfbfdec8e51d70c8b9e7_1280.jpg" 
                alt="Cultural celebration" 
                className="rounded-2xl shadow-2xl z-10 relative object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-accent rounded-2xl z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Director Highlight */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-border flex flex-col md:flex-row">
            <div className="md:w-2/5 relative min-h-[400px]">
              {/* Juliet profile placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                alt="Festival Director" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent md:hidden" />
              <div className="absolute bottom-6 left-6 md:hidden">
                <h3 className="text-2xl font-serif font-bold text-white">Ms. Juliet Nwaozo</h3>
                <p className="text-accent">Festival Director</p>
              </div>
            </div>
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-2 hidden md:block">Ms. Juliet O. Eno Nwaozo, AICA</h2>
              <p className="text-primary font-medium mb-6 hidden md:block">Founder & Creative Director</p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-light italic">
                "FOWA was born from a divine conviction that our waters are not merely resources, but living heritage requiring stewardship from those entrusted with leadership."
              </p>
              <div>
                <Link href="/leadership/director" className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors inline-block">
                  Read Full Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
