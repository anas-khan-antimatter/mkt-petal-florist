"use client";

import { Flower2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-romantic-gradient" />
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />

      {/* Floating petals decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/10 animate-float"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${6 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            <Flower2 className="w-12 h-12" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          Spring Collection Now Available
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-tight text-balance mb-6">
          Flowers Crafted{" "}
          <span className="text-primary italic font-script">with Love</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Artisan floral designs for every moment that matters. From intimate
          bouquets to grand celebrations — let Petal &amp; Stem bring your
          vision to life with seasonally inspired arrangements.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/shop">
            <Button size="lg" className="rounded-full px-10 text-base">
              Explore Arrangements
            </Button>
          </Link>
          <Link href="/build">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 text-base"
            >
              Build Your Bouquet
            </Button>
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Farm-fresh blooms</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>Hand-tied with care</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Free delivery over $65</span>
          </div>
        </div>
      </div>
    </section>
  );
}