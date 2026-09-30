"use client";

import { useState } from "react";
import { Flower2, Truck, MapPin, Calendar, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const blockedDates = [
  "2025-12-25", "2025-12-26", "2025-12-31", "2026-01-01",
  "2026-04-05", "2026-05-10", "2026-07-04", "2026-11-26",
];

const deliveryZones = [
  { zip: "10001", zone: "Manhattan — Free", fee: 0, eta: "Same-day (order by 2pm)" },
  { zip: "11201", zone: "Brooklyn — $5", fee: 5, eta: "Next-day" },
  { zip: "11301", zone: "Queens — $8", fee: 8, eta: "1-2 days" },
  { zip: "10451", zone: "Bronx — $8", fee: 8, eta: "1-2 days" },
  { zip: "10301", zone: "Staten Island — $12", fee: 12, eta: "2-3 days" },
  { zip: "07001", zone: "New Jersey — $15", fee: 15, eta: "2-3 days" },
];

const TODAY = new Date();
const currentYear = TODAY.getFullYear();
const currentMonth = TODAY.getMonth();

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function formatDate(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function isPastDate(year: number, month: number, day: number): boolean {
  const d = new Date(year, month, day);
  d.setHours(0, 0, 0, 0);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return d < now;
}

function isBlocked(year: number, month: number, day: number): boolean {
  return blockedDates.includes(formatDate(year, month, day));
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DeliveryPage() {
  const [displayYear, setDisplayYear] = useState(currentYear);
  const [displayMonth, setDisplayMonth] = useState(currentMonth);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [zipInput, setZipInput] = useState("");
  const [zipResult, setZipResult] = useState<{
    found: boolean;
    zone?: string;
    fee?: number;
    eta?: string;
  } | null>(null);

  const daysInMonth = getDaysInMonth(displayYear, displayMonth);
  const firstDay = getFirstDayOfMonth(displayYear, displayMonth);

  function prevMonth() {
    if (displayMonth === 0) {
      setDisplayMonth(11);
      setDisplayYear(displayYear - 1);
    } else {
      setDisplayMonth(displayMonth - 1);
    }
    setSelectedDay(null);
  }

  function nextMonth() {
    if (displayMonth === 11) {
      setDisplayMonth(0);
      setDisplayYear(displayYear + 1);
    } else {
      setDisplayMonth(displayMonth + 1);
    }
    setSelectedDay(null);
  }

  function checkZip() {
    const match = deliveryZones.find(
      (z) => z.zip === zipInput.trim()
    );
    if (match) {
      setZipResult({
        found: true,
        zone: match.zone,
        fee: match.fee,
        eta: match.eta,
      });
    } else {
      setZipResult({ found: false });
    }
  }

  return (
    <div className="pt-24 pb-24 px-6">
      {/* Hero */}
      <section className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-romantic-gradient" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-sm mb-4">
            Delivery
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-4">
            Fresh Blooms, <span className="text-primary italic font-script">Delivered</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We deliver throughout the tri-state area. Select your delivery date and check
            availability for your ZIP code.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Calendar */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-heading text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Select Delivery Date
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Month navigation */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevMonth}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted text-sm"
                >
                  &larr;
                </button>
                <h3 className="font-heading text-base font-medium">
                  {MONTH_NAMES[displayMonth]} {displayYear}
                </h3>
                <button
                  onClick={nextMonth}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted text-sm"
                >
                  &rarr;
                </button>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 text-[10px] text-muted-foreground font-medium text-center mb-2">
                {DAY_NAMES.map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Leading empty cells */}
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {/* Day cells */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const past = isPastDate(displayYear, displayMonth, day);
                  const blocked = isBlocked(displayYear, displayMonth, day);
                  const isSelected = selectedDay === day;
                  const available = !past && !blocked;

                  return (
                    <button
                      key={day}
                      disabled={!available}
                      onClick={() => setSelectedDay(day)}
                      className={`w-full aspect-square rounded-md text-xs flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-primary text-primary-foreground font-bold"
                          : available
                            ? "hover:bg-primary/10 hover:text-primary text-foreground bg-background"
                            : "text-muted-foreground/30 cursor-not-allowed"
                      } ${blocked && !past ? "line-through" : ""}`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-3 mt-6 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary" /> Available
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-muted" /> Past
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-destructive/30" /> Blocked
                </span>
              </div>

              {selectedDay && (
                <div className="mt-4 p-3 rounded-xl bg-secondary/5 border border-sage">
                  <p className="text-sm flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <strong>{MONTH_NAMES[displayMonth]} {selectedDay}, {displayYear}</strong>
                    &mdash; available for delivery
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* ZIP Check */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-heading text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Check Your Zone
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-sm text-muted-foreground">
                Enter your ZIP code to check delivery availability, fees, and estimated
                arrival times.
              </p>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="ZIP code, e.g. 10001"
                  value={zipInput}
                  onChange={(e) => {
                    setZipInput(e.target.value.replace(/[^0-9]/g, "").slice(0, 5));
                    setZipResult(null);
                  }}
                  maxLength={5}
                  className="flex-1 h-10 px-4 rounded-xl border border-border bg-background text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <Button onClick={checkZip} size="sm" className="rounded-full">
                  Check
                </Button>
              </div>

              {/* Result */}
              {zipResult && (
                <div
                  className={`p-4 rounded-xl ${
                    zipResult.found
                      ? "bg-secondary/5 border border-sage"
                      : "bg-destructive/5 border border-destructive/30"
                  }`}
                >
                  {zipResult.found ? (
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <strong className="text-secondary">{zipResult.zone}</strong>
                      </div>
                      {zipResult.fee && zipResult.fee > 0 ? (
                        <p className="text-muted-foreground">
                          Delivery fee: <strong>${zipResult.fee}</strong>
                        </p>
                      ) : (
                        <p className="text-muted-foreground">
                          <strong>Free delivery</strong> on orders over $65
                        </p>
                      )}
                      <p className="text-muted-foreground">ETA: {zipResult.eta}</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-destructive" />
                      <span>
                        We don&rsquo;t currently deliver to <strong>{zipInput}</strong>. Check
                        back as we expand our delivery zones.
                      </span>
                    </div>
                  )}
                </div>
              )}

              <Separator />

              <h3 className="font-heading text-sm uppercase tracking-wider text-muted-foreground">
            Delivery Zones
          </h3>
          <div className="space-y-2 text-xs">
            {deliveryZones.map((z) => (
              <div key={z.zip} className="flex items-center justify-between">
                <span>
                  <strong>{z.zip}</strong> &mdash; {z.zone}
                </span>
                <span className="text-muted-foreground">{z.eta}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Delivery info */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="font-heading text-base flex items-center gap-2">
            <Truck className="w-4 h-4 text-primary" />
            Free over $65
          </CardTitle>
        </CardHeader>
        <CardContent className="text-xs text-muted-foreground">
          Orders of $65 or more within our standard delivery zone ship free.
          Hand-tied with love and delivered in eco-friendly packaging.
        </CardContent>
      </Card>
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="font-heading text-base flex items-center gap-2">
            <Calendar className="w-4 h-4 text-secondary" />
            Schedule Ahead
          </CardTitle>
        </CardHeader>
        <CardContent className="text-xs text-muted-foreground">
          Book your delivery up to 30 days in advance. We&rsquo;ll send a reminder
          the day before so you never miss a moment.
        </CardContent>
      </Card>
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="font-heading text-base flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            Expanding Soon
          </CardTitle>
        </CardHeader>
        <CardContent className="text-xs text-muted-foreground">
          We&rsquo;re growing! New zones added monthly. Sign up for delivery
          announcements to be the first to know.
        </CardContent>
      </Card>
    </div>
  </div>
</div>
);
}