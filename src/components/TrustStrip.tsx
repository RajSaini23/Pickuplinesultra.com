import { Zap, Languages, Smile } from "lucide-react";

export function TrustStrip() {
    return (
        <div className="bg-card/50 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex items-center justify-center gap-4">
                        <Zap className="h-8 w-8 text-primary" />
                        <div>
                            <h4 className="text-xl font-bold text-foreground">Fast & Modern</h4>
                            <p className="text-muted-foreground">Optimized for a seamless experience.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <Languages className="h-8 w-8 text-accent" />
                         <div>
                            <h4 className="text-xl font-bold text-foreground">Multilingual</h4>
                            <p className="text-muted-foreground">4+ languages supported.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <Smile className="h-8 w-8 text-secondary" />
                         <div>
                            <h4 className="text-xl font-bold text-foreground">1000+ Lines</h4>
                            <p className="text-muted-foreground">For every mood and situation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
