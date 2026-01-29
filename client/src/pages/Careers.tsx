import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Mail, GraduationCap, Users, Rocket, Heart, Sparkles, ArrowRight, MapPin, Clock, Building2 } from "lucide-react";
import careersTeamImg from "@/assets/images/team-mining-engineers.png";

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

export default function Careers() {
  const benefits = [
    { icon: <Rocket className="w-7 h-7" />, title: "Growth", desc: "Professional development and career advancement opportunities", gradient: "from-violet-600 to-violet-700" },
    { icon: <GraduationCap className="w-7 h-7" />, title: "Learning", desc: "Continuous training and certification programs", gradient: "from-blue-600 to-blue-700" },
    { icon: <Users className="w-7 h-7" />, title: "Team", desc: "Collaborative environment with industry experts", gradient: "from-emerald-600 to-emerald-700" },
    { icon: <Heart className="w-7 h-7" />, title: "Culture", desc: "Inclusive workplace that values diversity and innovation", gradient: "from-rose-600 to-rose-700" }
  ];

  const openPositions = [
    { title: "Solutions Architect", location: "Accra, Ghana", type: "Full-time", department: "Technology" },
    { title: "Mining Operations Manager", location: "Site-based", type: "Full-time", department: "Operations" },
    { title: "EPC Project Engineer", location: "Accra, Ghana", type: "Full-time", department: "Engineering" },
    { title: "Cybersecurity Analyst", location: "Accra, Ghana", type: "Full-time", department: "IT Security" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-card">
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden -mt-20 pt-20">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={careersTeamImg} 
          alt="MOS Engineering Team - Join Our Team" 
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
              <span className="text-sm font-medium text-white/90">Join Our Team</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Careers at MOS
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-xl mx-auto"
            >
              Build your career with West Africa's trusted technology partner
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container-padding py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 dark:from-primary/10 dark:via-accent/10 dark:to-secondary/10 p-12 md:p-16 text-center relative">
                <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
                <div className="relative">
                  <motion.div 
                    className="bg-gradient-to-br from-accent to-orange-500 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Briefcase className="w-12 h-12 text-white" />
                  </motion.div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-foreground mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                    We Are Always Looking for Talent
                  </h2>
                  <p className="text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto text-lg">
                    At MOS, we believe our people are our greatest asset. We welcome experienced professionals who share our commitment to excellence in technology and engineering solutions. Whether you're a solutions architect, security specialist, or project manager, we offer an environment where you can grow and make a real impact.
                  </p>

                  <div className="bg-white dark:bg-card p-10 rounded-3xl border shadow-xl mb-12">
                    <h3 className="font-bold text-foreground mb-4 text-xl" style={{ fontFamily: 'var(--font-heading)' }}>Open Positions</h3>
                    <div className="space-y-4">
                      {openPositions.map((position, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-gray-50 dark:bg-border/30 rounded-xl border border-gray-100 dark:border-border hover:border-accent/30 transition-colors"
                        >
                          <div className="mb-3 sm:mb-0">
                            <h4 className="font-semibold text-foreground">{position.title}</h4>
                            <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                {position.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {position.type}
                              </span>
                              <span className="flex items-center gap-1">
                                <Building2 className="w-3.5 h-3.5" />
                                {position.department}
                              </span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="border-accent text-accent">
                            Apply
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-8">
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-2">Don't see a role that fits?</p>
                      <p className="text-muted-foreground">Send us your CV for future opportunities:</p>
                    </div>
                    <a 
                      href="mailto:careers@miningopts.com" 
                      className="block"
                      data-testid="link-careers-email"
                    >
                      <Button size="lg" className="bg-accent text-white" data-testid="button-careers-email">
                        <Mail className="w-5 h-5 mr-3" />
                        careers@miningopts.com
                        <ArrowRight className="w-5 h-5 ml-3" />
                      </Button>
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Please include your area of expertise in the subject line
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mt-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-6">
              <span className="w-10 h-0.5 bg-accent rounded-full" />
              Why MOS
              <span className="w-10 h-0.5 bg-accent rounded-full" />
            </span>
            <h2 className="text-primary dark:text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              What We Offer
            </h2>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-visible" data-testid={`card-benefit-${i}`}>
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <h3 className="font-bold text-xl mb-3 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
