import { Link } from "wouter";
import { HardHat, Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 font-bold text-2xl">
            <div className="bg-white text-primary p-1.5 rounded-sm">
              <HardHat className="h-6 w-6" />
            </div>
            <span>MINING OPTS</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Delivering performance, precision, and sustainability in mining, engineering, and construction solutions across West Africa.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-accent">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-gray-300 hover:text-white hover:pl-2 transition-all">About Us</Link></li>
            <li><Link href="/services" className="text-gray-300 hover:text-white hover:pl-2 transition-all">Our Services</Link></li>
            <li><Link href="/hse-esg" className="text-gray-300 hover:text-white hover:pl-2 transition-all">HSE & ESG</Link></li>
            <li><Link href="/careers" className="text-gray-300 hover:text-white hover:pl-2 transition-all">Careers</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-accent">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
              <span className="text-gray-300 text-sm">A88 Legon Bypass, Westlands, Accra, Ghana</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <span className="text-gray-300 text-sm">+233 24 473 4616</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <span className="text-gray-300 text-sm">info@miningopts.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-accent">Connect</h3>
          <div className="flex gap-4 mb-6">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Mining Options & Solutions. All rights reserved.
          </p>
        </div>
      </div>
      
      <div className="container-padding border-t border-white/10 pt-8 text-center text-xs text-gray-500">
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
}
