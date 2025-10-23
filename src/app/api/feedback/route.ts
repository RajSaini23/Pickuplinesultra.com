
import { submitFeedback, type FeedbackInput } from '@/ai/flows/feedback-flow';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body: FeedbackInput = await request.json();

    // Basic validation
    if (!body.rating || !body.review) {
      return NextResponse.json({ success: false, error: 'Missing rating or review' }, { status: 400 });
    }

    const result = await submitFeedback(body);
    
    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: 'Feedback submission failed' }, { status: 500 });
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
