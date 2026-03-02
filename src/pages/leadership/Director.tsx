import {PageLayout} from "../../components/layout/PageLayout.tsx";

export default function Director() {
  return (
    <PageLayout>
      <div className="pt-32 pb-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-32">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
                {/* Juliet Profile image */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                  alt="Juliet O. Eno Nwaozo" 
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              </div>
              <div className="mt-8 bg-card border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold mb-4 font-serif">Contact Info</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong>Email:</strong> lafeteoct2023@gmail.com</p>
                  <p><strong>Phone:</strong> +234 (0) 814 682 3900</p>
                  <p><strong>IG:</strong> @lafete.nigeria</p>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 prose prose-lg max-w-none text-muted-foreground font-light">
              <span className="text-accent font-bold tracking-widest text-sm uppercase">Festival Director</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2 mt-2">Ms. Juliet O. Eno Nwaozo, AICA</h1>
              <p className="text-xl text-primary font-medium mb-8">Founder & Creative Director</p>

              <div className="w-20 h-1 bg-accent mb-8" />

              <p className="lead text-xl italic border-l-4 border-accent pl-6 py-2 mb-8">
                "Festival of the Waters and Arts (FOWA) was born from a divine conviction that our waters are not merely resources, but living heritage requiring stewardship from those entrusted with leadership."
              </p>

              <p>
                With over 20 years of dynamic experience in media, events planning, and creative marketing, I have been at the forefront of some of West Africa's most celebrated cultural and entertainment experiences. My expertise spans large-scale international festivals, celebrity-driven concerts, corporate launches, and bespoke community events, blending creativity, precision, and impactful storytelling.
              </p>

              <p>
                As a certified Events Planner and Manager, I am intentionally building FOWA as a disciplined, high-impact platform starting with leadership before scale, depth before noise, legacy before popularity.
              </p>

              <h3 className="text-2xl font-serif font-bold text-foreground mt-10 mb-4">A Vision for the Future</h3>
              <p>
                I bring cultural vision, spiritual intelligence, creative leadership, strategic communication, structure, and stakeholder engagement to complement the various MDAs, supporting the achievement of their goals towards environmental preservation and tourist attraction.
              </p>

              <p>
                As Festival Director, I warmly invite everyone—communities, artists, and government partners alike—to join us in celebrating and protecting our precious waterways. Together, we can create a lasting legacy, fostering cultural pride, environmental stewardship, and creative expression for generations to come. Let us unite in honoring our waters and the stories they carry.
              </p>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
