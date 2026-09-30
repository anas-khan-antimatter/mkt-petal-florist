"use client";

import { useState } from "react";
import {
  Droplets,
  Scissors,
  Sun,
  Sprout,
  Thermometer,
  ChevronDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tips = [
  {
    icon: Scissors,
    title: "Trim the Stems",
    summary: "Cut stems at a 45° angle for better water absorption.",
    detail:
      "Using sharp shears or a knife, cut about 1-2 inches off the bottom of each stem at a diagonal. This increases the surface area for water uptake and prevents the stems from sitting flat against the vase bottom, which can block absorption. Re-trim every 2-3 days.",
  },
  {
    icon: Droplets,
    title: "Clean Water, Happy Blooms",
    summary: "Change water every 2 days and keep the vase clean.",
    detail:
      "Fresh, lukewarm water is best — it contains more dissolved oxygen than cold water. Wash the vase with soap and warm water between changes to prevent bacteria growth that can clog stems. Add the provided flower food packet for essential nutrients.",
  },
  {
    icon: Sun,
    title: "Light & Placement",
    summary: "Keep arrangements in bright, indirect light.",
    detail:
      "Avoid direct sunlight, heat sources, and drafty areas. A spot near a north or east-facing window is ideal. Keep flowers away from ripening fruit — ethylene gas from fruit can accelerate wilting. At night, move arrangements to a cooler room to extend vase life.",
  },
  {
    icon: Thermometer,
    title: "Temperature Matters",
    summary: "Store flowers in a cool area between 65-72°F.",
    detail:
      "Most cut flowers last longest at cool room temperatures (65-72°F / 18-22°C). Keep arrangements away from heating vents, radiators, and air conditioning drafts. For overnight storage or before arranging, place in a cool (not cold) location.",
  },
  {
    icon: Sprout,
    title: "Remove Foliage",
    summary: "Strip leaves below the water line to prevent rot.",
    detail:
      "Any leaves submerged in water will decay quickly, promoting bacterial growth that shortens flower life. Remove all foliage from the lower third to half of each stem. Also remove any damaged or wilting petals from the flower heads as they appear.",
  },
  {
    icon: Droplets,
    title: "Mist for Refreshment",
    summary: "Lightly mist your flowers daily for lasting freshness.",
    detail:
      "Many flowers, especially tropical varieties, benefit from a gentle daily misting. Use a fine spray bottle filled with clean water. This helps maintain humidity around the blooms and keeps petals hydrated. Avoid soaking delicate petals like roses directly.",
  },
];

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
            Flower Care
          </Badge>
          <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-4">
            Keep Your Blooms{" "}
            <span className="text-primary italic font-script">Beautiful</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Simple tips to help your Petal &amp; Stem arrangements stay fresh
            and vibrant longer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            const isOpen = expanded === index;

            return (
              <Card
                key={tip.title}
                className={cn(
                  "border-border/60 bg-white/80 backdrop-blur-sm transition-all duration-300 cursor-pointer",
                  isOpen && "ring-1 ring-primary/30 shadow-md"
                )}
                onClick={() => setExpanded(isOpen ? null : index)}
              >
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg">
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {tip.summary}
                  </p>
                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-border/60">
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {tip.detail}
                      </p>
                    </div>
                  )}
                  <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                    <ChevronDown
                      className={cn(
                        "w-3 h-3 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                    <span>{isOpen ? "Less" : "Read more"}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Have a specific flower care question?{" "}
            <Button variant="link" className="p-0 h-auto text-sm">
              Contact our florists
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}