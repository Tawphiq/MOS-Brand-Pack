import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Mail, GraduationCap, Users, Rocket, Heart, Sparkles, ArrowRight } from "lucide-react";
import careersTeamImg from "@/assets/images/careers-engineering-team.jpg";

export default function Careers() {
  const benefits = [
    { icon: <Rocket className="w-6 h-6" />, title: "Growth", desc: "Professional development and career advancement opportunities", gradient: "from-violet-600 to-violet-700" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Learning", desc: "Continuous training and certification programs", gradient: "from-blue-600 to-blue-700" },
    { icon: <Users className="w-6 h-6" />, title: "Team", desc: "Collaborative environment with industry experts", gradient: "from-emerald-600 to-emerald-700" },
    { icon: <Heart className="w-6 h-6" />, title: "Culture", desc: "Inclusive workplace that values diversity and innovation", gradient: "from-rose-600 to-rose-700" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
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
            <span className="text-sm font-medium text-white/90">Join Our Team</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white" 
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

      {/* Team Image Banner */}
      <div className="relative h-[250px] md:h-[350px] overflow-hidden">
        <img 
          src={careersTeamImg} 
          alt="MOS Engineering Team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container-padding">
            <p className="text-lg md:text-xl font-medium max-w-2xl">
              Join a team of engineers and innovators shaping Africa's resource sector
            </p>
          </div>
        </div>
      </div>

      <div className="container-padding py-20">
        {/* Main CTA Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 p-10 md:p-14 text-center relative">
                <div className="absolute top-0 right-0 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="bg-gradient-to-br from-accent to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <Briefcase className="w-10 h-10 text-white" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                    We Are Always Looking for Talent
                  </h2>
                  <p className="text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto text-lg">
                    At MOS, we believe our people are our greatest asset. We welcome experienced professionals who share our commitment to excellence in technology and engineering solutions. Whether you're a solutions architect, security specialist, or project manager, we offer an environment where you can grow and make a real impact.
                  </p>

                  <div className="bg-white p-8 rounded-2xl border shadow-lg mb-10">
                    <h3 className="font-bold text-foreground mb-3 text-lg" style={{ fontFamily: 'var(--font-heading)' }}>Current Openings</h3>
                    <p className="text-muted-foreground">
                      We regularly have opportunities across technical, sales, and operations teams. Send us your CV to be considered for current and future positions.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-6">
                    <p className="font-semibold text-foreground">Send your CV and Cover Letter to:</p>
                    <a 
                      href="mailto:careers@miningopts.com" 
                      className="block"
                      data-testid="link-careers-email"
                    >
                      <Button className="bg-accent text-white px-8">
                        <Mail className="w-5 h-5 mr-2" />
                        careers@miningopts.com
                        <ArrowRight className="w-4 h-4 ml-2" />
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

        {/* Why Join Us */}
        <div className="mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-4">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Why MOS
              <span className="w-8 h-0.5 bg-accent rounded-full" />
            </span>
            <h2 className="text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
              What We Offer
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
