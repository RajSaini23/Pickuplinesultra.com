"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader } from '@/components/ui/loader';
import { Send } from 'lucide-react';
import * as React from 'react';
import { Card } from "@/components/ui/card";

const helpFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  queryType: z.enum(["bug_report", "feature_request", "general_feedback", "other"]),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not be longer than 500 characters.",
  }),
});

export function HelpForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof helpFormSchema>>({
    resolver: zodResolver(helpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      queryType: "general_feedback",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof helpFormSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/help', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your feedback. We'll get back to you soon.",
      });
      form.reset();

    } catch (error: any) {
       toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "Could not send your message. Please try again later.",
      });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <Card className="p-6 md:p-8">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                        <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>

            <FormField
                control={form.control}
                name="queryType"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Reason for Contact</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                        <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectItem value="general_feedback">General Feedback</SelectItem>
                        <SelectItem value="bug_report">Report a Bug</SelectItem>
                        <SelectItem value="feature_request">Feature Request</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                    <Textarea
                        placeholder="Tell us a little more about your query..."
                        className="resize-none"
                        rows={6}
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-lg">
                {isSubmitting ? <Loader /> : <Send className="mr-2 h-5 w-5" />}
                Send Message
            </Button>
        </form>
        </Form>
    </Card>
  );
}
