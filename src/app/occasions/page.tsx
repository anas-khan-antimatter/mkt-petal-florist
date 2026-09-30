"use client";

import { Flower2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { occasions } from "@/lib/data";

export default function OccasionsPage() {
  return (
    <div className="pt-24 pb-24 px-6">
      {/* Hero */}
      <section className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-romantic-gradient" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-sm mb-4">
            Occasions
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-4">
            Flowers for <span className="text-primary italic font-script">Every</span> Moment
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Whether celebrating love, offering comfort, or brightening an ordinary day —
            we design with intention for every occasion.
          </p>
        </div>
      </section>

      {/* Occasion cards */}
      <div className="max-w-6xl mx-auto space-y-16">
        {occasions.map((occ, idx) => (
          <div
            key={occ.slug}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
              idx % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* Image */}
            <div
              className={`relative overflow-hidden rounded-2xl h-72 bg-gradient-to-br ${occ.imageBg} ${
                idx % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <div className="bloom-motif absolute inset-0" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Flower2 className="w-16 h-16 text-primary/40" />
              </div>
            </div>

            {/* Text */}
            <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="font-heading text-3xl md:text-4xl mb-2">{occ.name}</h2>
              <p className="text-lg font-heading italic text-muted-foreground mb-4">
                {occ.hero}
              </p>
              <p className="text-sm text-foreground leading-relaxed mb-6">
                {occ.description}
              </p>
              <Link href={`/occasions/${occ.slug}`}>
                <Button variant="outline" className="rounded-full gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}