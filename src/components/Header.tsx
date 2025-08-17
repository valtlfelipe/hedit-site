import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.webp"
              alt="Hedit"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-foreground">Hedit</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {/* <Link to="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            */}
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <a href="https://github.com/valtlfelipe/hedit/issues/new/choose" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
              Feedback
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
              asChild
            >
              <a
              href="https://github.com/valtlfelipe/hedit"
              target="_blank"
              >
              <Github className="w-4 h-4 mr-2" />
              GitHub
              </a>
            </Button>
            <Button asChild size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Link to="/download">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Link>
            </Button>
            {/* <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;