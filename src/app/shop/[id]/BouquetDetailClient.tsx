"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Heart, ShoppingBag, Share2, Check, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Bouquet } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <LeafIcon />,
  Sun: <SunIcon />,
  Star: <StarIcon />,
  Heart: <HeartClientIcon />,
};

function LeafIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2m-10-10h2m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function HeartClientIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export default function BouquetDetailClient({ bouquet }: { bouquet: Bouquet }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back link */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Visual */}
          <div className={`rounded-2xl min-h-[400px] bg-gradient-to-br ${bouquet.imageGradient} flex items-center justify-center`}>
            <div className="text-center p-12">
              <div className="mb-4 flex justify-center text-primary/40">
                {iconMap[bouquet.icon]}
              </div>
              <p className="font-script text-2xl text-primary/50 italic">{bouquet.season} Collection</p>
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <Badge variant="secondary" className="rounded-full text-xs mb-3">
                  {bouquet.season}
                </Badge>
                <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-2">
                  {bouquet.name}
                </h1>
              </div>
              <button className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Share">
                <Share2 className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <p className="text-lg text-muted-foreground mb-6">{bouquet.tagline}</p>
            <p className="text-foreground/80 leading-relaxed mb-8">{bouquet.description}</p>

            {/* Price & size */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-heading text-4xl font-bold text-primary">${bouquet.price}</span>
              <span className="text-sm text-muted-foreground">{bouquet.size} arrangement</span>
            </div>

            <Separator className="mb-6" />

            {/* Stem list */}
            <div className="mb-6">
              <h3 className="font-heading text-sm uppercase tracking-wider text-muted-foreground mb-3">Contains</h3>
              <div className="flex flex-wrap gap-2">
                {bouquet.stems.map((stem) => (
                  <span key={stem} className="text-xs px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-foreground/80">
                    {stem}
                  </span>
                ))}
              </div>
            </div>

            {/* Occasions */}
            <div className="mb-6">
              <h3 className="font-heading text-sm uppercase tracking-wider text-muted-foreground mb-3">Perfect For</h3>
              <div className="flex flex-wrap gap-2">
                {bouquet.occasions.map((oc) => (
                  <Link
                    key={oc}
                    href={`/occasions/${oc}`}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary-foreground hover:bg-secondary/40 transition-colors"
                  >
                    {oc.charAt(0).toUpperCase() + oc.slice(1)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Color palette */}
            <div className="mb-8">
              <h3 className="font-heading text-sm uppercase tracking-wider text-muted-foreground mb-3">Palette</h3>
              <div className="flex gap-2">
                {bouquet.colorPalette.map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border border-border"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-3 border border-border rounded-full px-3 py-1.5">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-full hover:bg-muted flex items-center justify-center"
                  aria-label="Decrease"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="w-7 h-7 rounded-full hover:bg-muted flex items-center justify-center"
                  aria-label="Increase"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <Button
                className="rounded-full flex-1 gap-2"
                onClick={handleAddToCart}
                disabled={added}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart — ${bouquet.price * quantity}
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">Free delivery on orders over $65. Same-day delivery available in most zones.</p>
          </div>
        </div>
      </div>
    </div>
  );
}