"use client";

import { useState } from "react";
import { Flower2, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { arrangements } from "@/lib/data";

export default function ShopPage() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = arrangements
    .filter((a) => filter === "all" || a.occasion === filter || a.season === filter)
    .filter((a) => !searchQuery || a.name.toLowerCase().includes(searchQuery.toLowerCase()) || a.tagline.toLowerCase().includes(searchQuery.toLowerCase()));

  const filters = [
    { label: "All Arrangements", value: "all" },
    { label: "Everyday", value: "everyday" },
    { label: "Wedding", value: "wedding" },
    { label: "Sympathy", value: "sympathy" },
    { label: "Spring", value: "Spring" },
    { label: "Summer", value: "Summer" },
    { label: "Fall", value: "Fall" },
    { label: "Winter", value: "Winter" },
  ];

  return (
    <div className="pt-24 pb-24 px-6">
      {/* Hero */}
      <section className="relative overflow-hidden mb-20">
        <div className="absolute inset-0 bg-romantic-gradient" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-sm mb-4">
            Shop
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-4">
            Our Arrangements
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Every bouquet is hand-tied to order using the freshest seasonal blooms. Choose
            from our signature designs or build your own.
          </p>
        </div>
      </section>

      {/* Search + Filters */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search arrangements…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-xl border border-border bg-background text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === f.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Flower2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">No arrangements match your search.</p>
            <Button variant="link" className="mt-4" onClick={() => { setFilter("all"); setSearchQuery(""); }}>
              Clear filters
            </Button>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((arr) => (
            <Link
              key={arr.slug}
              href={`/shop/${arr.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border/60 bg-card hover:border-primary/40 hover:shadow-blush transition-all duration-300"
            >
              {/* Image area */}
              <div className={`h-52 bg-gradient-to-br ${arr.imageBg} flex items-center justify-center relative overflow-hidden`}>
                <div className="bloom-motif absolute inset-0" />
                <div className="flex flex-col items-center gap-2">
                  <Flower2 className="w-12 h-12 text-primary/60" />
                  <span className="text-xs text-primary/40 font-script italic">{arr.season}</span>
                </div>
              </div>
              {/* Info */}
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="rounded-full text-[10px]">
                    {arr.occasion}
                  </Badge>
                  <span className="font-heading text-lg font-bold">${arr.price}</span>
                </div>
                <h3 className="font-heading text-xl mt-1">{arr.name}</h3>
                <p className="text-sm text-muted-foreground leading-snug">{arr.tagline}</p>
                <div className="flex items-center gap-1 text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  View arrangement <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}