import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// In-memory store (for demo/mock) + file persistence
const LEADS_FILE = path.join(process.cwd(), "leads.json");

async function getLeads() {
  try {
    const data = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveLeads(leads: Record<string, unknown>[]) {
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

// POST - Submit a new lead
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, company, domain, candidates, deliveryMode, location } = body;

    // Validation
    if (!name || !email || !phone || !company || !domain || !candidates || !deliveryMode) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const lead = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company,
      domain,
      candidates: Number(candidates),
      deliveryMode,
      location: location || "",
      submittedAt: new Date().toISOString(),
    };

    const leads = await getLeads();
    leads.push(lead);
    await saveLeads(leads);

    return NextResponse.json(
      { message: "Lead submitted successfully", lead },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET - Retrieve all leads (for admin/demo)
export async function GET() {
  try {
    const leads = await getLeads();
    return NextResponse.json({ leads, total: leads.length });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
