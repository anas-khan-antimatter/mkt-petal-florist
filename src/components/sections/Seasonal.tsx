"use client";

import { useState } from "react";
import { Heart, Leaf, Sun, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { bouquets } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <Leaf className="w-16 h-16 text-white/60" />,
  Sun: <Sun className="w-16 h-16 text-white/60" />,
  Star: <Star className="w-16 h-16 text-white/60" />,
  Heart: <Heart className="w-16 h-16 text-white/60" />,
};

const featured = bouquets.filter((b) => b.featured).slice(0, 4);

export default function Seasonal() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="seasonal" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-romantic-gradient" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1 text-sm mb-4"
          >
            Seasonal Collection
          </Badge>
          <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-4">
            Arrangements for Every Season
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Our floral designers handpick the freshest blooms nature has to offer
            each season.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((arr) => {
            const isSelected = selected === arr.id;
            const Icon = iconMap[arr.icon] || <Heart className="w-16 h-16 text-white/60" />;

            return (
              <Link key={arr.id} href={`/shop/${arr.slug}`}>
                <Card
                  className={`relative overflow-hidden transition-all duration-300 cursor-pointer border h-full ${
                    isSelected
                      ? "border-primary shadow-lg shadow-primary/20 scale-[1.03]"
                      : "border-border hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  {/* Color wash */}
                  <div
                    className={`h-40 bg-gradient-to-br ${arr.imageGradient} flex items-center justify-center`}
                  >
                    {Icon}
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="rounded-full text-xs"
                      >
                        {arr.season}
                      </Badge>
                      <span className="font-heading text-xl font-bold">
                        ${arr.price}
                      </span>
                    </div>
                    <CardTitle className="font-heading text-xl mt-2">
                      {arr.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {arr.tagline}
                    </p>
                  </CardContent>

                  <CardFooter>
                    <span
                      className="text-sm rounded-full w-full inline-flex items-center justify-center h-7 border border-border bg-background hover:bg-muted transition-colors"
                    >
                      View Details
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button className="rounded-full px-8 gap-2" asChild>
            <Link href="/shop">
              View Full Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}