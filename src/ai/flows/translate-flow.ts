
'use server';
/**
 * @fileOverview A flow for translating text into different languages.
 *
 * - translateText: A function to translate text.
 * - TranslationInput: The input type for the translateText function.
 * - TranslationOutput: The return type for the translateText function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const TranslationInputSchema = z.object({
  text: z.string().describe('The text to be translated.'),
  targetLanguage: z.string().describe('The target language for translation (e.g., "Hindi", "Spanish").'),
});
export type TranslationInput = z.infer<typeof TranslationInputSchema>;

const TranslationOutputSchema = z.object({
  translatedText: z.string().describe('The translated text.'),
});
export type TranslationOutput = z.infer<typeof TranslationOutputSchema>;

// This is the main function that the client-side will call.
export async function translateText(input: TranslationInput): Promise<TranslationOutput> {
  const { output } = await translateFlow(input);
  if (!output) {
    throw new Error('Translation flow failed to produce an output.');
  }
  return output;
}

const translatePrompt = ai.definePrompt({
  name: 'translatePrompt',
  input: { schema: TranslationInputSchema },
  output: { schema: TranslationOutputSchema },
  prompt: `Translate the following text into {{targetLanguage}}.
  
  Only return the translated text and nothing else. Do not add any extra explanations or context.
  
  Text to translate:
  "{{{text}}}"`,
});


const translateFlow = ai.defineFlow(
  {
    name: 'translateFlow',
    inputSchema: TranslationInputSchema,
    outputSchema: TranslationOutputSchema,
  },
  async (input) => {
    const llmResponse = await translatePrompt(input);
    return llmResponse.output!;
  }
);
