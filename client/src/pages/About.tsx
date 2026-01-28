import { motion } from "framer-motion";
import { Target, ShieldCheck, Zap, Users, Building2, Award, Sparkles, Globe } from "lucide-react";
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
import aboutCorporateImg from "@/assets/images/about-corporate.png";

export default function About() {
  const values = [
    { icon: <Target className="w-6 h-6" />, title: "Performance", desc: "Delivering measurable results that improve throughput, uptime and operational efficiency.", gradient: "from-blue-600 to-blue-700" },
    { icon: <Zap className="w-6 h-6" />, title: "Precision", desc: "Engineering accuracy, disciplined execution, and data-driven decisions.", gradient: "from-amber-600 to-amber-700" },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Sustainability", desc: "Responsible operations that protect people, communities and the environment.", gradient: "from-emerald-600 to-emerald-700" },
    { icon: <Award className="w-6 h-6" />, title: "Integrity", desc: "Ethical, transparent and accountable in all engagements.", gradient: "from-violet-600 to-violet-700" },
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
      <div className="bg-gradient-to-br from-primary via-primary to-gray-900 py-28 text-center text-white relative overflow-hidden">
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
            <span className="text-sm font-medium text-white/90">Who We Are</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white" 
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            About MOS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Your trusted technology partner for digital transformation in West Africa
          </motion.p>
        </div>
      </div>

      {/* Corporate Image Banner */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src={aboutCorporateImg} 
          alt="MOS Corporate Headquarters" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container-padding">
            <p className="text-lg md:text-xl font-medium max-w-2xl">
              Performance. Precision. Sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-4">
                <span className="w-8 h-0.5 bg-accent rounded-full" />
                Corporate Overview
                <span className="w-8 h-0.5 bg-accent rounded-full" />
              </span>
              <h2 className="text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                Who We Are
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6"
            >
              <p className="text-lg">
                Mining Optimization Solutions Ltd (MOS) is a Ghana-based engineering, mining, EPC, technology, and environmental services company providing full-lifecycle solutions to clients across the West African resource sector. Established in 2019 by a multidisciplinary team of experienced engineers with global practical backgrounds, MOS has evolved into a trusted partner for mining houses, oil & gas operators, EPC contractors, industrial firms, and government agencies.
              </p>
              <p>
                MOS delivers a unique blend of contract mining execution, EPC project delivery, mining technology integration, IT solutions, and environmental/ESG systems, making it one of the region's few fully integrated resource-sector service providers.
              </p>
              <p>
                Our operations are rooted in Ghana, but our solutions extend across West Africa, addressing the region's need for efficient, responsible, and technologically advanced resource development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                <CardContent className="p-8 relative">
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center mb-6">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
                  <p className="text-gray-200 leading-relaxed">
                    To design, build, operate, and optimize resource projects through engineering excellence, innovation, and unwavering commitment to safety, ESG and operational performance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-secondary to-secondary/90 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                <CardContent className="p-8 relative">
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center mb-6">
                    <Globe className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
                  <p className="text-gray-200 leading-relaxed">
                    To become West Africa's most trusted partner for integrated mining, EPC, and technology-driven resource solutions, delivering sustainable growth for clients and communities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-4">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Our Values
              <span className="w-8 h-0.5 bg-accent rounded-full" />
            </span>
            <h2 className="text-primary" style={{ fontFamily: 'var(--font-heading)' }}>What Drives Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 bg-gradient-to-br ${val.gradient} text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      {val.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>{val.title}</h3>
                    <p className="text-sm text-muted-foreground">{val.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-4">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Strategic Partners
              <span className="w-8 h-0.5 bg-accent rounded-full" />
            </span>
            <h2 className="text-primary" style={{ fontFamily: 'var(--font-heading)' }}>Global Technology Partnerships</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We partner with industry leaders to deliver enterprise-grade solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { img: partnerRamjack, alt: "Ramjack Technology Solutions", name: "Ramjack Technology", desc: "Systems integration and enterprise technology implementation" },
              { img: partnerWestcon, alt: "Westcon-Comstor", name: "Westcon-Comstor", desc: "Global technology distribution across 70+ countries" },
              { img: partnerCrowdstrike, alt: "CrowdStrike", name: "CrowdStrike", desc: "Advanced cloud-native cybersecurity platform" }
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div className="h-20 flex items-center justify-center mb-4">
                      <img src={partner.img} alt={partner.alt} className="max-h-16 object-contain" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{partner.name}</h4>
                    <p className="text-sm text-muted-foreground">{partner.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-4">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Our People
              <span className="w-8 h-0.5 bg-accent rounded-full" />
            </span>
            <h2 className="text-primary" style={{ fontFamily: 'var(--font-heading)' }}>Management & Technical Leadership</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="text-center group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-all relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-semibold text-sm text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>{member.name}</h4>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container-padding text-center relative">
          <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Get in Touch</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {[
              { label: "Address", value: "A80 Legon Bypass, Papao, Haatso, Accra, Ghana" },
              { label: "Email", value: "info@miningopts.com" },
              { label: "Phone", value: "+233 59973 8900" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-6 py-4">
                <p className="font-medium text-white text-sm mb-1">{item.label}</p>
                <p className="text-gray-300 text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
