import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Mail, GraduationCap, Users, Rocket, Heart } from "lucide-react";

export default function Careers() {
  const benefits = [
    { icon: <Rocket className="w-6 h-6" />, title: "Growth", desc: "Professional development and career advancement opportunities" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Learning", desc: "Continuous training and certification programs" },
    { icon: <Users className="w-6 h-6" />, title: "Team", desc: "Collaborative environment with industry experts" },
    { icon: <Heart className="w-6 h-6" />, title: "Culture", desc: "Inclusive workplace that values diversity and innovation" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-primary py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-gray-900"></div>
        <div className="container-padding relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white" 
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Join Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Build your career with West Africa's trusted technology partner
          </motion.p>
        </div>
      </div>

      <div className="container-padding py-16">
        {/* Main CTA Card */}
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 md:p-12 text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-accent" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  We Are Always Looking for Talent
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  At MOS, we believe our people are our greatest asset. We welcome experienced professionals who share our commitment to excellence in technology and engineering solutions. Whether you're a solutions architect, security specialist, or project manager, we offer an environment where you can grow and make a real impact.
                </p>

                <div className="bg-white p-6 rounded-xl border shadow-sm mb-8">
                  <h3 className="font-bold text-foreground mb-2">Current Openings</h3>
                  <p className="text-muted-foreground text-sm">
                    We regularly have opportunities across technical, sales, and operations teams. Send us your CV to be considered for current and future positions.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <p className="font-medium text-foreground">Send your CV and Cover Letter to:</p>
                  <a 
                    href="mailto:careers@miningopts.com" 
                    className="flex items-center gap-2"
                    data-testid="link-careers-email"
                  >
                    <Button className="bg-accent hover:bg-accent/90 text-white">
                      <Mail className="w-4 h-4 mr-2" />
                      careers@miningopts.com
                    </Button>
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    Please include your area of expertise in the subject line
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Join Us */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why MOS</span>
            <h2 className="text-3xl font-bold text-primary mt-3" style={{ fontFamily: 'var(--font-heading)' }}>
              What We Offer
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
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
