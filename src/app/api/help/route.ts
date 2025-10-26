
import { NextResponse } from 'next/server';
import { z } from 'zod';

const helpFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  type: z.enum(["general", "bug", "feature", "feedback", "account"]),
  message: z.string().min(10).max(1000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedData = helpFormSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json({ success: false, error: 'Invalid data provided.' }, { status: 400 });
    }
    
    // In a real application, you would process this data.
    // For example, send an email or create a ticket in a support system.
    console.log("New Help Request Received:");
    console.log("Name:", parsedData.data.name);
    console.log("Email:", parsedData.data.email);
    console.log("Type:", parsedData.data.type);
    console.log("Message:", parsedData.data.message);

    // Simulate a successful submission
    return NextResponse.json({ success: true, message: "Request received successfully." });

  } catch (error) {
    console.error('API Error in /api/help:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
