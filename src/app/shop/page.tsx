"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { bouquets, type Bouquet } from "@/lib/data";

const seasons = ["All", "Spring", "Summer", "Fall", "Winter", "All-Year"] as const;
const sizes = ["All", "Small", "Medium", "Large", "Grand"] as const;

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <LeafIcon />,
  Sun: <SunIcon />,
  Star: <StarIcon />,
  Heart: <HeartIcon />,
};

function LeafIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-white/60">
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-white/60">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2m-10-10h2m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-white/60">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-white/60">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [seasonFilter, setSeasonFilter] = useState<string>("All");
  const [sizeFilter, setSizeFilter] = useState<string>("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = bouquets.filter((b) => {
    if (search && !b.name.toLowerCase().includes(search.toLowerCase()) && !b.tagline.toLowerCase().includes(search.toLowerCase()))
      return false;
    if (seasonFilter !== "All" && b.season !== seasonFilter) return false;
    if (sizeFilter !== "All" && b.size !== sizeFilter) return false;
    return true;
  });

  return (
    <>
      {/* Page header */}
      <section className="pt-28 pb-12 px-6 bg-romantic-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-sm mb-4">
            Shop Collection
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-4">
            Find Your <span className="text-primary italic font-script">Perfect</span> Bouquet
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Browse our curated collection of handcrafted arrangements, each designed
            with seasonally inspired blooms and artisan care.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4 flex-wrap">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search bouquets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 rounded-full text-sm"
            />
          </div>

          <Button
            variant="outline"
            size="sm"
            className="rounded-full gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
            {(seasonFilter !== "All" || sizeFilter !== "All") && (
              <span className="w-2 h-2 rounded-full bg-primary" />
            )}
          </Button>

          <div className="hidden sm:flex items-center gap-2">
            {seasons.slice(0, 4).map((s) => (
              <button
                key={s}
                onClick={() => setSeasonFilter(s)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  seasonFilter === s
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-border text-muted-foreground hover:border-primary/40"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <p className="text-xs text-muted-foreground ml-auto">
            {filtered.length} {filtered.length === 1 ? "bouquet" : "bouquets"}
          </p>
        </div>

        {showFilters && (
          <div className="border-t border-border/40 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 py-4 flex gap-8 flex-wrap">
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Season</p>
                <div className="flex flex-wrap gap-2">
                  {seasons.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSeasonFilter(s)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                        seasonFilter === s
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "border-border text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Size</p>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSizeFilter(s)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                        sizeFilter === s
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "border-border text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => { setSeasonFilter("All"); setSizeFilter("All"); setSearch(""); }}
                className="text-xs text-primary underline-offset-4 hover:underline self-end"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-2">No bouquets found</p>
              <p className="text-sm text-muted-foreground/60">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((bouquet) => (
                <Link key={bouquet.id} href={`/shop/${bouquet.slug}`} className="group">
                  <Card className="border-border/60 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/40 h-full">
                    <div className={`h-48 bg-gradient-to-br ${bouquet.imageGradient} flex items-center justify-center overflow-hidden`}>
                      <div className="transition-transform duration-500 group-hover:scale-110">
                        {iconMap[bouquet.icon] || <HeartIcon />}
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="rounded-full text-xs">
                          {bouquet.season}
                        </Badge>
                        <span className="font-heading text-xl font-bold">${bouquet.price}</span>
                      </div>
                      <CardTitle className="font-heading text-xl mt-1 group-hover:text-primary transition-colors">
                        {bouquet.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {bouquet.tagline}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex gap-1.5">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/5 text-muted-foreground">{bouquet.size}</span>
                        </div>
                        <span className="text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          View details <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}