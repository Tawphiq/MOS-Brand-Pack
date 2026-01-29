import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "MOS has been instrumental in transforming our mining operations at Iduapriem. Their fleet and production monitoring solutions give us real-time visibility from pit to plant and have significantly improved our asset utilisation and safety performance.",
    author: "Nnmannii Bayerianaa",
    role: "Director-Mining",
    company: "AngloGold Ashanti Iduapriem Mine"
  },
  {
    quote: "From design coordination to site delivery, MOS understands the realities of complex construction projects. Their structured cabling, networking and security systems integrate seamlessly with our architectural designs and help us hand over smarter buildings to our clients.",
    author: "Wilson Appenteng Frimpong",
    role: "CEO",
    company: "Crativ Skills Ltd (Architectural Services)"
  },
  {
    quote: "As a consulting firm, we rely on partners who bring both technical depth and practical field experience. MOS has consistently delivered robust infrastructure and ICT solutions that support the long-term strategies we design for our clients.",
    author: "Rexford Jones Baffoe",
    role: "CEO",
    company: "Ferfed Consult Ltd"
  },
  {
    quote: "Working in procurement, reliability and total cost of ownership are critical. MOS is a trusted partner for sourcing and supporting technology for our operations in Guinea, giving us confidence in quality, delivery and after‑sales support.",
    author: "Binta Diallo",
    role: "Procurement Managem",
    company: "Guinea"
  }
];

export function TestimonialsCarousel({ testIdPrefix = "testimonial" }: { testIdPrefix?: string }) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center mb-8 shadow-lg">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 max-w-3xl" style={{ fontFamily: 'var(--font-heading)' }}>
                    "{testimonials[current].quote}"
                  </blockquote>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mb-4" />
                    <p className="font-bold text-lg text-foreground">{testimonials[current].author}</p>
                    <p className="text-muted-foreground">{testimonials[current].role}</p>
                    <p className="text-sm text-accent font-medium">{testimonials[current].company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={prev}
          className="rounded-full"
          data-testid="button-testimonial-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrent(i);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current 
                  ? "w-8 bg-accent" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              data-testid={`button-testimonial-dot-${i}`}
            />
          ))}
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          onClick={next}
          className="rounded-full"
          data-testid="button-testimonial-next"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
