"use client";

import { Flower2, ArrowLeft, Heart, Droplets, Scissors, Info } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { arrangements, getArrangement } from "@/lib/data";

export default function ArrangementDetailPage({ params }: { params: { slug: string } }) {
  const arr = getArrangement(params.slug);

  if (!arr) {
    notFound();
  }

  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image panel */}
          <div className={`relative overflow-hidden rounded-2xl h-[28rem] bg-gradient-to-br ${arr.imageBg}`}>
            <div className="bloom-motif absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Flower2 className="w-20 h-20 text-primary/40" />
                <p className="text-xs text-primary/30 font-script italic mt-4">{arr.season} · {arr.occasion}</p>
              </div>
            </div>
            {/* Floating decorative badges */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {arr.stems.slice(0, 3).map((stem) => (
                <span key={stem} className="px-2 py-0.5 rounded-full bg-white/60 backdrop-blur-sm text-[10px] text-foreground">
                  {stem}
                </span>
              ))}
              {arr.stems.length > 3 && (
                <span className="px-2 py-0.5 rounded-full bg-white/60 backdrop-blur-sm text-[10px] text-foreground">
                  +{arr.stems.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="secondary" className="rounded-full text-xs">{arr.occasion}</Badge>
              <Badge variant="outline" className="rounded-full text-xs">{arr.season}</Badge>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl leading-tight">{arr.name}</h1>
            <p className="text-lg text-muted-foreground italic">{arr.tagline}</p>

            <div className="text-3xl font-heading font-bold text-primary">${arr.price}</div>

            <Separator />

            <p className="text-base text-foreground leading-relaxed">{arr.description}</p>

            <Separator />

            {/* Stems list */}
            <div>
              <h3 className="font-heading text-sm uppercase tracking-wider text-muted-foreground mb-3">Contains</h3>
              <div className="flex flex-wrap gap-2">
                {arr.stems.map((stem) => (
                  <span key={stem} className="px-3 py-1 rounded-full border border-sage text-xs text-sage bg-sage-sheer">
                    {stem}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">Color: {arr.colorNote}</p>
            </div>

            <Separator />

            {/* Care tip */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/5 border border-sage">
              <Droplets className="w-5 h-5 text-secondary shrink-0" />
              <div>
                <span className="text-xs font-medium text-secondary">Care Tip</span>
                <p className="text-sm text-foreground mt-1">{arr.careTip}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <Button size="lg" className="rounded-full px-10 flex-1">Add to Cart — ${arr.price}</Button>
              <Button size="lg" variant="outline" className="rounded-full">Gift</Button>
            </div>
          </div>
        </div>

        {/* Related arrangements */}
        <Separator className="my-16" />
        <h2 className="font-heading text-2xl mb-6">You May Also Love</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {arrangements
            .filter((a) => a.slug !== arr.slug && a.occasion === arr.occasion)
            .slice(0, 3)
            .map((rel) => (
              <Link
                key={rel.slug}
                href={`/shop/${rel.slug}`}
                className="group rounded-xl border border-border/60 overflow-hidden hover:border-primary/30 transition-all"
              >
                <div className={`h-36 bg-gradient-to-br ${rel.imageBg} flex items-center justify-center`}>
                  <Flower2 className="w-10 h-10 text-primary/50" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-base">{rel.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{rel.tagline}</p>
                  <p className="font-heading text-base font-bold text-primary mt-1">${rel.price}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}