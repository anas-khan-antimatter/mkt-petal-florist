import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { careGuides } from "@/lib/data";

export function generateStaticParams() {
  return careGuides.map((g) => ({ slug: g.slug }));
}

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <ScissorsIcon />,
  Droplets: <DropletsIcon />,
  Sun: <SunIcon />,
  Sprout: <SproutIcon />,
  Thermometer: <ThermometerIcon />,
};

function ScissorsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M6 16 18 4M6 4l12 12" />
    </svg>
  );
}
function DropletsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 2a8 8 0 0 0-8 8c0 3.5 2 7 8 11 6-4 8-7.5 8-11a8 8 0 0 0-8-8Z" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2m-10-10h2m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
    </svg>
  );
}
function SproutIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M7 20v-4a6 6 0 0 1 6-6h2" /><path d="M13 20v-4a6 6 0 0 0-6-6H5" /><circle cx="15" cy="10" r="3" />
    </svg>
  );
}
function ThermometerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z" />
    </svg>
  );
}

export default async function CareGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = careGuides.find((g) => g.slug === slug);
  if (!guide) notFound();
  const IconComponent = iconMap[guide.icon] || <Sparkles className="w-6 h-6" />;

  return (
    <div className="pt-28 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#care"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Care Tips
        </Link>

        <div className="mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
            {IconComponent}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl leading-tight mb-3">
            {guide.title}
          </h1>
          <p className="text-lg text-muted-foreground">{guide.summary}</p>
        </div>

        <Separator className="mb-8" />

        <div className="space-y-10">
          {guide.steps.map((step, i) => (
            <div key={i}>
              <h2 className="font-heading text-xl mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                  {i + 1}
                </span>
                {step.title}
              </h2>
              <p className="text-foreground/80 leading-relaxed ml-10">{step.detail}</p>
            </div>
          ))}
        </div>

        {guide.tips.length > 0 && (
          <>
            <Separator className="my-10" />
            <div>
              <h2 className="font-heading text-xl mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Pro Tips
              </h2>
              <ul className="space-y-3">
                {guide.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <Separator className="my-10" />

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Have a specific care question? Our florists are here to help.
          </p>
          <Button variant="outline" className="rounded-full" asChild>
            <a href="/#care">View All Care Guides</a>
          </Button>
        </div>
      </div>
    </div>
  );
}