import { motion } from "framer-motion";
import { Shield, Leaf, HeartHandshake, CheckCircle, Lock, Eye, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import cybersecurityImg from "@assets/images/cybersecurity.jpg";

export default function HseEsg() {
  const securityPillars = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Endpoint Security",
      desc: "Advanced protection through CrowdStrike Falcon platform for all endpoints and workloads."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero Trust Security",
      desc: "Continuous verification and least-privilege access models for all users and systems."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Threat Intelligence",
      desc: "Real-time threat detection, incident response, and proactive security monitoring."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Risk Management",
      desc: "Comprehensive cyber risk assessments and regulatory compliance alignment."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-secondary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-gray-900"></div>
        <div className="container-padding relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white" 
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Security & Compliance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto text-gray-200"
          >
            Protecting critical assets through enterprise-grade cybersecurity and risk management solutions
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Approach</span>
              <h2 className="text-3xl font-bold text-primary mt-3 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Cybersecurity & Risk Management
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Leveraging CrowdStrike technologies and global vendor ecosystems through Westcon-Comstor, MOS delivers comprehensive cybersecurity services designed to protect enterprise and data centre environments against evolving threats.
              </p>
              <ul className="space-y-4">
                {[
                  "Endpoint Detection and Response (EDR)",
                  "Cloud and identity security",
                  "Threat intelligence and incident response",
                  "Cyber risk assessments and compliance alignment",
                  "Security architecture for critical systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-2xl -z-10"></div>
              <img 
                src={cybersecurityImg} 
                alt="Cybersecurity Operations" 
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Security Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityPillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-t-4 border-t-primary shadow-md">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Sustainability</span>
            <h2 className="text-3xl font-bold text-primary mt-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Environmental, Social & Governance
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Environmental</h3>
                <p className="text-muted-foreground text-sm">
                  Energy-efficient data centre designs and sustainable technology practices that minimize environmental impact.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                  <HeartHandshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Social</h3>
                <p className="text-muted-foreground text-sm">
                  Building local capacity through training, knowledge transfer, and community engagement initiatives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Governance</h3>
                <p className="text-muted-foreground text-sm">
                  Strong compliance frameworks, regulatory alignment, and transparent business practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-primary text-white">
        <div className="container-padding text-center">
          <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Compliance & Standards
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Our solutions are designed to support regulatory compliance and align with international standards for data protection, cybersecurity, and operational resilience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["ISO 27001", "GDPR", "PCI DSS", "NIST", "SOC 2"].map((standard, i) => (
              <div key={i} className="bg-white/10 px-6 py-3 rounded-full text-sm font-medium">
                {standard}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
