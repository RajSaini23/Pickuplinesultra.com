
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { FAQSchema } from "./ui/structured-data";
  
  const faqs = [
    {
        q: "What is Pickup Lines Ultra?",
        a: "Pickup Lines Ultra is a web and mobile application that provides a vast collection of over 1000 pickup lines across 78+ categories in 4 different languages: Hinglish, Hindi, English, and Mandarin."
    },
    {
        q: "Is this app free to use?",
        a: "Yes, Pickup Lines Ultra is 100% free to use. It is supported by non-intrusive advertisements to cover development and server costs. There are no premium tiers or paywalls."
    },
    {
        q: "Do I need an account to use the app?",
        a: "No account or login is required. We have a strict privacy-first policy and do not collect any personal data. Your bookmarks and preferences are stored locally on your device."
    },
    {
        q: "Can I use the pickup lines on social media?",
        a: "Absolutely! You can easily copy any pickup line with a single tap and share it on WhatsApp, Instagram, Tinder, or any other social media platform."
    },
  ];
  
  export function FAQSection() {
    return (
      <section className="py-20 bg-background">
        <FAQSchema faqs={faqs} />
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/10">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }
  
