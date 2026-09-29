"use client";

import { MapPin, Truck, Clock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const zones = [
  {
    name: "Downtown Core",
    zone: "Zone 1",
    fee: "Free",
    time: "1-2 hours",
    minOrder: "$35",
    color: "bg-green-50 border-green-200",
    textColor: "text-green-700",
  },
  {
    name: "Metro Area",
    zone: "Zone 2",
    fee: "$5",
    time: "2-4 hours",
    minOrder: "$45",
    color: "bg-blue-50 border-blue-200",
    textColor: "text-blue-700",
  },
  {
    name: "Suburbs",
    zone: "Zone 3",
    fee: "$10",
    time: "4-6 hours",
    minOrder: "$55",
    color: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
  },
  {
    name: "Extended Area",
    zone: "Zone 4",
    fee: "$15",
    time: "Next Day",
    minOrder: "$65",
    color: "bg-rose-50 border-rose-200",
    textColor: "text-rose-700",
  },
];

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

        {/* Zone cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {zones.map((zone) => (
            <Card
              key={zone.name}
              className={`border ${zone.color}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={zone.textColor}>
                    {zone.zone}
                  </Badge>
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                </div>
                <CardTitle className="font-heading text-lg mt-2">
                  {zone.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="font-medium">{zone.fee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Est. Time</span>
                  <span className="font-medium">{zone.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Min. Order</span>
                  <span className="font-medium">${zone.minOrder}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Not sure about your zone? Enter your address at checkout for
            accurate details.
          </p>
          <Button variant="outline" className="rounded-full px-8 gap-2">
            <MapPin className="w-4 h-4" />
            Check My Address
          </Button>
        </div>
      </div>
    </section>
  );
}