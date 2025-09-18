
'use server';
/**
 * @fileOverview A flow for handling user feedback submission.
 *
 * - submitFeedback: A function to process and store user feedback.
 * - FeedbackInput: The input type for the submitFeedback function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const FeedbackInputSchema = z.object({
  rating: z.number().min(1).max(5).describe('The star rating given by the user (1-5).'),
  review: z.string().min(10).max(500).describe('The detailed feedback text from the user.'),
  email: z.string().email().optional().or(z.literal('')).describe('The optional email provided by the user for follow-up.'),
});
export type FeedbackInput = z.infer<typeof FeedbackInputSchema>;

// This is the main function that the client-side will call.
export async function submitFeedback(input: FeedbackInput): Promise<{ success: boolean }> {
  // We can add validation or preprocessing here if needed.
  console.log("Received feedback submission:", input);
  
  // Invoke the Genkit flow
  const { success, message } = await feedbackFlow(input);
  
  if (!success) {
    console.error("Feedback flow failed:", message);
    throw new Error(message);
  }
  
  console.log("Feedback flow succeeded.");
  return { success: true };
}


const feedbackFlow = ai.defineFlow(
  {
    name: 'feedbackFlow',
    inputSchema: FeedbackInputSchema,
    outputSchema: z.object({
        success: z.boolean(),
        message: z.string().optional(),
    }),
  },
  async (input) => {
    // In a real-world scenario, this is where you would integrate
    // with a service to send an email or store the feedback in a database.
    // For example, using Firestore, or an email service like SendGrid.
    
    console.log('Processing feedback in Genkit flow...');
    console.log(`Rating: ${input.rating}`);
    console.log(`Review: ${input.review}`);
    console.log(`Email: ${input.email || 'Not provided'}`);

    // Here we would add the logic to send an email.
    // As we don't have an email service integrated, we'll just simulate a success response.
    // Example (pseudo-code):
    //
    // const emailClient = new EmailService(process.env.EMAIL_API_KEY);
    // await emailClient.send({
    //   to: 'feedback@pickuplines-ultra.com',
    //   from: 'noreply@pickuplines-ultra.com',
    //   subject: `New Feedback Received: ${input.rating} stars`,
    //   body: `
    //     A new piece of feedback has been submitted.
    //
    //     Rating: ${input.rating}/5
    //     Review: ${input.review}
    //     User Email: ${input.email || 'Not provided'}
    //   `
    // });
    
    // Simulate a successful operation.
    return {
      success: true,
      message: 'Feedback processed successfully by the flow.'
    };
  }
);
