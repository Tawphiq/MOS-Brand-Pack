import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Server, Shield, Cloud, Cpu, Settings, Wrench, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

import dataCenterImg from "@assets/images/data-center.jpg";
import cybersecurityImg from "@assets/images/cybersecurity.jpg";

const services = [
  {
    id: "datacentre",
    icon: <Server className="w-6 h-6" />,
    title: "Data Centre & Digital Infrastructure",
    content: "MOS provides end-to-end data centre and digital infrastructure solutions designed to support secure, scalable, and highly available enterprise operations. We support on-premises, hybrid, and distributed data centre environments, ensuring regulatory compliance, operational efficiency, and long-term resilience.",
    details: [
      "Data centre design, assessment, and optimisation",
      "IT and OT infrastructure deployment",
      "Server, storage, and virtualisation solutions",
      "Secure network architecture and connectivity",
      "Data centre cybersecurity and continuous monitoring",
      "Business continuity and disaster recovery solutions"
    ],
    image: dataCenterImg,
    gradient: "from-blue-600 to-blue-700"
  },
  {
    id: "cybersecurity",
    icon: <Shield className="w-6 h-6" />,
    title: "Cybersecurity & Risk Management",
    content: "Leveraging CrowdStrike technologies and global vendor ecosystems through Westcon-Comstor, MOS delivers comprehensive cybersecurity services. Our solutions are designed to protect enterprise and data centre environments against evolving threats while supporting business continuity.",
    details: [
      "Endpoint Detection and Response (EDR)",
      "Cloud and identity security",
      "Threat intelligence and incident response",
      "Cyber risk assessments and compliance alignment",
      "Security architecture for data centres and critical systems",
      "Zero-trust security models"
    ],
    image: cybersecurityImg,
    gradient: "from-emerald-600 to-emerald-700"
  },
  {
    id: "cloud",
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud & Infrastructure Solutions",
    content: "We deliver cloud-ready infrastructure solutions that enable organizations to modernize their IT environments while maintaining security and performance. Our services include comprehensive solution architecture and technical consulting.",
    details: [
      "Cloud-ready and data centre infrastructure",
      "Secure enterprise networking and connectivity",
      "Solution architecture and technical consulting",
      "Systems integration and deployment",
      "Training, support, and managed services",
      "Hybrid cloud implementations"
    ],
    image: dataCenterImg,
    gradient: "from-violet-600 to-violet-700"
  },
  {
    id: "optimisation",
    icon: <Cpu className="w-6 h-6" />,
    title: "Operational Optimisation & Digitalization",
    content: "MOS helps organizations transform their operations through automation, analytics, and digital solutions. We enable data-driven decision making and process optimization across enterprise environments.",
    details: [
      "Automation of operational and business processes",
      "Data analytics and performance dashboards",
      "Digital transformation advisory and optimisation",
      "Process re-engineering",
      "Workflow automation",
      "Performance monitoring solutions"
    ],
    image: cybersecurityImg,
    gradient: "from-amber-600 to-amber-700"
  },
  {
    id: "professional",
    icon: <Settings className="w-6 h-6" />,
    title: "Professional Services",
    content: "Our professional services team provides expert consulting, implementation, and ongoing support for enterprise technology initiatives. We bring global expertise with local execution capability.",
    details: [
      "Solution architecture and design",
      "Technical consulting",
      "Project management",
      "Implementation services",
      "Training and knowledge transfer",
      "Managed services and support"
    ],
    image: dataCenterImg,
    gradient: "from-rose-600 to-rose-700"
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-primary to-gray-900 text-white py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white/90">What We Do</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white" 
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Enterprise-grade technology solutions for mission-critical environments
          </motion.p>
        </div>
      </div>

      <div className="container-padding py-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-24 border border-gray-100">
              <div className="p-6 bg-gradient-to-r from-primary to-primary/90 text-white">
                <h3 className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>Our Solutions</h3>
                <p className="text-sm text-gray-300 mt-1">Select a service to learn more</p>
              </div>
              <div className="p-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all mb-1 ${
                      activeService.id === service.id 
                        ? "bg-primary/5 border-l-4 border-primary" 
                        : "hover:bg-gray-50 border-l-4 border-transparent"
                    }`}
                    data-testid={`button-service-${service.id}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activeService.id === service.id 
                          ? `bg-gradient-to-br ${service.gradient} text-white shadow-lg` 
                          : "bg-gray-100 text-gray-500"
                      }`}>
                        {service.icon}
                      </div>
                      <span className={`font-medium text-sm ${activeService.id === service.id ? "text-primary" : "text-gray-700"}`}>
                        {service.title}
                      </span>
                    </div>
                    {activeService.id === service.id && <ChevronRight className="w-4 h-4 text-primary" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="h-56 md:h-72 overflow-hidden relative">
                    <img 
                      src={activeService.image} 
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 bg-gradient-to-br ${activeService.gradient} rounded-xl text-white shadow-lg`}>
                          {activeService.icon}
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                          {activeService.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {activeService.content}
                    </p>

                    <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      <Wrench className="w-5 h-5 text-accent" />
                      Key Capabilities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                      {activeService.details.map((detail, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"
                        >
                          <div className="w-6 h-6 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-secondary" />
                          </div>
                          <span className="text-foreground/80 text-sm">{detail}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl border border-primary/10">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                          <h4 className="font-bold text-primary text-lg" style={{ fontFamily: 'var(--font-heading)' }}>Interested in this service?</h4>
                          <p className="text-sm text-muted-foreground">Contact our team for a detailed consultation.</p>
                        </div>
                        <Link href="/contact">
                          <Button className="bg-accent" data-testid="button-contact-service">
                            Get in Touch
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
