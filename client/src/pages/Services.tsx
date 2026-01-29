import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, HardHat, Building2, Cpu, Server, Droplets, Leaf, ArrowRight, Sparkles, CheckCircle2, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

import serviceMiningImg from "@/assets/images/mining-fleet-operations.png";
import serviceEpcImg from "@/assets/images/epc-megaproject.png";
import serviceMiningTechImg from "@/assets/images/mining-tech-control.png";
import serviceItImg from "@/assets/images/datacenter-futuristic.png";
import serviceOilGasImg from "@/assets/images/oil-refinery-sunset.png";
import serviceEsgImg from "@/assets/images/esg-rainforest.png";
import servicesHeroImg from "@/assets/images/services-hero-banner.png";

const services = [
  {
    id: "contract-mining",
    icon: <HardHat className="w-6 h-6" />,
    title: "Contract Mining & Mine Operations",
    content: "MOS serves as a full contract mining operator, providing end-to-end mine execution services. We deliver comprehensive mining solutions from open-pit operations to tailings management with a focus on safety, efficiency, and operational excellence.",
    details: [
      "Open-pit load and haul operations",
      "Fleet operations & maintenance",
      "Tailings & waste management and handling",
      "Manpower supply and shift optimization",
      "Safety & compliance assurance"
    ],
    image: serviceMiningImg,
    gradient: "from-blue-600 to-blue-700"
  },
  {
    id: "epc",
    icon: <Building2 className="w-6 h-6" />,
    title: "EPC Services",
    content: "MOS is an EPC contractor delivering projects from concept to commissioning. We provide comprehensive Engineering, Procurement & Construction services for resource sector projects with disciplined project controls and quality assurance.",
    details: [
      "Front-end engineering (FEED)",
      "Detailed engineering & constructability reviews",
      "Procurement of equipment, materials & consumables",
      "Mechanical, civil, structural & electrical construction",
      "Project controls (cost, schedule, risk, quality)",
      "Commissioning & handover"
    ],
    image: serviceEpcImg,
    gradient: "from-emerald-600 to-emerald-700"
  },
  {
    id: "mining-tech",
    icon: <Cpu className="w-6 h-6" />,
    title: "Mining Technologies & Digital Systems",
    content: "Modern resource operations require modern systems. MOS integrates and deploys advanced technologies across mines and industrial plants to improve efficiency, safety, and data-driven decision making.",
    details: [
      "Fleet Management Systems (FMS)",
      "High-precision GPS and machine guidance systems",
      "Drones & aerial surveying",
      "Condition monitoring & asset health sensors",
      "Digital safety solutions (IoT, real-time alerts)",
      "Environmental monitoring technologies",
      "Operations dashboards & data analytics platforms"
    ],
    image: serviceMiningTechImg,
    gradient: "from-violet-600 to-violet-700"
  },
  {
    id: "it-enterprise",
    icon: <Server className="w-6 h-6" />,
    title: "IT Supplies & Enterprise Technology",
    content: "MOS supports industrial clients with secure and reliable IT ecosystems. We are partners of major global IT firms such as Cisco, Dell, HP and CrowdStrike to provide comprehensive technology solutions.",
    details: [
      "Servers, storage systems and networks",
      "Industrial-grade computers & rugged devices",
      "Data center setup and power management",
      "Surveillance, access control & security solutions",
      "Cloud solutions, virtualization & cybersecurity",
      "Network architecture and infrastructure audits",
      "Business continuity & disaster recovery systems"
    ],
    image: serviceItImg,
    gradient: "from-amber-600 to-amber-700"
  },
  {
    id: "oil-gas",
    icon: <Droplets className="w-6 h-6" />,
    title: "Oil & Gas Support Services",
    content: "MOS provides specialized support services for the oil and gas sector, focusing on production optimization, maintenance, and compliance to ensure safe and efficient operations.",
    details: [
      "Production optimization",
      "Pipeline integrity & maintenance",
      "Shutdown/turnaround planning",
      "HSSE compliance audits",
      "Remote monitoring & analytics"
    ],
    image: serviceOilGasImg,
    gradient: "from-rose-600 to-rose-700"
  },
  {
    id: "environmental-esg",
    icon: <Leaf className="w-6 h-6" />,
    title: "Environmental & ESG Services",
    content: "MOS delivers comprehensive environmental and ESG solutions to help organizations meet regulatory requirements and sustainability goals while maintaining social license to operate.",
    details: [
      "Environmental Management Systems (EMS)",
      "ESIA support and permitting guidance",
      "Air, water, waste & noise monitoring",
      "Social performance and stakeholder engagement",
      "ESG reporting (GRI, IFC, Ghana EPA)"
    ],
    image: serviceEsgImg,
    gradient: "from-teal-600 to-teal-700"
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-card">
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden -mt-20 pt-20">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={servicesHeroImg} 
          alt="MOS Engineering and Technology Services" 
          className="absolute inset-x-0 top-[-80px] bottom-0 w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 top-[-80px] bottom-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-padding text-center text-white relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white/90">What We Do</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white" 
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
      </div>

      <div className="container-padding py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-card rounded-3xl shadow-2xl overflow-hidden sticky top-28 border border-gray-100 dark:border-border"
            >
              <div className="p-8 bg-gradient-to-r from-primary to-primary/90 text-white">
                <h3 className="font-bold text-xl" style={{ fontFamily: 'var(--font-heading)' }}>Our Solutions</h3>
                <p className="text-sm text-gray-300 mt-2">Select a service to learn more</p>
              </div>
              <div className="p-3">
                {services.map((service, i) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all mb-1 ${
                      activeService.id === service.id 
                        ? "bg-primary/5 dark:bg-primary/10 border-l-4 border-accent" 
                        : "hover:bg-gray-50 dark:hover:bg-border/50 border-l-4 border-transparent"
                    }`}
                    data-testid={`button-service-${service.id}`}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          activeService.id === service.id 
                            ? `bg-gradient-to-br ${service.gradient} text-white shadow-lg` 
                            : "bg-gray-100 dark:bg-border text-gray-500 dark:text-muted-foreground"
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {service.icon}
                      </motion.div>
                      <span className={`font-medium text-sm ${activeService.id === service.id ? "text-primary dark:text-foreground" : "text-gray-700 dark:text-muted-foreground"}`}>
                        {service.title}
                      </span>
                    </div>
                    {activeService.id === service.id && <ChevronRight className="w-5 h-5 text-accent" />}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="h-64 md:h-80 overflow-hidden relative">
                    <motion.img 
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                      src={activeService.image} 
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-8"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-4 bg-gradient-to-br ${activeService.gradient} rounded-2xl text-white shadow-xl`}>
                          {activeService.icon}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                          {activeService.title}
                        </h2>
                      </div>
                    </motion.div>
                  </div>
                  <CardContent className="p-10">
                    <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                      {activeService.content}
                    </p>

                    <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
                      <Wrench className="w-6 h-6 text-accent" />
                      Key Capabilities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                      {activeService.details.map((detail, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-4 p-5 bg-gray-50 dark:bg-border/30 rounded-xl border border-gray-100 dark:border-border"
                        >
                          <div className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-secondary" />
                          </div>
                          <span className="text-foreground">{detail}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 dark:from-primary/10 dark:via-accent/10 dark:to-secondary/10 rounded-2xl border border-primary/10 dark:border-border">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                          <h4 className="font-bold text-primary dark:text-foreground text-xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Interested in this service?</h4>
                          <p className="text-muted-foreground">Contact our team for a detailed consultation.</p>
                        </div>
                        <Link href="/contact">
                          <Button className="bg-accent" data-testid="button-contact-service">
                            Get in Touch
                            <ArrowRight className="ml-2 w-5 h-5" />
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
