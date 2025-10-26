
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Card } from '@/components/ui/card';

const helpFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  type: z.enum(["general", "bug", "feature", "feedback", "account"], {
    required_error: "You need to select a query type.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000),
});

export function HelpForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof helpFormSchema>>({
    resolver: zodResolver(helpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof helpFormSchema>) {
    setIsSubmitting(true);

    const subject = `Help Request: ${data.type} - from ${data.name}`;
    const body = `
      A new help request has been submitted from the Pickup Lines Ultra app.
      
      ---
      Name: ${data.name}
      Email: ${data.email}
      Query Type: ${data.type}
      ---
      
      Message:
      ${data.message}
    `;

    const mailtoLink = `mailto:indgrowsivestudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    toast({
      title: "Opening Email App",
      description: "Please send the email from your mail client.",
    });

    // Reset the form and submission state after a short delay
    setTimeout(() => {
        form.reset();
        setIsSubmitting(false);
    }, 1500);
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
                        <Input placeholder="Enter your name" {...field} />
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
                        <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Query Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                        <SelectValue placeholder="Select the type of your query" />
                        </Trigger>
                    </FormControl>
                    <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="account">Account Issue</SelectItem>
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
                <FormLabel>Message</FormLabel>
                <FormControl>
                    <Textarea
                    placeholder="Tell us how we can help you"
                    className="resize-none min-h-[150px]"
                    {...field}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting ? "Preparing Email..." : "Send Message"}
            </Button>
        </form>
        </Form>
    </Card>
  );
}
