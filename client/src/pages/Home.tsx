import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Server, Shield, Cloud, Cpu, Building2, Landmark, Factory, Droplets, Leaf, Users } from "lucide-react";
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
      icon: <Server className="w-8 h-8" />,
      title: "Data Centre Solutions",
      desc: "End-to-end data centre design, assessment, deployment, and optimisation for enterprise operations.",
      color: "bg-primary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      desc: "Advanced protection through endpoint detection, cloud security, and zero-trust security models.",
      color: "bg-secondary"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      desc: "Cloud-ready infrastructure solutions with secure networking and connectivity.",
      color: "bg-accent"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Operational Optimisation",
      desc: "Digital transformation, automation, and data analytics for business processes.",
      color: "bg-primary"
    }
  ];

  const markets = [
    { icon: <Factory className="w-6 h-6" />, name: "Mining & Resources" },
    { icon: <Droplets className="w-6 h-6" />, name: "Oil & Gas" },
    { icon: <Server className="w-6 h-6" />, name: "Data Centres" },
    { icon: <Landmark className="w-6 h-6" />, name: "Financial Services" },
    { icon: <Building2 className="w-6 h-6" />, name: "Government" },
    { icon: <Users className="w-6 h-6" />, name: "Telecommunications" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />

        <div className="container-padding relative z-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="text-accent text-sm font-medium">Technology & Engineering Solutions</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Secure. Resilient.<br />
              <span className="text-orange-400">High-Performance.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl"
            >
              Delivering advanced digital infrastructure, data centre, and cybersecurity solutions across Ghana and West Africa.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/services">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 text-base" data-testid="button-explore-services">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10 px-8 text-base bg-white/5 backdrop-blur-sm" data-testid="button-contact-hero">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block flex-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl"></div>
              <img 
                src={dataCenterImg} 
                alt="Data Centre Infrastructure" 
                className="relative rounded-xl shadow-2xl border border-white/10 w-full max-w-lg ml-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-padding">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Strategic Technology Partners</p>
            <div className="flex items-center gap-12 flex-wrap justify-center">
              <img src={partnerRamjack} alt="Ramjack" className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <img src={partnerWestcon} alt="Westcon-Comstor" className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <img src={partnerCrowdstrike} alt="CrowdStrike" className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">About MOS</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                Your Trusted Technology Partner in West Africa
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Mining Optimisation Solutions Ltd (MOS) is a Ghana-based technology and engineering solutions company delivering advanced digital infrastructure, data centre, cybersecurity, and operational optimisation solutions.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We operate in mission-critical environments spanning mining, oil & gas, financial services, telecommunications, and government sectors. Our approach combines global best-in-class technologies with strong local execution capability.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Data Centre Solutions",
                  "Cybersecurity Services",
                  "Cloud Infrastructure",
                  "Systems Integration"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium text-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90" data-testid="button-learn-more">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-tl-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-br-3xl -z-10" />
              <img 
                src={cybersecurityImg} 
                alt="Cybersecurity Solutions" 
                className="rounded-xl shadow-2xl w-full object-cover h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
              Comprehensive Technology Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Enterprise-grade solutions designed to support secure, scalable, and highly available operations.
            </p>
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
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8" data-testid="button-view-services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Market Focus</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3 text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
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
                className="flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                  {market.icon}
                </div>
                <span className="text-sm font-medium text-center text-foreground/80">{market.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-primary text-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl bg-white/5 backdrop-blur border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver secure, resilient, and high-performance technology solutions that enable organizations to operate efficiently, protect critical assets, and scale sustainably.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white/5 backdrop-blur border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become West Africa's trusted technology partner for data-driven optimisation, cybersecurity, and data-centre-enabled digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-primary to-gray-900">
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Transform Your Operations?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Partner with MOS for enterprise-grade technology solutions that drive efficiency, security, and sustainable growth.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-10 text-lg shadow-2xl shadow-accent/30" data-testid="button-cta-contact">
              Request a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
