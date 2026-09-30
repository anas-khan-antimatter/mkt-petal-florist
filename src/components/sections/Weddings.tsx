"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Sparkles, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Weddings() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    vision: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="weddings" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-rose-petal" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="rounded-full px-4 py-1 text-sm mb-4 bg-white/50" variant="outline">
            Wedding & Events
          </Badge>
          <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-4">
            Let&rsquo;s Create Your{" "}
            <span className="text-primary italic font-script">Dream</span> Day
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            From intimate elopements to grand celebrations, our floral team
            brings your wedding vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Inspiration */}
          <div className="space-y-6">
            <Card className="border-border/60 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Our Wedding Services
                </h3>
                <ul className="space-y-3">
                  {[
                    "Bridal bouquets & boutonnières",
                    "Ceremony arch & altar arrangements",
                    "Reception centerpieces & decor",
                    "Bridesmaids' posies & corsages",
                    "Full venue floral styling",
                    "Consultation & mock-up session",
                  ].map((service) => (
                    <li key={service} className="flex items-center gap-3 text-sm">
                      <Sparkles className="w-4 h-4 text-primary shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl mb-4">What Our Couples Say</h3>
                <div className="space-y-4">
                  {[
                    {
                      quote: "Our wedding flowers were absolutely breathtaking. The team at Petal & Stem captured our vision perfectly.",
                      author: "Sarah & Michael",
                    },
                    {
                      quote: "From the consultation to the big day, everything was seamless. The arrangements exceeded every expectation.",
                      author: "Emily & James",
                    },
                  ].map(({ quote, author }) => (
                    <div key={author} className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <p className="text-sm italic text-muted-foreground mb-2">&ldquo;{quote}&rdquo;</p>
                      <p className="text-xs font-medium">{author}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-lg">Other Occasions</h3>
                    <p className="text-sm text-muted-foreground">Explore flowers for every celebration</p>
                  </div>
                  <Link href="/occasions">
                    <Button variant="outline" size="sm" className="rounded-full gap-1">
                      Browse <ArrowRight className="w-3 h-3" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Inquiry Form */}
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Send Us Your Vision</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">
                    We&rsquo;ll review your vision and reach out within 1-2 business days
                    to schedule your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-1">Name</label>
                      <Input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-1">Email</label>
                      <Input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-1">Phone</label>
                      <Input name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-1">Event Date</label>
                      <Input name="date" type="date" value={form.date} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-1">Est. Guests</label>
                      <Input name="guests" value={form.guests} onChange={handleChange} placeholder="e.g. 120" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">Your Vision</label>
                    <Textarea
                      name="vision"
                      value={form.vision}
                      onChange={handleChange}
                      placeholder="Tell us about your theme, color palette, and what you're dreaming of..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-full gap-2">
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}