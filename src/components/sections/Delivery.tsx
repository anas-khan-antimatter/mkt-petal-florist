"use client";

import { MapPin, Truck, Clock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { deliveryZones } from "@/lib/data";

const perks = [
  {
    icon: Truck,
    title: "Free Delivery",
    desc: "On orders over $65 in Zone 1-2",
  },
  {
    icon: Clock,
    title: "Same Day Service",
    desc: "Order by 2pm for same-day delivery",
  },
  {
    icon: CheckCircle,
    title: "Hand-Delivered",
    desc: "Each order arranged and hand-delivered",
  },
];

export default function Delivery() {
  return (
    <section id="delivery" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-romantic-gradient" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1 text-sm mb-4"
          >
            Delivery Zones
          </Badge>
          <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-4">
            We Bring Beauty to Your <span className="text-primary italic font-script">Doorstep</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Fresh flowers delivered with care across the greater metropolitan
            area.
          </p>
        </div>

        {/* Perks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <Card
                key={perk.title}
                className="border-border/60 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg mb-1">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground">{perk.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Zones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {deliveryZones.map((zone) => (
            <div
              key={zone.zone}
              className={`rounded-xl border p-5 ${zone.color}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold uppercase tracking-wider ${zone.textColor}`}>
                  {zone.zone}
                </span>
                <span className="font-heading text-lg font-bold">
                  {zone.fee}
                </span>
              </div>
              <h4 className="font-heading text-base mb-1">{zone.name}</h4>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {zone.time}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Min. ${zone.minOrder}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/delivery">
            <Button className="rounded-full px-8 gap-2">
              <MapPin className="w-4 h-4" />
              Check Your Zone
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}