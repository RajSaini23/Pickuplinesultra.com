import { Search, Heart, Share2 } from "lucide-react";

const steps = [
    {
        icon: <Search className="h-10 w-10 text-blue-400" />,
        title: "Find Your Line",
        description: "Browse through 78+ categories or search for the perfect line for any situation."
    },
    {
        icon: <Heart className="h-10 w-10 text-pink-400" />,
        title: "Save Your Favorites",
        description: "Bookmark the lines you love for quick access, even when you're offline."
    },
    {
        icon: <Share2 className="h-10 w-10 text-purple-400" />,
        title: "Copy & Share",
        description: "With a single tap, copy any line and share it on WhatsApp, Instagram, or anywhere else."
    }
];

export function HowItWorks() {
    return (
        <section className="py-20 bg-[#151525]">
            <div className="container mx-auto px-4">
                 <h2 className="text-4xl font-bold text-center mb-4 text-white">
                    How It Works
                </h2>
                <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                    Finding and sharing the perfect pickup line has never been easier.
                </p>
                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
