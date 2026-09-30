"use client";

import { Flower2, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { occasions, getOccasion } from "@/lib/data";

export default function OccasionDetailPage({ params }: { params: { slug: string } }) {
  const occ = getOccasion(params.slug);

  if (!occ) {
    notFound();
  }

  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/occasions"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          All Occasions
        </Link>

        <section
          className={`relative overflow-hidden rounded-2xl h-64 bg-gradient-to-br ${occ.imageBg} mb-12`}
        >
          <div className="bloom-motif absolute inset-0" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Flower2 className="w-16 h-16 text-primary/40" />
              <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-2">
                {occ.name}
              </h1>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto">
          <p className="text-xl font-heading italic mb-6">{occ.hero}</p>
          <p className="text-base text-foreground leading-relaxed mb-10">
            {occ.description}
          </p>

          <Separator />

          <h2 className="font-heading text-xl mb-4">What We Offer</h2>
          <ul className="space-y-3">
            {occ.offerings.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Sparkles className="w-4 h-4 text-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Separator className="my-10" />

          <div className="text-center">
            <Button size="lg" className="rounded-full px-10">
              {occ.cta}
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              No commitment required — we&rsquo;ll discuss your vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}