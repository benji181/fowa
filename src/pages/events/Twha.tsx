import { Link } from "wouter";
import { Award, Star, Medal } from "lucide-react";
import {PageLayout} from "../../components/layout/PageLayout.tsx";
import {PageHeader} from "../../components/ui/PageHeader.tsx";

export default function Twha() {
  const awardCategories = [
    "Water Conservation Champion",
    "Environmental Advocacy",
    "Cultural & Artistic Innovation",
    "Youth & Emerging Leaders",
    "Tourism & Economic Development",
    "Institutional Responsibility",
    "The Water Heritage Legends-Award"
  ];

  return (
    <PageLayout>
      <PageHeader 
        title="The Water Heritage Awards" 
        subtitle="Recognizing excellence, innovation, and impact."
        imageSrc="https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Honoring Custodians of Heritage</h2>
              <div className="w-20 h-1 bg-accent mb-8" />
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                TWHA is a globally respected, highly curated, invite-only awards platform. We celebrate 
                individuals, organizations, and institutions for their outstanding contributions to environmental 
                stewardship, cultural heritage, creative innovation, tourism, and community empowerment.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                With 11 sector awards and the singular Water Heritage Legends-Award, we provide a high-prestige 
                platform for recognition, inspiring others to follow in the footsteps of true leaders.
              </p>
              <Link href="/register" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-xl shadow-primary/20">
                Request Ceremony Invitation
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                  <Award className="w-10 h-10 text-accent mb-4" />
                  <h4 className="font-bold text-lg mb-2">Prestige</h4>
                  <p className="text-sm text-muted-foreground">A highly curated platform celebrating true impact.</p>
                </div>
                <div className="bg-primary text-white p-6 rounded-2xl shadow-lg">
                  <Star className="w-10 h-10 text-accent mb-4" />
                  <h4 className="font-bold text-lg mb-2">Excellence</h4>
                  <p className="text-sm text-white/80">Recognizing sector-wide outstanding contributions.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-accent text-primary p-6 rounded-2xl shadow-lg">
                  <Medal className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Legends</h4>
                  <p className="text-sm text-primary/80">Celebrating lifelong commitments to our water heritage.</p>
                </div>
                <img 
                  src="https://pixabay.com/get/g7d5e9ed6d83967d678f5db4c00d9460ed33729772658ff373040489eeb97498f21684a27f1cc3f713506e9d0f0d9f338e8e9e6511d38763723d416428fe84a10_1280.jpg" 
                  alt="Award ceremony" 
                  className="rounded-2xl shadow-lg h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-serif font-bold text-foreground mb-12">Award Categories</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {awardCategories.map((cat, i) => (
              <span key={i} className="px-6 py-3 bg-card border border-border/50 shadow-sm rounded-full text-foreground font-medium text-sm md:text-base">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
