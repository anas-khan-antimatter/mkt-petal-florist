import { notFound } from "next/navigation";
import { occasions } from "@/lib/data";
import OccasionDetailClient from "./OccasionDetailClient";

export function generateStaticParams() {
  return occasions.map((o) => ({ id: o.slug }));
}

export default async function OccasionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const occasion = occasions.find((o) => o.slug === id);
  if (!occasion) notFound();
  return <OccasionDetailClient occasion={occasion} />;
}