import { Button } from "@/components/ui/button";
import { Download,  Heart, HeartHandshake } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-glow rounded-3xl blur-3xl" />

          <div className="relative bg-card border border-border rounded-3xl p-12 shadow-elegant">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Constantly{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                improving
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hedit is in active development. Your feedback is invaluable for shaping the future of Hedit.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/download">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Hedit
                </Button>
                </a>
              <a href="https://github.com/valtlfelipe/hedit/issues/new/choose" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-secondary px-8 py-6 text-lg"
                >
                  <HeartHandshake className="w-5 h-5 mr-2" />
                  Share Feedback
                </Button>
                </a>
            </div>

            {/* Personal note */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <img src="/valtlfelipe.webp" alt="Profile Picture" className="w-12 h-12 rounded-full" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Hey, I'm the creator!</div>
                  <div className="text-sm text-muted-foreground">Felipe Valtl de Mello</div>
                </div>
              </div>

              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I created Hedit after using an outdated hosts file editor that didn't support Apple Silicon. I wanted a modern, user-friendly alternative that works seamlessly on today's systems.
              </p>

              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>Made with love for the community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;