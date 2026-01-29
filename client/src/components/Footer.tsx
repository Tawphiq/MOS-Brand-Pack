import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, ArrowUpRight, Globe, Send, ArrowRight } from "lucide-react";
import { SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

import logoImg from "@assets/images/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Subscribed Successfully",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    setEmail("");
    setIsSubscribing(false);
  };
  
  return (
    <footer className="relative bg-gradient-to-b from-primary via-primary to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 border-b border-white/10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Stay Updated with MOS
            </h3>
            <p className="text-gray-300/80 mb-8 text-lg">
              Subscribe to our newsletter for the latest industry insights and company updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 flex-1"
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit" 
                size="lg"
                className="bg-accent" 
                disabled={isSubscribing}
                data-testid="button-newsletter-subscribe"
              >
                {isSubscribing ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-3">
                <img src={logoImg} alt="MOS Logo" className="h-14 w-auto md:h-16" />
              </div>
              <div className="flex flex-col leading-none gap-0.5">
                <span className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>MINING OPTIMISATION</span>
                <span className="text-xs font-semibold text-gray-300 tracking-[0.2em] uppercase">Solutions Ltd</span>
              </div>
            </div>
            <p className="text-gray-300/80 text-sm leading-relaxed max-w-xs">
              Performance. Precision. Sustainability. Full-lifecycle engineering, mining, EPC, and technology solutions for West Africa's resource sector.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", testId: "link-footer-linkedin" },
                { icon: <SiX className="w-5 h-5" />, label: "X", testId: "link-footer-twitter" },
                { icon: <Globe className="w-5 h-5" />, label: "Website", testId: "link-footer-website" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  className="bg-white/5 backdrop-blur border border-white/10 p-3 rounded-xl transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105" 
                  aria-label={social.label}
                  data-testid={social.testId}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about", testId: "link-footer-about" },
                { label: "Our Services", href: "/services", testId: "link-footer-services" },
                { label: "Contact", href: "/contact", testId: "link-footer-contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300/80 hover:text-white flex items-center gap-2 text-sm group transition-colors"
                    data-testid={link.testId}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Contract Mining", testId: "link-footer-service-mining" },
                { name: "EPC Services", testId: "link-footer-service-epc" },
                { name: "Mining Technologies", testId: "link-footer-service-tech" },
                { name: "IT & Enterprise Tech", testId: "link-footer-service-it" },
                { name: "Oil & Gas Support", testId: "link-footer-service-oilgas" },
                { name: "Environmental & ESG", testId: "link-footer-service-esg" },
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    href="/services"
                    className="text-gray-300/80 text-sm hover:text-white transition-colors cursor-pointer"
                    data-testid={service.testId}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="bg-white/5 p-2.5 rounded-xl group-hover:bg-white/10 transition-colors">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <span className="text-gray-300/80 text-sm leading-relaxed block">A80 Legon Bypass, Papao</span>
                  <span className="text-gray-300/80 text-sm leading-relaxed">Haatso, Accra, Ghana</span>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-white/5 p-2.5 rounded-xl group-hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <a href="tel:+233599738900" className="text-gray-300/80 text-sm hover:text-white transition-colors" data-testid="link-footer-phone">+233 59973 8900</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-white/5 p-2.5 rounded-xl group-hover:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a href="mailto:info@miningopts.com" className="text-gray-300/80 text-sm hover:text-white transition-colors" data-testid="link-footer-email">info@miningopts.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Mining Optimisation Solutions Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors" data-testid="link-footer-privacy">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <a href="#" className="hover:text-white transition-colors" data-testid="link-footer-terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
