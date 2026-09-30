"use client";

import { useState, useCallback } from "react";
import { Flower2, Plus, Minus, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { builderCategories, BUILDER_BASE_PRICE } from "@/lib/data";

export default function BouquetBuilderPage() {
  const [selections, setSelections] = useState<Record<string, string>>({
    size: "Medium (8-12 stems)",
    palette: "Soft Pastels",
    focal: "Garden Rose",
    addons: "No add-ons",
    vessel: "Classic Wrap",
  });
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleSelection = useCallback((key: string, label: string) => {
    setSelections((prev) => ({ ...prev, [key]: label }));
  }, []);

  const getOptionPrice = (key: string, label: string) => {
    const category = builderCategories.find((c) => c.key === key);
    if (!category) return 0;
    const option = category.options.find((o) => o.label === label);
    return option?.price ?? 0;
  };

  const totalAddons = Object.entries(selections).reduce((sum, [key, label]) => {
    return sum + getOptionPrice(key, label);
  }, 0);

  const unitPrice = BUILDER_BASE_PRICE + totalAddons;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 bg-romantic-gradient">
        <div className="max-w-7xl mx-auto pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="outline" className="rounded-full px-4 py-1 text-sm mb-4 bg-white/50">
              Custom Bouquet Builder
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-4">
              Design Your <span className="text-primary italic font-script">Perfect</span> Bouquet
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Choose every stem, every hue, every detail. Our master florists
              will hand-tie your custom creation and deliver it with love.
            </p>
          </div>
        </div>
      </section>

      {/* Builder */}
      <section className="px-6 -mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Options */}
            <div className="lg:col-span-2 space-y-6">
              {builderCategories.map((cat) => (
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
                        return (
                          <button
                            key={opt.label}
                            onClick={() => handleSelection(cat.key, opt.label)}
                            className={`relative text-left p-3 rounded-xl border text-sm transition-all ${
                              isSelected
                                ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary/20"
                                : "border-border hover:border-primary/40 bg-white"
                            }`}
                          >
                            <div className="font-medium text-foreground">{opt.label}</div>
                            {opt.description && (
                              <div className="text-xs text-muted-foreground mt-0.5">{opt.description}</div>
                            )}
                            <div className="text-xs text-muted-foreground mt-1">
                              {opt.price > 0 ? `+$${opt.price}` : "Included"}
                            </div>
                            {isSelected && (
                              <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Summary sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-border/60">
                <CardHeader>
                  <CardTitle className="font-heading text-lg flex items-center gap-2">
                    <Flower2 className="w-4 h-4 text-primary" />
                    Your Custom Bouquet
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(selections).map(([key, label]) => {
                    const price = getOptionPrice(key, label);
                    return (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-muted-foreground capitalize">{key}</span>
                        <span className="text-right">
                          <div>{label}</div>
                          {price > 0 && <div className="text-xs text-muted-foreground">+${price}</div>}
                        </span>
                      </div>
                    );
                  })}

                  <Separator />

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Base price</span>
                    <span>${BUILDER_BASE_PRICE}</span>
                  </div>
                  {totalAddons > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Upgrades</span>
                      <span>+${totalAddons}</span>
                    </div>
                  )}

                  <Separator />

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Quantity</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{quantity}</span>
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
                    <span className="text-sm text-muted-foreground">Unit price</span>
                    <span className="font-heading text-lg">${unitPrice}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-base font-medium">Total</span>
                    <span className="font-heading text-3xl text-primary font-bold">
                      ${totalPrice}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full rounded-full gap-2"
                    onClick={handleAddToCart}
                    disabled={added}
                  >
                    {added ? (
                      <><Check className="w-4 h-4" /> Added!</>
                    ) : (
                      <><Flower2 className="w-4 h-4" /> Add to Cart — ${totalPrice}</>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}