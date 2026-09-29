"use client";

import { Flower2, Heart, Instagram, Facebook, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  shop: [
    { label: "Seasonal Arrangements", href: "#seasonal" },
    { label: "Custom Bouquet", href: "#builder" },
    { label: "Gift Cards", href: "#" },
    { label: "Subscription", href: "#" },
  ],
  services: [
    { label: "Wedding Floristry", href: "#weddings" },
    { label: "Corporate Events", href: "#" },
    { label: "Sympathy Flowers", href: "#" },
    { label: "Workshops", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Care Tips", href: "#care" },
    { label: "Delivery Zones", href: "#delivery" },
    { label: "Contact", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Flower2 className="w-6 h-6 text-primary" />
              <span className="font-heading text-xl">
                Petal <span className="text-primary">&</span> Stem
              </span>
            </Link>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              Artisan floral design studio crafting meaningful arrangements for
              life&rsquo;s every moment. Farm-fresh blooms, hand-tied with love.
            </p>
            <div className="flex gap-3 pt-2">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-heading text-sm uppercase tracking-wider text-white/50 mb-4">
                {key}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/10" />

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex items-center gap-1">
            &copy; {new Date().getFullYear()} Petal &amp; Stem. All rights
            reserved. Made with <Heart className="w-3 h-3 text-primary inline" /> and flowers.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              123 Bloom Street, Flora City
            </span>
            <Button
              variant="link"
              className="p-0 h-auto text-xs text-white/40 hover:text-white"
            >
              Privacy Policy
            </Button>
            <Button
              variant="link"
              className="p-0 h-auto text-xs text-white/40 hover:text-white"
            >
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}