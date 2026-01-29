import { Link } from "wouter";
import { Mail, MapPin, Phone, Linkedin, ArrowUpRight, Globe } from "lucide-react";
import { SiX } from "react-icons/si";

import logoImg from "@assets/images/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-b from-primary to-gray-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative container-padding pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 backdrop-blur rounded-xl p-2">
                <img src={logoImg} alt="MOS Logo" className="h-10 w-auto" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>MINING OPTS</span>
                <span className="text-[10px] text-gray-400 font-medium tracking-[0.2em] uppercase">Solutions Ltd</span>
              </div>
            </div>
            <p className="text-gray-300/80 text-sm leading-relaxed max-w-xs">
              Performance. Precision. Sustainability. Full-lifecycle solutions for West Africa's resource sector.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="bg-white/5 backdrop-blur border border-white/10 p-2.5 rounded-xl transition-colors hover-elevate" 
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/5 backdrop-blur border border-white/10 p-2.5 rounded-xl transition-colors hover-elevate" 
                aria-label="X"
                data-testid="link-footer-twitter"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/5 backdrop-blur border border-white/10 p-2.5 rounded-xl transition-colors hover-elevate" 
                aria-label="Website"
                data-testid="link-footer-website"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300/80 hover:text-white flex items-center gap-2 text-sm group transition-colors"
                    data-testid={`link-footer-${link.href.replace('/', '')}`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Contract Mining",
                "EPC Services",
                "Mining Technologies",
                "IT & Enterprise Tech",
                "Oil & Gas Support",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-white/5 p-2 rounded-lg shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span className="text-gray-300/80 text-sm leading-relaxed">Accra, Ghana, West Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/5 p-2 rounded-lg shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <a href="tel:+233302524934" className="text-gray-300/80 text-sm hover:text-white transition-colors" data-testid="link-footer-phone">+233 302 524 934</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/5 p-2 rounded-lg shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a href="mailto:info@miningopts.com" className="text-gray-300/80 text-sm hover:text-white transition-colors" data-testid="link-footer-email">info@miningopts.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-gray-400">
            © {currentYear} Mining Optimisation Solutions Ltd. All rights reserved.
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
