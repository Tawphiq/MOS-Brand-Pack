import { motion } from "framer-motion";
import { Target, ShieldCheck, Zap, Users, Building2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import partnerRamjack from "@assets/images/partner-ramjack.png";
import partnerWestcon from "@assets/images/partner-westcon.png";
import partnerCrowdstrike from "@assets/images/partner-crowdstrike.png";
import team1 from "@assets/images/team1.jpg";
import team2 from "@assets/images/team2.jpg";
import team3 from "@assets/images/team3.jpg";
import team4 from "@assets/images/team4.jpg";
import team5 from "@assets/images/team5.jpg";
import team6 from "@assets/images/team6.jpg";

export default function About() {
  const values = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Security", desc: "Protecting critical assets through enterprise-grade security solutions." },
    { icon: <Zap className="w-6 h-6" />, title: "Resilience", desc: "Building systems that ensure high availability and business continuity." },
    { icon: <Target className="w-6 h-6" />, title: "Performance", desc: "Optimising operations for maximum efficiency and productivity." },
    { icon: <Award className="w-6 h-6" />, title: "Excellence", desc: "Delivering quality solutions with global best practices." },
  ];

  const team = [
    { img: team1, name: "Leadership Team", role: "Strategic Direction" },
    { img: team2, name: "Technical Team", role: "Solutions Architecture" },
    { img: team3, name: "Operations Team", role: "Project Delivery" },
    { img: team4, name: "Security Team", role: "Cybersecurity" },
    { img: team5, name: "Infrastructure Team", role: "Data Centre" },
    { img: team6, name: "Support Team", role: "Client Services" },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-primary py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-gray-900"></div>
        <div className="container-padding relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white" 
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            About MOS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Your trusted technology partner for digital transformation in West Africa
          </motion.p>
        </div>
      </div>

      {/* Corporate Overview */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Corporate Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Who We Are
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p className="text-lg">
                Mining Optimisation Solutions Ltd (MOS) is a Ghana-based technology and engineering solutions company delivering advanced digital infrastructure, data centre, cybersecurity, and operational optimisation solutions across Ghana and West Africa.
              </p>
              <p>
                MOS operates in mission-critical environments spanning the mining, oil & gas, EPC, financial services, telecommunications, government, and environmental sectors. We design, deploy, secure, and optimise enterprise IT and operational technology (OT) environments with a strong focus on availability, resilience, performance, and security.
              </p>
              <p>
                Our approach combines global best-in-class technologies with strong local execution capability to support organizations running high-availability systems and data-intensive operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary to-primary/90 text-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
                <p className="text-gray-200 leading-relaxed">
                  To deliver secure, resilient, and high-performance technology solutions that enable organizations to operate efficiently, protect critical assets, and scale sustainably.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-secondary to-secondary/90 text-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
                <p className="text-gray-200 leading-relaxed">
                  To become West Africa's trusted technology partner for data-driven optimisation, cybersecurity, and data-centre-enabled digital transformation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl font-bold text-primary mt-3" style={{ fontFamily: 'var(--font-heading)' }}>What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      {val.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{val.title}</h3>
                    <p className="text-sm text-muted-foreground">{val.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Strategic Partners</span>
            <h2 className="text-3xl font-bold text-primary mt-3" style={{ fontFamily: 'var(--font-heading)' }}>Global Technology Partnerships</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We partner with industry leaders to deliver enterprise-grade solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border shadow-sm">
              <CardContent className="p-8 text-center">
                <img src={partnerRamjack} alt="Ramjack Technology Solutions" className="h-16 object-contain mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Ramjack Technology</h4>
                <p className="text-sm text-muted-foreground">Systems integration and enterprise technology implementation</p>
              </CardContent>
            </Card>
            
            <Card className="border shadow-sm">
              <CardContent className="p-8 text-center">
                <img src={partnerWestcon} alt="Westcon-Comstor" className="h-16 object-contain mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Westcon-Comstor</h4>
                <p className="text-sm text-muted-foreground">Global technology distribution across 70+ countries</p>
              </CardContent>
            </Card>
            
            <Card className="border shadow-sm">
              <CardContent className="p-8 text-center">
                <img src={partnerCrowdstrike} alt="CrowdStrike" className="h-16 object-contain mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">CrowdStrike</h4>
                <p className="text-sm text-muted-foreground">Advanced cloud-native cybersecurity platform</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our People</span>
            <h2 className="text-3xl font-bold text-primary mt-3" style={{ fontFamily: 'var(--font-heading)' }}>Management & Technical Leadership</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="text-center"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-3 shadow-md">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-sm text-foreground">{member.name}</h4>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-primary text-white">
        <div className="container-padding text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Get in Touch</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300">
            <div>
              <p className="font-medium text-white">Address</p>
              <p className="text-sm">A80 Legon Bypass, Papao, Haatso, Accra, Ghana</p>
            </div>
            <div>
              <p className="font-medium text-white">Email</p>
              <p className="text-sm">info@miningopts.com</p>
            </div>
            <div>
              <p className="font-medium text-white">Phone</p>
              <p className="text-sm">+233 59973 8900</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
