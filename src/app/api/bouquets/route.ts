import { NextRequest, NextResponse } from "next/server";
import { bouquets } from "@/lib/data";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const season = searchParams.get("season");
  const occasion = searchParams.get("occasion");
  const search = searchParams.get("search");

  let results = [...bouquets];

  if (season) {
    results = results.filter((b) => b.season.toLowerCase() === season.toLowerCase());
  }
  if (occasion) {
    results = results.filter((b) => b.occasions.includes(occasion.toLowerCase()));
  }
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.tagline.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({
    count: results.length,
    bouquets: results.map(({ stems, colorPalette, description, ...rest }) => ({
      ...rest,
      // Keep stems/colors for detail view, strip from concise if needed
      stemCount: stems.length,
      palette: colorPalette,
    })),
  });
}