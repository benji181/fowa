import { useMerchandise } from "../hooks/use-api";
import { ShoppingBag, Loader2 } from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHeader } from "../components/ui/PageHeader";

// Define the type for merchandise items
type MerchandiseItem = {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    inStock: boolean;
};

export default function Merchandise() {
    const { data: items, isLoading } = useMerchandise();

    return (
        <PageLayout>
            <PageHeader
                title="Merchandise Store"
                subtitle="Support the initiative by purchasing exclusive FOWA & TWHA gear and art pieces."
            />

            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                            <Loader2 className="w-10 h-10 animate-spin mb-4 text-primary" />
                            <p>Loading collection...</p>
                        </div>
                    ) : !items || items.length === 0 ? (
                        <div className="text-center py-20 bg-muted/50 rounded-3xl border border-border">
                            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
                            <h3 className="text-2xl font-serif font-bold mb-2">Store Opening Soon</h3>
                            <p className="text-muted-foreground">We are currently curating our exclusive collection. Check back later!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {items.map((item: MerchandiseItem) => (
                                <div key={item.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all">
                                    <div className="aspect-square bg-muted relative overflow-hidden">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                // Fallback image if the image fails to load
                                                (e.target as HTMLImageElement).src = "/images/placeholder.jpg";
                                            }}
                                        />
                                        {!item.inStock && (
                                            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                Out of Stock
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1 rounded-full uppercase">
                                            {item.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-lg leading-tight">{item.name}</h3>
                                            <span className="font-bold text-primary text-lg">${Number(item.price).toFixed(2)}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground font-light mb-6 line-clamp-2">{item.description}</p>
                                        <button
                                            disabled={!item.inStock}
                                            className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            <ShoppingBag className="w-4 h-4" />
                                            {item.inStock ? "Add to Cart" : "Sold Out"}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </PageLayout>
    );
}