import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
        question: "What is Pickup Lines Ultra?",
        answer: "Pickup Lines Ultra is a web and mobile application that provides a vast collection of over 1000 pickup lines across 78+ categories in 4 different languages: Hinglish, Hindi, English, and Mandarin."
    },
    {
        question: "Is this app free to use?",
        answer: "Yes, Pickup Lines Ultra is 100% free to use. It is supported by non-intrusive advertisements to cover development and server costs. There are no premium tiers or paywalls."
    },
    {
        question: "Do I need an account to use the app?",
        answer: "No account or login is required. We have a strict privacy-first policy and do not collect any personal data. Your bookmarks and preferences are stored locally on your device."
    },
    {
        question: "Can I use the pickup lines on social media?",
        answer: "Absolutely! You can easily copy any pickup line with a single tap and share it on WhatsApp, Instagram, Tinder, or any other social media platform."
    },
  ];
  
  export function FAQSection() {
    return (
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-white/10">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }
  