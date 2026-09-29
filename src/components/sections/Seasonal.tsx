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

const arrangements = [
  {
    id: 1,
    name: "Spring Awakening",
    tagline: "Daffodils, tulips, ranunculus, and eucalyptus",
    price: 68,
    season: "Spring",
    color: "from-pink-200 via-yellow-100 to-green-200",
    icon: Leaf,
  },
  {
    id: 2,
    name: "Summer Romance",
    tagline: "Peonies, sunflowers, lavender, and ferns",
    price: 74,
    season: "Summer",
    color: "from-orange-200 via-rose-200 to-purple-200",
    icon: Sun,
  },
  {
    id: 3,
    name: "Autumn Hearth",
    tagline: "Dahlias, chrysanthemums, berries, and dried grasses",
    price: 72,
    season: "Fall",
    color: "from-amber-200 via-red-200 to-brown-200",
    icon: Star,
  },
  {
    id: 4,
    name: "Winter Noir",
    tagline: "Amaryllis, evergreens, white roses, and pine cones",
    price: 78,
    season: "Winter",
    color: "from-slate-100 via-blue-100 to-white",
    icon: Heart,
  },
];

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
          {arrangements.map((arr) => {
            const Icon = arr.icon;
            const isSelected = selected === arr.id;

            return (
              <Card
                key={arr.id}
                className={`relative overflow-hidden transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "border-primary shadow-lg shadow-primary/20 scale-[1.03]"
                    : "border-border hover:border-primary/50 hover:shadow-md"
                }`}
                onClick={() =>
                  setSelected(isSelected ? null : arr.id)
                }
              >
                {/* Color wash */}
                <div
                  className={`h-40 bg-gradient-to-br ${arr.color} flex items-center justify-center`}
                >
                  <Icon className="w-16 h-16 text-white/60" />
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
                  <Button
                    size="sm"
                    variant={isSelected ? "default" : "outline"}
                    className="rounded-full w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(isSelected ? null : arr.id);
                    }}
                  >
                    {isSelected ? "Selected" : "Choose Arrangement"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button className="rounded-full px-8 gap-2">
            View Full Collection
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}