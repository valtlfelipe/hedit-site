import { Card, CardContent } from "@/components/ui/card";
import { Edit3, FileText, Zap, Shield, Palette, Code } from "lucide-react";

const features = [
  {
    icon: <Edit3 className="w-6 h-6" />,
    title: "Fast and Intuitive",
    description: "Edit your hosts file with syntax highlighting. No more struggling with terminal editors."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "File Management",
    description: "Easily manage multiple hosts files and activate them with a single click."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Beautiful Interface",
    description: "Modern, clean design that doesn't get in your way. Dark & light mode support."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to manage{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              hosts files
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hedit provides all the tools you need to edit and manage your hosts files efficiently and safely.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground group-hover:shadow-glow transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;