import { Star } from "lucide-react";
import {PageLayout} from "../components/layout/PageLayout.tsx";
import {PageHeader} from "../components/ui/PageHeader.tsx";

export default function Curator() {
  return (
    <PageLayout>
      <PageHeader 
        title="La Fête Events, Planning & Management" 
        subtitle="The creative force behind FOWA & TWHA."
      />

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 mx-auto bg-primary text-accent rounded-full flex items-center justify-center shadow-xl mb-8">
            <Star className="w-12 h-12" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8">Crafting Memorable Experiences</h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed text-left mx-auto">
            <p>
              La Fête Events Planning and Management is the premier curatorial and management agency responsible for bringing the Festival of the Waters and Arts to life. Under the visionary leadership of our Founder and Creative Director, Ms. Juliet O. Eno Nwaozo, we transform ambitious concepts into flawless, high-impact realities.
            </p>
            <p>
              With deep expertise spanning large-scale international festivals, bespoke community engagements, and high-level corporate functions, La Fête represents a guarantee of excellence, cultural sensitivity, and operational precision.
            </p>
            
            <div className="bg-muted p-8 rounded-2xl my-10 border-l-4 border-accent">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Philosophy</h3>
              <p className="m-0 italic">
                "Leadership before scale, depth before noise, legacy before popularity."
              </p>
            </div>

            <p>
              We believe that an event is more than a gathering—it is a platform for storytelling, diplomacy, and legacy building. In curating FOWA and TWHA, we have ensured every detail respects our rich water heritage while meeting the highest international event standards.
            </p>
          </div>
          
          <div className="mt-16 inline-flex flex-col items-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Connect with the Curator</p>
            <a href="/contact" className="px-8 py-4 bg-accent text-primary font-bold rounded-xl shadow-lg hover:bg-accent/90 transition-all">
              Contact La Fête
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
