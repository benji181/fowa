import {PageLayout} from "../components/layout/PageLayout.tsx";
import {PageHeader} from "../components/ui/PageHeader.tsx";

export default function Partners() {
  // Placeholder data
  const sponsors = [
    { name: "EcoWater Trust", tier: "Platinum" },
    { name: "Global Arts Foundation", tier: "Platinum" },
    { name: "Marine Bank Plc", tier: "Gold" },
    { name: "Oceanic Builders", tier: "Gold" },
    { name: "Heritage Media Group", tier: "Silver" },
    { name: "AquaTech Solutions", tier: "Silver" },
  ];

  return (
    <PageLayout>
      <PageHeader 
        title="Partners & Sponsors" 
        subtitle="Collaborating to build a sustainable and culturally rich future."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Our Esteemed Partners</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              We extend our deepest gratitude to the visionary organizations and government stakeholders 
              whose generous support makes the Festival of the Waters & Arts possible. Together, we are 
              championing cultural preservation and environmental sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-10 flex flex-col items-center justify-center aspect-video hover:shadow-xl hover:border-accent/50 transition-all group">
                <div className="w-16 h-16 bg-muted rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="font-serif font-bold text-xl text-primary/40">{sponsor.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-1">{sponsor.name}</h3>
                <span className={`text-xs font-bold tracking-widest uppercase ${
                  sponsor.tier === 'Platinum' ? 'text-primary' : 
                  sponsor.tier === 'Gold' ? 'text-accent' : 'text-muted-foreground'
                }`}>{sponsor.tier} Partner</span>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-primary text-white rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.1),transparent_50%)]" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-4">Become a Partner</h2>
              <p className="text-white/80 mb-8 font-light">
                Align your brand with environmental responsibility and cultural prestige. Join us in making a lasting impact.
              </p>
              <a href="/contact" className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 transition-all shadow-lg hover:-translate-y-1">
                Download Sponsorship Deck
              </a>
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
