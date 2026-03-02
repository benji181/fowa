import {PageLayout} from "../../components/layout/PageLayout.tsx";
import {PageHeader} from "../../components/ui/PageHeader.tsx";

export default function Patrons() {
  return (
    <PageLayout>
      <PageHeader 
        title="Leadership & Patrons" 
        subtitle="The visionaries and stewards guiding our initiative."
      />

      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Grand Patron */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-accent font-bold tracking-widest text-sm uppercase">Grand Patron</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">Mr. Andy Ojei, FCA, FICA</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-6" />
            </div>
            
            <div className="bg-card border border-border shadow-xl rounded-3xl p-8 md:p-12 relative">
              <div className="absolute top-8 left-8 text-accent opacity-20 text-8xl font-serif">"</div>
              <div className="relative z-10 prose prose-lg max-w-none text-muted-foreground font-light text-center">
                <p>
                  It is with great joy and a profound sense of purpose that I welcome you to the Festival of the Waters and Arts (FOWA) and the Water Heritage Awards (TWHA). These initiatives are a celebration of our shared cultural heritage, the beauty of our waterways, and the artistry that flows from the soul of our communities.
                </p>
                <p>
                  Water is life, culture, and creativity; it sustains us, inspires creativity, and connects us across generations. We aim not only to honor the custodians of our water heritage but also to inspire environmental consciousness and community engagement.
                </p>
                <p className="font-medium text-foreground mt-6">
                  Join us as we celebrate, protect, and elevate our water heritage for generations to come.
                </p>
              </div>
            </div>
          </div>

          {/* Chairmen */}
          <div>
            <div className="text-center mb-12">
              <span className="text-accent font-bold tracking-widest text-sm uppercase">Governance & Strategy</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">Committee Chairmen</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-6" />
            </div>

            <div className="bg-primary text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-2">Barrister George Badejo Adegbenga</h3>
                <p className="text-accent font-medium mb-6">Patron & Chairman, Governance, Strategy and Legal</p>
                
                <div className="prose prose-lg prose-invert max-w-none font-light opacity-90">
                  <p>
                    "As Patron and Chairman for Governance, Strategy, & Legal, it is my honor to support FOWA and TWHA. These initiatives are a platform for celebrating our cultural heritage, nurturing creativity, and promoting environmental stewardship."
                  </p>
                  <p>
                    "Through strong governance and strategic vision, we ensure that FOWA and TWHA uphold the highest standards of integrity, transparency, and excellence. Together, we are safeguarding our water heritage, empowering communities, and inspiring sustainable practices that will resonate for generations."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
