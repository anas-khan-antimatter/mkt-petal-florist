import { notFound } from "next/navigation";
import { bouquets } from "@/lib/data";
import BouquetDetailClient from "./BouquetDetailClient";

export function generateStaticParams() {
  return bouquets.map((b) => ({ id: b.slug }));
}

export default async function BouquetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bouquet = bouquets.find((b) => b.slug === id || b.id === id);
  if (!bouquet) notFound();
  return <BouquetDetailClient bouquet={bouquet} />;
}