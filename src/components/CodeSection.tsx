import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const CodeSection = () => {
  const hostEntries = [
    { ip: "127.0.0.1", hostname: "localhost", comment: "# Default localhost entry" },
    { ip: "127.0.0.1", hostname: "dev.myapp.com", comment: "# Development environment" },
    { ip: "192.168.1.100", hostname: "staging.myapp.com", comment: "# Staging server" },
    { ip: "", hostname: "", comment: "" }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              User{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                friendly
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Clean interface, powerful features.
            </p>

            <div className="space-y-4">
              {[
                "Syntax highlighting with error detection",
                "Shortcuts for common actions",
                "Privacy-focused design",
                "Lightweight and fast",
                "Cross-platform support",

              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Code preview */}
          <div className="relative">
            <Card className="bg-code-bg border-border shadow-elegant overflow-hidden">
              {/* Window header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-muted-foreground">Hedit - /etc/hosts</span>
                </div>
              </div>

              {/* Code content */}
              <CardContent className="p-0">
                <div className="font-mono text-sm">
                  {/* Line numbers */}
                  <div className="flex">
                    <div className="bg-muted/50 px-4 py-2 text-muted-foreground select-none">
                      <div className="leading-6">1</div>
                      <div className="leading-6">2</div>
                      <div className="leading-6">3</div>
                      <div className="leading-6">4</div>
                      <div className="leading-6">5</div>
                      <div className="leading-6">6</div>
                    </div>

                    {/* Code content */}
                    <div className="flex-1 px-4 py-2 space-y-1">
                      <div className="text-code-comment leading-6">
                        ## Host Database
                      </div>
                      <div className="text-code-comment leading-6">
                        ##
                      </div>
                      {hostEntries.map((entry, index) => (
                        <div key={index} className="leading-6">
                          <span className="text-code-number">{entry.ip}</span>
                          <span className="text-foreground ml-4">{entry.hostname}</span>
                          <span className="text-code-comment ml-4">{entry.comment}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating notification */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-glow">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-foreground">File saved successfully</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;