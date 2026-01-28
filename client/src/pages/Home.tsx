import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Shield, 
  Cloud, 
  Cpu, 
  Building2, 
  Landmark, 
  Factory, 
  Droplets, 
  Leaf, 
  Users,
  Sparkles,
  Globe,
  LockKeyhole,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import heroImg from "@assets/images/hero-mining.jpg";
import dataCenterImg from "@assets/images/data-center.jpg";
import cybersecurityImg from "@assets/images/cybersecurity.jpg";
import partnerRamjack from "@assets/images/partner-ramjack.png";
import partnerWestcon from "@assets/images/partner-westcon.png";
import partnerCrowdstrike from "@assets/images/partner-crowdstrike.png";

export default function Home() {
  const services = [
    {
      icon: <Factory className="w-7 h-7" />,
      title: "Contract Mining & Operations",
      desc: "Full contract mining execution including open-pit load & haul, fleet operations, and tailings management.",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "EPC Services",
      desc: "Engineering, Procurement & Construction from concept to commissioning for resource sector projects.",
      gradient: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "Mining Technologies",
      desc: "Fleet management systems, GPS guidance, drones, condition monitoring, and digital safety solutions.",
      gradient: "from-violet-600 to-violet-700"
    },
    {
      icon: <Server className="w-7 h-7" />,
      title: "IT & Enterprise Technology",
      desc: "Servers, networks, data centers, cybersecurity, and cloud solutions in partnership with global IT leaders.",
      gradient: "from-amber-600 to-amber-700"
    },
    {
      icon: <Droplets className="w-7 h-7" />,
      title: "Oil & Gas Support",
      desc: "Production optimization, pipeline integrity, shutdown planning, and HSSE compliance for oil & gas operations.",
      gradient: "from-rose-600 to-rose-700"
    },
    {
      icon: <Leaf className="w-7 h-7" />,
      title: "Environmental & ESG",
      desc: "Environmental management systems, ESIA support, monitoring, and ESG reporting aligned with international standards.",
      gradient: "from-teal-600 to-teal-700"
    }
  ];

  const markets = [
    { icon: <Factory className="w-5 h-5" />, name: "Mining & Resources" },
    { icon: <Droplets className="w-5 h-5" />, name: "Oil & Gas" },
    { icon: <Building2 className="w-5 h-5" />, name: "EPC Contractors" },
    { icon: <Landmark className="w-5 h-5" />, name: "Government" },
    { icon: <Leaf className="w-5 h-5" />, name: "Environmental" },
    { icon: <Users className="w-5 h-5" />, name: "Industrial" }
  ];

  const stats = [
    { value: "2019", label: "Established", icon: <Globe className="w-5 h-5" /> },
    { value: "6+", label: "West African Countries", icon: <LockKeyhole className="w-5 h-5" /> },
    { value: "6", label: "Core Service Lines", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/95 via-primary/85 to-gray-900/90" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container-padding relative z-20 flex flex-col lg:flex-row items-center gap-12 py-20">
          <div className="flex-1 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white/90">Engineering, Mining, EPC & Technology</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Performance. Precision.
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
                Sustainability.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed"
            >
              Full-lifecycle engineering, mining, EPC, technology, and environmental solutions for West Africa's resource sector.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/services">
                <Button 
                  size="lg" 
                  className="bg-accent text-white px-8 text-base" 
                  data-testid="button-explore-services"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white px-8 text-base backdrop-blur-sm" 
                  data-testid="button-contact-hero"
                >
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block flex-1 max-w-lg"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-secondary/30 rounded-2xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img 
                  src={dataCenterImg} 
                  alt="Data Centre Infrastructure" 
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Enterprise-Grade</div>
                      <div className="text-xs text-gray-300">Data Centre Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-8 bg-white border-b relative overflow-hidden">
        <div className="container-padding">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">Strategic Technology Partners</p>
            <div className="flex items-center gap-10 flex-wrap justify-center">
              {[
                { src: partnerRamjack, alt: "Ramjack" },
                { src: partnerWestcon, alt: "Westcon-Comstor" },
                { src: partnerCrowdstrike, alt: "CrowdStrike" }
              ].map((partner, i) => (
                <motion.img 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  src={partner.src} 
                  alt={partner.alt} 
                  className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105" 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.02] to-transparent pointer-events-none" />
        
        <div className="container-padding relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-4">
                  <span className="w-8 h-0.5 bg-accent rounded-full" />
                  About MOS
                </span>
                <h2 className="text-primary mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Your Trusted Partner in West Africa
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Mining Optimization Solutions Ltd (MOS) is a Ghana-based engineering, mining, EPC, technology, and environmental services company providing full-lifecycle solutions across the West African resource sector. Established in 2019.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Operating across Ghana, Guinea, Côte d'Ivoire, Sierra Leone, Burkina Faso, and Mali, we deliver contract mining, EPC project delivery, mining technology integration, IT solutions, and environmental/ESG systems.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {[
                  "Contract Mining",
                  "EPC Services",
                  "Mining Technologies",
                  "IT & Enterprise Tech",
                  "Oil & Gas Support",
                  "Environmental & ESG"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="font-medium text-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </motion.div>
              
              <Link href="/about">
                <Button className="bg-primary" data-testid="button-learn-more">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl -z-10" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-secondary/20 to-transparent rounded-3xl -z-10" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={cybersecurityImg} 
                  alt="Cybersecurity Solutions" 
                  className="w-full object-cover h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(11,37,69,0.03),transparent_50%)]" />
        
        <div className="container-padding relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-4">
                <span className="w-8 h-0.5 bg-accent rounded-full" />
                Our Solutions
                <span className="w-8 h-0.5 bg-accent rounded-full" />
              </span>
              <h2 className="text-primary mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Comprehensive Technology Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Enterprise-grade solutions designed to support secure, scalable, and highly available operations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className={`bg-gradient-to-br ${service.gradient} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary px-8" data-testid="button-view-services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-4">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Market Focus
              <span className="w-8 h-0.5 bg-accent rounded-full" />
            </span>
            <h2 className="text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
              Industries We Serve
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {markets.map((market, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                    {market.icon}
                  </div>
                  <span className="text-sm font-medium text-center text-foreground/80">{market.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-padding relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center mb-6 shadow-lg">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver secure, resilient, and high-performance technology solutions that enable organizations to operate efficiently, protect critical assets, and scale sustainably.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-emerald-500 flex items-center justify-center mb-6 shadow-lg">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become West Africa's trusted technology partner for data-driven optimisation, cybersecurity, and data-centre-enabled digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,124,0,0.08),transparent_50%)]" />
        
        <div className="container-padding text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Transform Your Operations?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
              Partner with MOS for enterprise-grade technology solutions that drive efficiency, security, and sustainable growth.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-accent text-white px-12 text-lg" 
                data-testid="button-cta-contact"
              >
                Request a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
