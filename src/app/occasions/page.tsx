"use client";

import Link from "next/link";
import { ArrowRight, Heart, Star, Leaf, Sun, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { occasions } from "@/lib/data";

const occasionIconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-8 h-8" />,
  Star: <Star className="w-8 h-8" />,
  Leaf: <Leaf className="w-8 h-8" />,
  Sun: <Sun className="w-8 h-8" />,
};

export default function OccasionsPage() {
  return (
    <>
      <section className="pt-28 pb-12 px-6 bg-romantic-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-sm mb-4">
            Occasions
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-4">
            Flowers for Every{" "}
            <span className="text-primary italic font-script">Moment</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Whatever the occasion, we have the perfect arrangement to express
            what matters most.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {occasions.map((occ) => (
              <Link key={occ.id} href={`/occasions/${occ.slug}`} className="group">
                <Card className="border-border/60 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/40 h-full">
                  <div className={`h-36 bg-gradient-to-br ${occ.imageGradient} flex items-center justify-center`}>
                    <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110">
                      {occasionIconMap[occ.icon] || <Sparkles className="w-8 h-8" />}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                      {occ.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {occ.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View arrangements <ArrowRight className="w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}