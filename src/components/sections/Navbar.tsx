"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Flower2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Occasions", href: "/occasions" },
  { label: "Custom Bouquet", href: "/bouquet-builder" },
  { label: "Delivery", href: "/delivery" },
  { label: "Care Guides", href: "/#care" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <Flower2 className="w-6 h-6 text-primary" />
          <span className="font-heading text-xl tracking-tight">
            Petal <span className="text-primary">&</span> Stem
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="rounded-full" asChild>
            <Link href="/shop">Order Now</Link>
          </Button>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 border-t border-border/40",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-6 py-4 space-y-3 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="rounded-full w-full mt-4" asChild>
            <Link href="/shop" onClick={() => setOpen(false)}>Order Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}