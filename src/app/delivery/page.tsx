"use client";

import { useState } from "react";
import { MapPin, Truck, Clock, CheckCircle, ChevronLeft, ChevronRight, Search, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deliveryZones, checkDeliveryZip, type DeliveryZone } from "@/lib/data";

const perks = [
  { icon: Truck, title: "Free Delivery", desc: "On orders over $65 in Zone 1-2" },
  { icon: Clock, title: "Same Day Service", desc: "Order by 2pm for same-day delivery" },
  { icon: CheckCircle, title: "Hand-Delivered", desc: "Each order arranged and hand-delivered by our team" },
];

// ─── Mini Calendar ──────────────────────────────────────────────

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function CalendarWidget({ onSelectDate }: { onSelectDate: (date: Date) => void }) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<number | null>(null);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    if (month === 0) { setYear(year - 1); setMonth(11); }
    else setMonth(month - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setYear(year + 1); setMonth(0); }
    else setMonth(month + 1);
  };

  const handleSelect = (day: number) => {
    if (day < today.getDate() && month === today.getMonth() && year === today.getFullYear()) return;
    if (month < today.getMonth() && year === today.getFullYear()) return;
    if (year < today.getFullYear()) return;
    const date = new Date(year, month, day);
    setSelected(day);
    onSelectDate(date);
  };

  const isPast = (day: number) => {
    const d = new Date(year, month, day);
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const grid: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) grid.push(null);
  for (let d = 1; d <= daysInMonth; d++) grid.push(d);

  return (
    <div className="bg-white rounded-xl border border-border/60 p-4">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-1 rounded-lg hover:bg-muted transition-colors" aria-label="Previous month">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="font-heading text-sm">{MONTHS[month]} {year}</span>
        <button onClick={nextMonth} className="p-1 rounded-lg hover:bg-muted transition-colors" aria-label="Next month">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {DAYS.map((d) => (
          <div key={d} className="text-[10px] font-medium text-muted-foreground py-1">{d}</div>
        ))}
        {grid.map((day, i) => (
          <div key={i}>
            {day !== null ? (
              <button
                onClick={() => handleSelect(day)}
                disabled={isPast(day)}
                className={`w-8 h-8 text-xs rounded-full transition-colors ${
                  selected === day
                    ? "bg-primary text-primary-foreground font-medium"
                    : isPast(day)
                    ? "text-muted-foreground/30 cursor-not-allowed"
                    : "hover:bg-primary/10 text-foreground"
                }`}
              >
                {day}
              </button>
            ) : (
              <div className="w-8 h-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DeliveryPage() {
  const [zip, setZip] = useState("");
  const [zipResult, setZipResult] = useState<{ zone: DeliveryZone | null; valid: boolean; message: string } | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [checked, setChecked] = useState(false);

  const handleZipCheck = () => {
    const result = checkDeliveryZip(zip);
    setZipResult(result);
    setChecked(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 px-6 bg-romantic-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-sm mb-4">
            Delivery Information
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-4">
            Fresh Blooms at Your{" "}
            <span className="text-primary italic font-script">Doorstep</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            We bring handcrafted arrangements to your home or office with
            care, reliability, and a smile.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <Card key={perk.title} className="border-border/60 bg-white/80 backdrop-blur-sm">
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
      </section>

      {/* Two-column: Calendar + Zip checker */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Calendar */}
          <div>
            <h2 className="font-heading text-2xl mb-6 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-primary" />
              Choose Delivery Date
            </h2>
            <CalendarWidget onSelectDate={setSelectedDate} />
            {selectedDate && (
              <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm">
                  Selected:{" "}
                  <span className="font-medium">
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long", year: "numeric", month: "long", day: "numeric",
                    })}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Same-day available for orders placed by 2pm.
                </p>
              </div>
            )}
          </div>

          {/* ZIP checker */}
          <div>
            <h2 className="font-heading text-2xl mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Check Your Zone
            </h2>
            <Card className="border-border/60 mb-6">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Enter your ZIP code to see delivery options for your area.
                </p>
                <div className="flex gap-3">
                  <Input
                    placeholder="Enter ZIP code"
                    value={zip}
                    onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                    className="rounded-full"
                  />
                  <Button
                    className="rounded-full shrink-0 gap-2"
                    onClick={handleZipCheck}
                    disabled={zip.length < 3}
                  >
                    <Search className="w-4 h-4" />
                    Check
                  </Button>
                </div>

                {checked && zipResult && (
                  <div className={`mt-4 p-4 rounded-xl border ${
                    zipResult.valid
                      ? "bg-green-50 border-green-200"
                      : "bg-amber-50 border-amber-200"
                  }`}>
                    <div className="flex items-start gap-3">
                      {zipResult.valid ? (
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      ) : (
                        <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className={`text-sm font-medium ${
                          zipResult.valid ? "text-green-800" : "text-amber-800"
                        }`}>
                          {zipResult.valid ? "We deliver to you!" : "Outside delivery area"}
                        </p>
                        <p className={`text-xs mt-1 ${
                          zipResult.valid ? "text-green-700" : "text-amber-700"
                        }`}>
                          {zipResult.message}
                        </p>
                        {zipResult.valid && zipResult.zone && (
                          <div className="mt-2 text-xs text-green-700 space-y-1">
                            <p>• Minimum order: ${zipResult.zone.minOrder}</p>
                            <p>• Delivery fee: {zipResult.zone.fee}</p>
                            <p>• Estimated time: {zipResult.zone.time}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Zone reference */}
            <div>
              <h3 className="font-heading text-sm uppercase tracking-wider text-muted-foreground mb-3">Delivery Zones</h3>
              <div className="space-y-2">
                {deliveryZones.map((zone) => (
                  <div
                    key={zone.zone}
                    className={`flex items-center justify-between p-3 rounded-xl border ${zone.color} text-sm`}
                  >
                    <div>
                      <span className="font-medium">{zone.name}</span>
                      <span className={`text-xs ml-2 ${zone.textColor}`}>{zone.zone}</span>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      <div>{zone.fee}</div>
                      <div>{zone.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-primary/5 border-primary/10">
            <CardContent className="py-8 text-center">
              <h2 className="font-heading text-2xl mb-2">Ready to Order?</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Browse our seasonal collection or build your own bouquet.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button className="rounded-full" asChild>
                  <a href="/shop">Shop Now</a>
                </Button>
                <Button variant="outline" className="rounded-full" asChild>
                  <a href="/bouquet-builder">Build Your Own</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}