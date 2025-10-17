import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Service {
  name: string;
  description: string;
  icon: LucideIcon;
}

interface ServiceCategoryProps {
  title: string;
  subtitle: string;
  services: Service[];
  palette: "a" | "b" | "c";
  id: string;
}

const ServiceCategory = ({ title, subtitle, services, palette, id }: ServiceCategoryProps) => {
  const paletteClasses = {
    a: {
      bg: "bg-[hsl(var(--palette-a-light))]",
      text: "text-[hsl(var(--palette-a))]",
      accent: "bg-[hsl(var(--palette-a))]",
      border: "border-[hsl(var(--palette-a)/0.2)]",
    },
    b: {
      bg: "bg-[hsl(var(--palette-b-light))]",
      text: "text-[hsl(var(--palette-b))]",
      accent: "bg-[hsl(var(--palette-b))]",
      border: "border-[hsl(var(--palette-b)/0.2)]",
    },
    c: {
      bg: "bg-[hsl(var(--palette-c-light))]",
      text: "text-[hsl(var(--palette-c))]",
      accent: "bg-[hsl(var(--palette-c))]",
      border: "border-[hsl(var(--palette-c)/0.2)]",
    },
  };

  const classes = paletteClasses[palette];

  return (
    <section id={id} className={`py-20 ${classes.bg}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${classes.text}`}>
            {title}
          </h2>
          <p className="text-lg text-foreground/80">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.name}
                className={`group hover:shadow-medium transition-all duration-300 border-2 ${classes.border} hover:scale-105`}
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`${classes.accent} w-12 h-12 rounded-lg flex items-center justify-center text-white`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategory;
