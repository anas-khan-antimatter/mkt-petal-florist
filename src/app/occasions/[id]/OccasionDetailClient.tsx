"use client";

import Link from "next/link";
import { ArrowLeft, Heart, Sparkles, ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBouquetsByOccasion, occasions as occasionsList, type Occasion } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-5 h-5" />,
  Leaf: <LeafSmall />,
  Sun: <SunSmall />,
  Star: <StarSmall />,
};

function LeafSmall() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
function SunSmall() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2m-10-10h2m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
    </svg>
  );
}
function StarSmall() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function FlowerCardIcon({ icon }: { icon: string }) {
  return iconMap[icon] || <Sparkles className="w-5 h-5" />;
}

export default function OccasionDetailClient({ occasion }: { occasion: Occasion }) {
  const recommended = getBouquetsByOccasion(occasion.slug);

  return (
    <>
      <section className={`pt-28 pb-16 px-6 bg-gradient-to-br ${occasion.imageGradient}`}>
        <div className="max-w-7xl mx-auto">
          <Link
            href="/occasions"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Occasions
          </Link>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-3">
              {occasion.title}
            </h1>
            <p className="text-xl text-muted-foreground font-script italic mb-4">
              &ldquo;{occasion.subtitle}&rdquo;
            </p>
            <p className="text-foreground/80 leading-relaxed max-w-2xl">
              {occasion.description}
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 px-6 border-b border-border/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-2xl mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Florist Tips for This Occasion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {occasion.tips.map((tip, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/50 border border-border/40"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">{i + 1}</span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended bouquets */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-2xl mb-8">Recommended Arrangements</h2>
          {recommended.length === 0 ? (
            <p className="text-muted-foreground">
              Browse our{" "}
              <Link href="/shop" className="text-primary underline-offset-4 hover:underline">
                full collection
              </Link>{" "}
              to find the perfect bouquet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommended.map((b) => (
                <Link key={b.id} href={`/shop/${b.slug}`} className="group">
                  <Card className="border-border/60 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/40 h-full">
                    <div className={`h-40 bg-gradient-to-br ${b.imageGradient} flex items-center justify-center`}>
                      <div className="transition-transform duration-500 group-hover:scale-110 text-primary/40">
                        <FlowerCardIcon icon={b.icon} />
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="rounded-full text-xs">{b.season}</Badge>
                        <span className="font-heading text-lg font-bold">${b.price}</span>
                      </div>
                      <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors">
                        {b.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-1">{b.tagline}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}