import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImg from "@assets/images/logo.png";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolidBg = scrolled;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg 
          ? "bg-primary shadow-lg shadow-black/10" 
          : "bg-transparent"
      }`}
    >
      <div className="container-padding flex h-20 sm:h-24 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group" data-testid="link-logo">
          <img src={logoImg} alt="MOS Logo" className="h-12 w-auto sm:h-14 md:h-16" />
          <div className="hidden sm:flex flex-col leading-none gap-0.5">
            <span 
              className="tracking-tight text-lg sm:text-xl font-bold text-white transition-colors" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              MINING OPTIMIZATION
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/95 transition-colors">
              Solutions Ltd
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 flex-wrap">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2.5 text-sm font-semibold transition-all rounded-xl group"
              data-testid={`nav-${item.href.replace('/', '') || 'home'}`}
            >
              <span className={`relative z-10 transition-colors ${
                location === item.href 
                  ? "text-white" 
                  : "text-white/80 hover:text-white"
              }`}>
                {item.label}
              </span>
              {location === item.href && (
                <motion.span 
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-xl bg-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {location === item.href && (
                <motion.span 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" 
                />
              )}
            </Link>
          ))}
          
          <div className="flex items-center gap-2 ml-4">
            <a
              href="https://wa.me/233244734616"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-accent text-white font-semibold px-6" 
                data-testid="button-get-quote"
              >
                Get a Quote
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </a>
          </div>
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[380px] bg-white p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <img src={logoImg} alt="MOS Logo" className="h-14 w-auto" />
                    <div className="flex flex-col leading-none gap-0.5">
                      <span className="text-base font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>MINING OPTS</span>
                      <span className="text-xs font-semibold text-foreground/90 tracking-[0.2em] uppercase">SOLUTIONS LTD</span>
                    </div>
                  </div>
                </div>
                
                <nav className="flex flex-col gap-1 p-4 flex-1">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between p-4 rounded-xl text-base font-medium transition-all ${
                          location === item.href 
                            ? "text-primary bg-primary/5 border-l-4 border-accent" 
                            : "text-foreground hover:bg-gray-50"
                        }`}
                        onClick={() => setIsOpen(false)}
                        data-testid={`nav-mobile-${item.href.replace('/', '') || 'home'}`}
                      >
                        {item.label}
                        <ChevronRight className={`w-4 h-4 ${location === item.href ? "text-accent" : "text-gray-300"}`} />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                
                <div className="p-6 border-t border-gray-100">
                  <a
                    href="https://wa.me/233244734616"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button size="lg" className="w-full bg-accent" data-testid="button-mobile-get-quote">
                      Get a Quote
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
