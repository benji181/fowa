import {PageLayout} from "../components/layout/PageLayout.tsx";
import {PageHeader} from "../components/ui/PageHeader.tsx";

export default function ThematicFocus() {
  const themes = [
    {
      title: "Water",
      subtitle: "The Lifeblood",
      description: "Water is not merely a resource; it is living heritage. It sustains us, connects us across generations, and serves as the foundation for our communities. We focus on environmental stewardship and sustainable aquatic management.",
      image: "https://images.unsplash.com/photo-1543888365-1d48c081e649?q=80&w=1000&auto=format&fit=crop",
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      title: "Arts",
      subtitle: "Creative Expression",
      description: "Through fine arts, music, and performance, we capture the spirit of the waters. Art serves as the medium through which we communicate the urgent need for environmental consciousness and cultural pride.",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1000&auto=format&fit=crop",
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    },
    {
      title: "Culture",
      subtitle: "Our Shared Heritage",
      description: "Honoring the custodians of our water culture. From traditional fishing communities to ancestral festivals, we aim to preserve the rich tapestry of practices that define our coastal identity.",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1000&auto=format&fit=crop",
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20"
    },
    {
      title: "Sustainability",
      subtitle: "For Future Generations",
      description: "Driving the inclusive blue economy dialogue. We champion practices that ensure art and the environment thrive in harmony, creating economic opportunities without compromising ecological integrity.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
      color: "bg-green-500/10 text-green-600 border-green-500/20"
    }
  ];

  return (
    <PageLayout>
      <PageHeader 
        title="Thematic Focus" 
        subtitle="Exploring the intersections of ecology, creativity, and tradition."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {themes.map((theme, i) => (
            <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
              <div className="lg:w-1/2 w-full relative">
                <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-2xl">
                  <img src={theme.image} alt={theme.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className={`absolute -bottom-6 ${i % 2 !== 0 ? '-left-6' : '-right-6'} w-32 h-32 rounded-full ${theme.color} mix-blend-multiply blur-2xl z-[-1]`} />
              </div>
              
              <div className="lg:w-1/2 w-full space-y-6">
                <div className={`inline-block px-4 py-1.5 rounded-full border ${theme.color} text-sm font-semibold tracking-wider uppercase`}>
                  {theme.subtitle}
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">{theme.title}</h2>
                <div className="w-16 h-1 bg-accent rounded-full" />
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  {theme.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
