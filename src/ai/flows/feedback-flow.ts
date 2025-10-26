
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
    // with a service to send an email to 'indgrowsivestudio@gmail.com' 
    // or store the feedback in a database like Firestore.
    
    console.log('Processing feedback in Genkit flow...');
    console.log(`Rating: ${input.rating}`);
    console.log(`Review: ${input.review}`);
    console.log(`Email: ${input.email || 'Not provided'}`);

    // Here we would add the logic to send an email.
    // For now, we'll just log it to the console and simulate a success response.
    // In a future step, we could use a service like Nodemailer or Resend here.
    
    return {
      success: true,
      message: 'Feedback processed successfully by the flow.'
    };
  }
);
