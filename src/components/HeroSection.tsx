import { Button } from "@/components/ui/button";
import { Download, Github, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-primary rounded-full blur-3xl opacity-15 animate-pulse delay-1000" />

      <div className="relative z-10 text-center max-w-4xl mx-auto mt-40">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="/logo.webp"
            alt="Hedit Logo"
            className="w-24 h-24 drop-shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 mb-8">
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm text-muted-foreground">The powerful hosts file editor</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            hosts file editor
          </span>
          {" "}for{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            modern people
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Fast and intuitive hosts file management.
          Edit, manage, and organize your hosts entries with a beautiful and modern interface.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold"
            asChild
          >
            <Link to="/download">
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Link>
          </Button>
            <Button
            variant="outline"
            size="sm"
            className="border-border hover:bg-secondary px-6 py-6 text-lg"
            asChild
            >
            <a
              href="https://github.com/valtlfelipe/hedit"
              target="_blank"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            </Button>
        </div>

        {/* Stats */}
        {/* <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span>5.0 stars on GitHub</span>
          </div>
          <div>•</div>
          <div>10k+ downloads</div>
          <div>•</div>
          <div>Open source</div>
        </div> */}
        <div className="text-sm text-muted-foreground opacity-40">
          <em>Available for Mac. Soon available for Linux and Windows.</em>
        </div>

        <div className="inline-flex mt-12">
          <img src="/hedit-screenshot.webp" alt="Hedit Screenshot" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;