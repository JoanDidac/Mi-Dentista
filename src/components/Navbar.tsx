import { useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/logo-horizontal.jpg";

const Navbar = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = {
    saludEstetica: [
      { name: "Estética Dental", desc: "Carillas, blanqueamiento, diseño de sonrisa" },
      { name: "Ortodoncia", desc: "Invisalign®, brackets estéticos" },
      { name: "Periodoncia", desc: "Tratamientos de encías" },
      { name: "Endodoncia", desc: "Tratamiento de conductos" },
      { name: "Odontología General", desc: "Empastes, limpiezas, revisiones" },
      { name: "Odontopediatría", desc: "Atención específica para niños" },
      { name: "Oclusión y Rehabilitación", desc: "Prótesis, coronas, férulas" },
      { name: "Ronquido y Apnea", desc: "Dispositivos intraorales" },
    ],
    implantes: [
      { name: "Implantes Dentales", desc: "Sustitución de piezas perdidas" },
      { name: "Cirugía Oral", desc: "Extracción de muelas del juicio" },
      { name: "Rehabilitación con Implantes", desc: "Prótesis sobre implantes" },
      { name: "Patología ATM", desc: "Tratamiento del dolor mandibular" },
    ],
    esteticaFacial: [
      { name: "Medicina Estética Facial", desc: "Ácido hialurónico, bótox" },
      { name: "Estética Facial Avanzada", desc: "Armonización facial, peelings" },
    ],
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Mi Dentista" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">
                    Salud y Estética Dental
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-4">
                      <div className="mb-3 pb-3 border-b">
                        <p className="text-sm text-muted-foreground">
                          Servicios orientados a mantener y mejorar la salud bucodental
                        </p>
                      </div>
                      <div className="grid gap-3">
                        {services.saludEstetica.map((service) => (
                          <a
                            key={service.name}
                            href={`#${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block rounded-lg p-3 hover:bg-accent/50 transition-colors"
                          >
                            <div className="font-medium">{service.name}</div>
                            <div className="text-sm text-muted-foreground">{service.desc}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">
                    Implantes y Cirugía
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-4">
                      <div className="grid gap-3">
                        {services.implantes.map((service) => (
                          <a
                            key={service.name}
                            href={`#${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block rounded-lg p-3 hover:bg-accent/50 transition-colors"
                          >
                            <div className="font-medium">{service.name}</div>
                            <div className="text-sm text-muted-foreground">{service.desc}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">
                    Medicina y Estética Facial
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-4">
                      <div className="grid gap-3">
                        {services.esteticaFacial.map((service) => (
                          <a
                            key={service.name}
                            href={`#${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block rounded-lg p-3 hover:bg-accent/50 transition-colors"
                          >
                            <div className="font-medium">{service.name}</div>
                            <div className="text-sm text-muted-foreground">{service.desc}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#contacto" className="text-base hover:text-primary transition-colors">
              Contacto
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:934413664" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium">934 413 664</span>
            </a>
            <Button onClick={onOpenBooking} className="gap-2">
              <Calendar className="h-4 w-4" />
              Pedir Cita
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Salud y Estética Dental</h3>
                <div className="space-y-2 pl-4">
                  {services.saludEstetica.map((service) => (
                    <a
                      key={service.name}
                      href={`#${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Implantes y Cirugía</h3>
                <div className="space-y-2 pl-4">
                  {services.implantes.map((service) => (
                    <a
                      key={service.name}
                      href={`#${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Medicina y Estética Facial</h3>
                <div className="space-y-2 pl-4">
                  {services.esteticaFacial.map((service) => (
                    <a
                      key={service.name}
                      href={`#${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-4 space-y-3">
                <a href="tel:934413664" className="flex items-center gap-2 text-primary font-medium">
                  <Phone className="h-4 w-4" />
                  934 413 664
                </a>
                <Button onClick={() => { onOpenBooking(); setMobileMenuOpen(false); }} className="w-full gap-2">
                  <Calendar className="h-4 w-4" />
                  Pedir Cita
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
