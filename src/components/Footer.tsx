import { Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="Hedit"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-foreground">Hedit</span>
            </div>
            <p className="text-muted-foreground">
              The modern hosts file editor for people who care about their tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/download" className="hover:text-foreground transition-colors">Download</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bug Reports</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Feature Requests</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/human" className="hover:text-foreground transition-colors">Build by Human</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://github.com/valtlfelipe/hedit" target="_blank" className="hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="https://x.com/valtlfelipe" target="_blank" className="hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="https://bsky.app/profile/felipevm.dev" target="_blank" className="hover:text-foreground transition-colors">BlueSky</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 mt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Hedit - FVM Tec. All rights reserved.
          </p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>Made with love in 🇧🇷</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;