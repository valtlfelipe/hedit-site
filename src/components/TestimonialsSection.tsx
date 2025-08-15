import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Full Stack Developer",
    company: "TechCorp",
    content: "Hedit completely changed how I manage hosts files. The syntax highlighting and backup features are game-changers for my development workflow.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Johnson",
    role: "DevOps Engineer",
    company: "CloudTech",
    content: "Finally, a hosts file editor that doesn't make me want to pull my hair out. The interface is beautiful and the features are exactly what I needed.",
    rating: 5,
    avatar: "MJ"
  },
  {
    name: "Elena Rodriguez",
    role: "Frontend Developer",
    company: "StartupXYZ",
    content: "The autocomplete and validation features have saved me countless hours of debugging DNS issues. Hedit is now an essential part of my toolkit.",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "David Kim",
    role: "System Administrator",
    company: "Enterprise Inc",
    content: "Managing hosts files across multiple environments is so much easier now. The backup and restore functionality gives me peace of mind.",
    rating: 5,
    avatar: "DK"
  },
  {
    name: "Zoe Zhang",
    role: "Software Engineer",
    company: "InnovateLab",
    content: "Clean interface, powerful features, and it just works. Hedit has become my go-to tool for hosts file management. Highly recommended!",
    rating: 5,
    avatar: "ZZ"
  },
  {
    name: "Alex Thompson",
    role: "Technical Lead",
    company: "MegaCorp",
    content: "The real-time validation and beautiful syntax highlighting make editing hosts files actually enjoyable. My whole team has switched to Hedit.",
    rating: 5,
    avatar: "AT"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              thousands
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Developers around the world trust Hedit for their hosts file management needs.
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
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

export default TestimonialsSection;