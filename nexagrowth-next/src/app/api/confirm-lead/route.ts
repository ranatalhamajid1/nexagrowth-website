import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/confirm-lead
 *
 * Stub endpoint for lead confirmation. In production, connect to:
 * - Email service (Resend, SendGrid)
 * - WhatsApp Business API
 * - CRM (HubSpot, Notion database, etc.)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, phone } = body;
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    // TODO: send confirmation email via Resend/SendGrid
    // TODO: send WhatsApp notification
    // TODO: save lead to CRM

    return NextResponse.json(
      { message: "Lead confirmed successfully.", lead: { name, email, phone } },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
