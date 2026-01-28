import { motion } from "framer-motion";
import { Shield, Leaf, HeartHandshake, CheckCircle, Lock, Eye, AlertTriangle, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import hseSafetyImg from "@/assets/images/hse-safety.png";

export default function HseEsg() {
  const hsePillars = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety & Compliance",
      desc: "Comprehensive safety management systems and HSSE compliance audits for resource operations.",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Environmental Management",
      desc: "Environmental Management Systems (EMS), air, water, waste & noise monitoring.",
      gradient: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "ESIA & Permitting",
      desc: "Environmental and Social Impact Assessment support and permitting guidance.",
      gradient: "from-violet-600 to-violet-700"
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Social Performance",
      desc: "Stakeholder engagement and ESG reporting aligned with GRI, IFC, and Ghana EPA standards.",
      gradient: "from-amber-600 to-amber-700"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-secondary via-secondary to-gray-900 py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container-padding relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white/90">Security & Sustainability</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white" 
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            HSE & ESG
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-200"
          >
            Responsible operations that protect people, communities and the environment
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-4">
                <span className="w-8 h-0.5 bg-accent rounded-full" />
                Our Approach
              </span>
              <h2 className="text-primary mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Environmental & ESG Services
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                MOS delivers comprehensive environmental and ESG solutions to help organizations meet regulatory requirements and sustainability goals while maintaining social license to operate across West Africa.
              </p>
              <ul className="space-y-4">
                {[
                  "Environmental Management Systems (EMS)",
                  "ESIA support and permitting guidance",
                  "Air, water, waste & noise monitoring",
                  "Social performance and stakeholder engagement",
                  "ESG reporting (GRI, IFC, Ghana EPA)"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="font-medium text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl -z-10" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-accent/20 to-transparent rounded-3xl -z-10" />
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={hseSafetyImg} 
                  alt="Environmental and Safety Operations" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* HSE Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hsePillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${pillar.gradient} text-white rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-4">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Sustainability
              <span className="w-8 h-0.5 bg-accent rounded-full" />
            </span>
            <h2 className="text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
              Environmental, Social & Governance
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Leaf className="w-8 h-8" />, title: "Environmental", desc: "Air, water, waste and noise monitoring with comprehensive Environmental Management Systems for resource operations.", gradient: "from-emerald-600 to-emerald-700" },
              { icon: <HeartHandshake className="w-8 h-8" />, title: "Social", desc: "Social performance, stakeholder engagement, and community relations to maintain social license to operate.", gradient: "from-amber-600 to-amber-700" },
              { icon: <Shield className="w-8 h-8" />, title: "Governance", desc: "ESG reporting aligned with GRI, IFC standards, and Ghana EPA requirements for transparent operations.", gradient: "from-blue-600 to-blue-700" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <span className="text-white">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container-padding text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Compliance & Standards
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
              Our solutions support regulatory compliance and align with international standards for environmental protection, health & safety, and responsible operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["ISO 14001", "ISO 45001", "GRI Standards", "IFC Guidelines", "Ghana EPA"].map((standard, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur border border-white/20 px-8 py-4 rounded-xl text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  {standard}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
