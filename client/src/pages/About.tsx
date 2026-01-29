import { motion } from "framer-motion";
import { Target, ShieldCheck, Zap, Users, Building2, Award, Sparkles, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedCounter } from "@/components/AnimatedCounter";

import partnerRamjack from "@/assets/images/partner-ramjack.png";
import partnerWestcon from "@/assets/images/partner-westcon.png";
import partnerCrowdstrike from "@/assets/images/partner-crowdstrike.png";
import team1 from "@/assets/images/team1.jpg";
import team2 from "@/assets/images/team2.jpg";
import team3 from "@/assets/images/team3.jpg";
import team4 from "@/assets/images/team4.jpg";
import team5 from "@/assets/images/team5.jpg";
import team6 from "@/assets/images/team6.jpg";
import aboutCorporateImg from "@/assets/images/team-mining-engineers.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

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

  const countries = ["Ghana", "Guinea", "Cote d'Ivoire", "Sierra Leone", "Burkina Faso", "Mali"];

  return (
    <div className="min-h-screen">
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden -mt-20 pt-20">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={aboutCorporateImg} 
          alt="MOS Engineering Team - Professional Mining Engineers" 
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
              <span className="text-sm font-medium text-white/90">Who We Are</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white" 
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
      </div>

      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-6">
                <span className="w-10 h-0.5 bg-accent rounded-full" />
                Corporate Overview
                <span className="w-10 h-0.5 bg-accent rounded-full" />
              </span>
              <h2 className="text-primary mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                Who We Are
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p className="text-xl">
                  Mining Optimization Solutions Ltd (MOS) is a Ghana-based engineering, mining, EPC, technology, and environmental services company providing full-lifecycle solutions to clients across the West African resource sector.
                </p>
                <p>
                  Established in <span className="font-bold text-primary">2019</span> by a multidisciplinary team of experienced engineers with global practical backgrounds, MOS has evolved into a trusted partner for mining houses, oil & gas operators, EPC contractors, industrial firms, and government agencies.
                </p>
                <p>
                  MOS delivers a unique blend of contract mining execution, EPC project delivery, mining technology integration, IT solutions, and environmental/ESG systems.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {countries.map((country, i) => (
                  <motion.div
                    key={country}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl text-center border border-gray-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary mx-auto mb-2" />
                    <span className="text-sm font-medium text-foreground">{country}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-2xl bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <CardContent className="p-10 relative">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Target className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    To design, build, operate, and optimize resource projects through engineering excellence, innovation, and unwavering commitment to safety, ESG and operational performance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <Card className="h-full border-0 shadow-2xl bg-gradient-to-br from-secondary to-secondary/90 text-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <CardContent className="p-10 relative">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Globe className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    To become West Africa's most trusted partner for integrated mining, EPC, and technology-driven resource solutions, delivering sustainable growth for clients and communities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-6">
              <span className="w-10 h-0.5 bg-accent rounded-full" />
              Our Values
              <span className="w-10 h-0.5 bg-accent rounded-full" />
            </span>
            <h2 className="text-primary" style={{ fontFamily: 'var(--font-heading)' }}>What Drives Us</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-visible" data-testid={`card-value-${idx}`}>
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${val.gradient} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {val.icon}
                    </motion.div>
                    <h3 className="font-bold text-xl mb-3 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>{val.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-6">
              <span className="w-10 h-0.5 bg-accent rounded-full" />
              Strategic Partners
              <span className="w-10 h-0.5 bg-accent rounded-full" />
            </span>
            <h2 className="text-primary" style={{ fontFamily: 'var(--font-heading)' }}>Global Technology Partnerships</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <CardContent className="p-10 text-center">
                    <div className="h-24 flex items-center justify-center mb-6">
                      <img src={partner.img} alt={partner.alt} className="max-h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{partner.name}</h4>
                    <p className="text-sm text-muted-foreground">{partner.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-6">
              <span className="w-10 h-0.5 bg-accent rounded-full" />
              Our People
              <span className="w-10 h-0.5 bg-accent rounded-full" />
            </span>
            <h2 className="text-primary" style={{ fontFamily: 'var(--font-heading)' }}>Management & Technical Leadership</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="text-center group"
                data-testid={`card-team-${idx}`}
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-5 shadow-lg group-hover:shadow-2xl transition-all duration-500 relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary via-primary to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container-padding text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Ready to Partner with MOS?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
              Let's discuss how we can support your next project with engineering excellence and innovation.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent" data-testid="button-about-contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
