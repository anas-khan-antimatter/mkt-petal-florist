"use client";

import { useState, useCallback } from "react";
import { Flower2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type OptionCategory = {
  label: string;
  key: string;
  options: { label: string; price: number }[];
};

const categories: OptionCategory[] = [
  {
    label: "Size",
    key: "size",
    options: [
      { label: "Small (5-7 stems)", price: 0 },
      { label: "Medium (8-12 stems)", price: 15 },
      { label: "Large (14-18 stems)", price: 30 },
      { label: "Grand (20+ stems)", price: 50 },
    ],
  },
  {
    label: "Color Palette",
    key: "palette",
    options: [
      { label: "Soft Pastels", price: 0 },
      { label: "Bold & Bright", price: 5 },
      { label: "White & Green", price: 0 },
      { label: "Sunset Tones", price: 5 },
    ],
  },
  {
    label: "Add-Ons",
    key: "addons",
    options: [
      { label: "No add-ons", price: 0 },
      { label: "Baby's Breath Accent", price: 8 },
      { label: "Eucalyptus Sprigs", price: 10 },
      { label: "Decorative Wrapping", price: 6 },
      { label: "Vase Included", price: 15 },
    ],
  },
  {
    label: "Vessel",
    key: "vessel",
    options: [
      { label: "Classic Wrap", price: 0 },
      { label: "Ceramic Vase", price: 12 },
      { label: "Glass Vase", price: 10 },
      { label: "Burlap Wrap", price: 4 },
      { label: "Gift Box", price: 8 },
    ],
  },
];

const BASE_PRICE = 45;

export default function BouquetBuilder() {
  const [selections, setSelections] = useState<Record<string, string>>({
    size: "Medium (8-12 stems)",
    palette: "Soft Pastels",
    addons: "No add-ons",
    vessel: "Classic Wrap",
  });
  const [quantity, setQuantity] = useState(1);

  const handleSelection = useCallback((key: string, label: string) => {
    setSelections((prev) => ({ ...prev, [key]: label }));
  }, []);

  const totalAddons = Object.entries(selections).reduce((sum, [key, label]) => {
    const category = categories.find((c) => c.key === key);
    if (!category) return sum;
    const option = category.options.find((o) => o.label === label);
    return sum + (option?.price ?? 0);
  }, 0);

  const unitPrice = BASE_PRICE + totalAddons;
  const totalPrice = unitPrice * quantity;

  const getOptionPrice = (key: string, label: string) => {
    const category = categories.find((c) => c.key === key);
    if (!category) return 0;
    const option = category.options.find((o) => o.label === label);
    return option?.price ?? 0;
  };

  return (
    <section id="builder" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-rose-petal" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1 text-sm mb-4 bg-white/50"
          >
            Custom Bouquet Builder
          </Badge>
          <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-4">
            Design Your <span className="text-primary italic font-script">Perfect</span> Bouquet
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Choose from our premium blooms and accessories. Every arrangement is
            hand-tied just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Options */}
          <div className="lg:col-span-2 space-y-6">
            {categories.map((cat) => (
              <Card key={cat.key} className="border-border/60">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">
                    {cat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {cat.options.map((opt) => {
                      const isSelected = selections[cat.key] === opt.label;
                      const price = opt.price;

                      return (
                        <button
                          key={opt.label}
                          onClick={() => handleSelection(cat.key, opt.label)}
                          className={`relative text-left p-3 rounded-xl border text-sm transition-all ${
                            isSelected
                              ? "border-primary bg-primary/5 shadow-sm"
                              : "border-border hover:border-primary/40 bg-white"
                          }`}
                        >
                          <div className="font-medium text-foreground">
                            {opt.label}
                          </div>
                          {price > 0 && (
                            <div className="text-xs text-muted-foreground mt-1">
                              +${price}
                            </div>
                          )}
                          {price === 0 && (
                            <div className="text-xs text-muted-foreground mt-1">
                              Included
                            </div>
                          )}
                          {isSelected && (
                            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-border/60">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <Flower2 className="w-4 h-4 text-primary" />
                  Your Bouquet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(selections).map(([key, label]) => {
                  const price = getOptionPrice(key, label);
                  return (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground capitalize">
                        {key}
                      </span>
                      <span className="text-right">
                        <div>{label}</div>
                        {price > 0 && (
                          <div className="text-xs text-muted-foreground">
                            +${price}
                          </div>
                        )}
                      </span>
                    </div>
                  );
                })}

                <Separator />

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Base Price</span>
                  <span>${BASE_PRICE}</span>
                </div>
                {totalAddons > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Add-ons</span>
                    <span>+${totalAddons}</span>
                  </div>
                )}

                <Separator />

                {/* Quantity selector */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Quantity
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(Math.min(10, quantity + 1))}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-muted-foreground">
                    Unit Price
                  </span>
                  <span className="font-heading text-lg">${unitPrice}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-base font-medium">Total</span>
                  <span className="font-heading text-2xl text-primary font-bold">
                    ${totalPrice}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button className="w-full rounded-full gap-2">
                  Add to Cart — ${totalPrice}
                </Button>
                <Button variant="outline" className="w-full rounded-full text-sm" asChild>
                  <Link href="/bouquet-builder">Open Full Builder</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}