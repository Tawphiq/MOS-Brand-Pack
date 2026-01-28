import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "HSE & ESG", href: "/hse-esg" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-padding flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-primary" data-testid="link-logo">
          <div className="bg-primary text-white p-2 rounded-md">
            <HardHat className="h-6 w-6" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="tracking-tight text-lg font-bold">MINING OPTS</span>
            <span className="text-[10px] text-muted-foreground font-normal tracking-widest">SOLUTIONS LTD</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition-colors hover:text-accent ${
                location === item.href ? "text-accent border-b-2 border-accent pb-1" : "text-foreground/70"
              }`}
              data-testid={`nav-${item.href.replace('/', '') || 'home'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold" data-testid="button-get-quote">
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-10">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium transition-colors hover:text-accent ${
                      location === item.href ? "text-accent" : "text-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90">Get a Quote</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
