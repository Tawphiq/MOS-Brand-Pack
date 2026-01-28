import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import logoImg from "@assets/images/logo.png";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100" 
          : "bg-white/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container-padding flex h-20 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" data-testid="link-logo">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
            <img src={logoImg} alt="MOS Logo" className="relative h-11 w-auto" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="tracking-tight text-lg font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
              MINING OPTS
            </span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-[0.2em] uppercase">
              Solutions Ltd
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-wrap">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg ${
                location === item.href 
                  ? "text-primary bg-primary/5" 
                  : "text-foreground/70 hover:text-primary"
              }`}
              data-testid={`nav-${item.href.replace('/', '') || 'home'}`}
            >
              {item.label}
              {location === item.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          ))}
          <Link href="/contact" className="ml-4">
            <Button 
              className="bg-accent text-white font-semibold" 
              data-testid="button-get-quote"
            >
              Get a Quote
              <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px] bg-white">
              <div className="flex items-center gap-3 mb-8 mt-4">
                <img src={logoImg} alt="MOS Logo" className="h-10 w-auto" />
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>MINING OPTS</span>
                  <span className="text-[9px] text-muted-foreground tracking-widest">SOLUTIONS LTD</span>
                </div>
              </div>
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between p-4 rounded-xl text-base font-medium transition-all ${
                      location === item.href 
                        ? "text-primary bg-primary/5 border-l-4 border-accent" 
                        : "text-foreground hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <ChevronRight className={`w-4 h-4 ${location === item.href ? "text-accent" : "text-gray-300"}`} />
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-4">
                  <Button className="w-full bg-accent" data-testid="button-mobile-get-quote">
                    Get a Quote
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
