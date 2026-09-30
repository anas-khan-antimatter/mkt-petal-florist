import { NextRequest, NextResponse } from "next/server";

export type OrderItem = {
  selections: Record<string, string>;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type OrderRequest = {
  items: OrderItem[];
  contact: {
    name: string;
    email: string;
    phone?: string;
  };
  delivery?: {
    date: string;
    zip: string;
    notes?: string;
  };
};

export type OrderResponse = {
  success: boolean;
  orderId?: string;
  message: string;
  estimatedReady?: string;
};

const ORDER_PREFIXES = ["PET", "BLM", "ARR", "BQ"];

function generateOrderId(): string {
  const prefix = ORDER_PREFIXES[Math.floor(Math.random() * ORDER_PREFIXES.length)];
  const num = String(Math.floor(1000 + Math.random() * 9000));
  const suffix = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return `${prefix}-${num}${suffix}`;
}

function calculateEstimatedReady(): string {
  const now = new Date();
  now.setHours(now.getHours() + 24 + Math.floor(Math.random() * 12));
  return now.toISOString();
}

export async function POST(request: NextRequest) {
  try {
    const body: OrderRequest = await request.json();

    // Basic validation
    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        { success: false, message: "Order must contain at least one item." },
        { status: 400 }
      );
    }

    if (!body.contact?.name || !body.contact?.email) {
      return NextResponse.json(
        { success: false, message: "Contact name and email are required." },
        { status: 400 }
      );
    }

    // Check for OPENAI_API_KEY env var — if present, use AI to generate a confirmation message
    let confirmationNote = "Your bouquet has been received by our design team.";

    if (process.env.OPENAI_API_KEY) {
      try {
        const aiResponse = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              messages: [
                {
                  role: "system",
                  content:
                    "You are a poetic florist's assistant. Write a short, warm confirmation message (max 2 sentences) for a custom bouquet order. Mention flowers and craftsmanship.",
                },
                {
                  role: "user",
                  content: `Order: ${JSON.stringify(body.items)}`,
                },
              ],
              max_tokens: 80,
            }),
          }
        );
        const aiData = await aiResponse.json();
        if (aiData?.choices?.[0]?.message?.content) {
          confirmationNote = aiData.choices[0].message.content;
        }
      } catch {
        // AI call failed — use deterministic fallback
      }
    }

    // Deterministic fallback
    const orderId = generateOrderId();
    const estimatedReady = calculateEstimatedReady();

    const response: OrderResponse = {
      success: true,
      orderId,
      message: confirmationNote,
      estimatedReady,
    };

    return NextResponse.json(response, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request format. Please send a valid JSON order.",
      },
      { status: 400 }
    );
  }
}