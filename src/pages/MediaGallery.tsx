import { Play } from "lucide-react";
import {PageHeader} from "../components/ui/PageHeader.tsx";
import {PageLayout} from "../components/layout/PageLayout.tsx";

export default function MediaGallery() {
  const photos = [
    "https://images.unsplash.com/photo-1542304071-86a031e42fa0?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533174000228-db67104b281f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <PageLayout>
      <PageHeader 
        title="Media & Gallery" 
        subtitle="Experience the vibrant moments from past festivals and live stream current events."
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Live Stream Section */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-serif font-bold text-foreground">Live Streams & Videos</h2>
              <span className="flex items-center gap-2 text-red-500 font-bold text-sm uppercase tracking-widest animate-pulse">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" /> Live Now
              </span>
            </div>
            
            <div className="bg-black rounded-3xl aspect-video relative overflow-hidden flex items-center justify-center group cursor-pointer shadow-2xl">
              {/* Dummy live stream poster */}
              <img 
                src="https://pixabay.com/get/g82ac91c6537e126a52d498986326245e677cf299bbc4077ab54cd005b14ad132c237cd8283e44f67d189c6b4144ba73c46248c53a401b00ee8bad053e0cfdc32_1280.jpg" 
                alt="Live stream" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
              />
              <div className="relative z-10 w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,215,0,0.5)]">
                <Play className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Photo Gallery</h2>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {photos.map((src, i) => (
                <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg border border-border group relative cursor-pointer">
                  <img src={src} alt={`Gallery item ${i}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-medium">View Full Image</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
