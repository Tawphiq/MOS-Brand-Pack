import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Server, Shield, Cloud, Cpu, Settings, Wrench, ArrowRight } from "lucide-react";
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
    image: dataCenterImg
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
    image: cybersecurityImg
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
    image: dataCenterImg
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
    image: cybersecurityImg
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
    image: dataCenterImg
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-gray-900"></div>
        <div className="container-padding relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white" 
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Enterprise-grade technology solutions for mission-critical environments
          </motion.p>
        </div>
      </div>

      <div className="container-padding py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24 border">
              <div className="p-5 bg-primary text-white">
                <h3 className="font-bold text-lg">Our Solutions</h3>
                <p className="text-sm text-gray-300 mt-1">Select a service to learn more</p>
              </div>
              <div className="divide-y divide-gray-100">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={`w-full flex items-center justify-between p-4 text-left transition-all ${
                      activeService.id === service.id 
                        ? "bg-primary/5 border-l-4 border-primary" 
                        : "hover:bg-gray-50 border-l-4 border-transparent"
                    }`}
                    data-testid={`button-service-${service.id}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={activeService.id === service.id ? "text-primary" : "text-gray-400"}>
                        {service.icon}
                      </span>
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
                <Card className="shadow-lg border-0 overflow-hidden">
                  <div className="h-48 md:h-64 overflow-hidden">
                    <img 
                      src={activeService.image} 
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary rounded-lg text-white">
                        {activeService.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                        {activeService.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {activeService.content}
                    </p>

                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-accent" />
                      Key Capabilities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {activeService.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <ChevronRight className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                          <h4 className="font-bold text-primary text-lg">Interested in this service?</h4>
                          <p className="text-sm text-muted-foreground">Contact our team for a detailed consultation.</p>
                        </div>
                        <Link href="/contact">
                          <Button className="bg-primary hover:bg-primary/90" data-testid="button-contact-service">
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
