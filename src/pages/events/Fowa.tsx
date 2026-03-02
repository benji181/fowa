import { Link } from "wouter";
import { Calendar, MapPin, Ticket } from "lucide-react";
import {PageLayout} from "../../components/layout/PageLayout.tsx";
import {PageHeader} from "../../components/ui/PageHeader.tsx";

export default function Fowa() {
  return (
    <PageLayout>
      <PageHeader 
        title="Festival of the Waters & Arts" 
        subtitle="A vibrant celebration of arts, culture, and community."
        imageSrc="https://images.unsplash.com/photo-1533174000228-db67104b281f?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border shadow-xl rounded-3xl p-8 md:p-12 -mt-32 relative z-20 mb-16 flex flex-col md:flex-row gap-8 justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Date</p>
                <p className="text-lg font-bold">To be announced</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-border" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Location</p>
                <p className="text-lg font-bold">Coastal Venues</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-border" />
            <Link href="/register" className="w-full md:w-auto px-8 py-4 bg-accent text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20">
              <Ticket className="w-5 h-5" /> Request Invite
            </Link>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">About The Festival</h2>
            <p>
              The Festival of the Waters and Arts (FOWA) is a public-interest cultural diplomacy platform. 
              We utilize the universally understood languages of art, music, and community gathering to subtly 
              achieve critical goals: advancing sustainable water stewardship, preserving aquatic heritage, 
              and fostering an inclusive blue economy dialogue.
            </p>
            <p>
              Attendees will experience large-scale international exhibitions, celebrity-driven concerts, 
              bespoke community events, and powerful storytelling that blends creativity with precision.
            </p>

            <div className="my-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Performance" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <img src="https://pixabay.com/get/g7d5e9ed6d83967d678f5db4c00d9460ed33729772658ff373040489eeb97498f21684a27f1cc3f713506e9d0f0d9f338e8e9e6511d38763723d416428fe84a10_1280.jpg" className="w-full h-full object-cover" alt="Art Exhibition" />
              </div>
            </div>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Highlights & Activities</h3>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Art Exhibitions:</strong> Showcasing local and international artists interpreting water themes.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Live Performances:</strong> Cultural dances, music, and theatrical acts honoring our heritage.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Sustainability Workshops:</strong> Interactive sessions on environmental stewardship.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
