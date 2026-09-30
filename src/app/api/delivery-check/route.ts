import { NextRequest, NextResponse } from "next/server";
import { checkDeliveryZip } from "@/lib/data";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const zip = searchParams.get("zip");

  if (!zip || zip.length < 3) {
    return NextResponse.json(
      { valid: false, message: "Please provide a ZIP code with at least 3 digits" },
      { status: 400 }
    );
  }

  const result = checkDeliveryZip(zip);
  return NextResponse.json(result);
}