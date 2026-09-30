"use client";

import { Flower2, Droplets, Scissors, Sun, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const careSections = [
  {
    title: "Watering",
    icon: Droplets,
    tips: [
      "Fill your vase with room-temperature water — not too cold, not hot.",
      "Remove any leaves that will sit below the waterline to prevent bacteria.",
      "Change water completely every 2 days for longest vase life.",
      "Use the flower food packet included with your delivery — it's measured for your vase size.",
      "Top off water daily; thirsty blooms like garden roses and hydrangeas drink a lot.",
    ],
  },
  {
    title: "Trimming",
    icon: Scissors,
    tips: [
      "Cut stems at a 45° angle with sharp scissors or a knife — never dull blades.",
      "Re-cut stems every time you change water (every 2 days).",
      "Woody stems (lilac, hydrangea, eucalyptus) benefit from a split cut up the stem.",
      "Remove spent blooms and yellowing leaves promptly to keep the arrangement fresh.",
      "For bulb flowers (tulips, daffodils), cut straight across rather than angled.",
    ],
  },
  {
    title: "Placement",
    icon: Sun,
    tips: [
      "Keep arrangements away from direct sunlight, heating vents, and air conditioning.",
      "Avoid placing flowers near fruit bowls — ripening fruit emits ethylene gas that shortens bloom life.",
      "A cool room (60-65°F / 15-18°C) is ideal for most cut flowers.",
      "Keep arrangements away from drafty windows or doors.",
      "Display on a stable surface — vibrations from foot traffic can stress stems.",
    ],
  },
  {
    title: "Preservation",
    icon: Shield,
    tips: [
      "Mist delicate blooms (peonies, garden roses) lightly with water daily.",
      "For longer-lasting arrangements, refrigerate overnight (not freezing — just cool).",
      "Dried flowers should be kept out of humidity; a light hairspray mist helps preserve them.",
      "Pressed flowers: place between two sheets of paper in a heavy book for 2-4 weeks.",
      "Use a drop of bleach in the water to slow bacterial growth (only for hardy stems).",
    ],
  },
];

const stemCare: { stem: string; tip: string }[] = [
  { stem: "Rose", tip: "Remove guard petals and cut stems at a sharp angle. Change water daily." },
  { stem: "Tulip", tip: "Tulips continue growing in the vase! Cut straight across and keep water fresh." },
  { stem: "Peony", tip: "Gentle misting helps buds open. Once open, they last 3-5 days." },
  { stem: "Hydrangea", tip: "Hydrangeas are thirsty — submerge stems in warm water for 30 mins if wilting." },
  { stem: "Lily", tip: "Remove orange anthers to prevent pollen stains and extend bloom life." },
  { stem: "Sunflower", tip: "Cut thick stems at an angle. Change water every day for best results." },
  { stem: "Eucalyptus", tip: "Strip lower leaves and crush woody stem ends. Lasts 2-3 weeks in water." },
  { stem: "Sweet Pea", tip: "Handle gently — stems are fragile. Keep cool and out of direct sun." },
];

const faq = [
  { q: "How long will my arrangement last?", a: "Most arrangements last 5-10 days with proper care. Some blooms like eucalyptus and chrysanthemums can last 2-3 weeks." },
  { q: "Should I use the flower food?", a: "Absolutely. Our flower food contains the perfect balance of nutrients, acidifier, and biocide. Follow the packet instructions for your vase size." },
  { q: "What if a bloom wilts early?", a: "Remove it promptly so it doesn't affect other flowers. Some blooms naturally fade faster than others — that's part of their life cycle." },
  { q: "Can I revive droopy flowers?", a: "Often yes! Recut the stem at a sharp angle and place in warm (not hot) water for 30 minutes. Many flowers will perk up." },
  { q: "How do I care for dried arrangements?", a: "Keep out of direct sunlight to prevent fading, and gently dust with a soft brush or low-power hair dryer on cool." },
];

export default function CarePage() {
  return (
    <div className="pt-24 pb-24 px-6">
      {/* Hero */}
      <section className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-romantic-gradient" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-sm mb-4">
            Guide
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-4">
            Flower <span className="text-primary italic font-script">Care</span> Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Make your blooms last longer with our expert care tips. A little attention
            goes a long way in preserving nature&rsquo;s beauty.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto">
        {/* Quick-start card */}
        <div className="p-6 rounded-2xl bg-secondary/5 border border-sage mb-12">
          <div className="flex items-start gap-4">
            <Flower2 className="w-8 h-8 text-secondary" />
            <div>
              <h2 className="font-heading text-lg text-secondary">Morning Ritual</h2>
              <p className="text-sm text-foreground mt-1">
                Every morning: check water level, recut stems if water is cloudy,
                remove spent blooms. This 60-second routine doubles your arrangement&rsquo;s life.
              </p>
            </div>
          </div>
        </div>

        {/* Care sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {careSections.map((section) => (
            <Card key={section.title} className="border-border/50">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <section.icon className="w-5 h-5 text-primary" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-xs leading-relaxed">
                      <Sparkles className="w-3 h-3 text-primary/60 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator />

        {/* Per-stem guide */}
        <h2 className="font-heading text-2xl mb-6 mt-12">Care by Stem Type</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stemCare.map((item) => (
            <Card key={item.stem} className="border-border/40">
              <CardHeader>
                <CardTitle className="font-heading text-base">{item.stem}</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-foreground leading-relaxed">
                {item.tip}
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-16" />

        {/* FAQ */}
        <h2 className="font-heading text-2xl mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faq.map((item) => (
            <details
              key={item.q}
              className="p-4 rounded-xl border border-border/40 cursor-pointer hover:border-primary/30 transition-all [&[open]]:bg-primary/5"
            >
              <summary className="font-heading text-base font-medium cursor-pointer">
                {item.q}
              </summary>
              <p className="text-sm text-foreground leading-relaxed mt-3">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}