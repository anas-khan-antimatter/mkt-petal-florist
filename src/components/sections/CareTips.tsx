"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Droplets,
  Scissors,
  Sun,
  Sprout,
  Thermometer,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { careGuides } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Sun: <Sun className="w-6 h-6" />,
  Sprout: <Sprout className="w-6 h-6" />,
  Thermometer: <Thermometer className="w-6 h-6" />,
};

export default function CareTips() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="care" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-romantic-gradient" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1 text-sm mb-4"
          >
            Flower Care Guide
          </Badge>
          <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-4">
            Make Your Blooms <span className="text-primary italic font-script">Last</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Expert tips and tricks to keep your Petal &amp; Stem arrangements
            looking fresh and beautiful longer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careGuides.map((guide, index) => {
            const Icon = iconMap[guide.icon] || <Sprout className="w-6 h-6" />;
            const isExpanded = expanded === index;

            return (
              <Link key={guide.id} href={`/care/${guide.slug}`} className="group">
                <Card className="border-border/60 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/40 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                      {Icon}
                    </div>
                    <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors">
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {guide.summary}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Read full guide <ArrowRight className="w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}