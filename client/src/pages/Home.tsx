import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Factory, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

// Unsplash images for backgrounds
const HERO_BG = "https://images.unsplash.com/photo-1579566346927-c68383817a25?auto=format&fit=crop&q=80&w=2000"; // Mining/Industrial
const ABOUT_IMG = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000"; // Construction worker
const STATS_BG = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000"; // Industrial machinery

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 z-10 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary to-transparent" />

        {/* Content */}
        <div className="container-padding relative z-20 text-center text-white max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight"
          >
            Performance. Precision. <span className="text-accent">Sustainability.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Delivering world-class mining, engineering, and construction solutions tailored to the unique needs of West Africa.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/services">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
                Explore Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="container-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-tl-3xl z-0" />
            <img 
              src={ABOUT_IMG} 
              alt="Engineering Professional" 
              className="relative z-10 rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl z-20 max-w-xs border-l-4 border-primary">
              <p className="font-heading font-bold text-primary text-lg">Trusted Partners</p>
              <p className="text-sm text-gray-600">Committed to operational excellence and sustainable practices.</p>
            </div>
          </div>
          <div>
            <span className="text-accent font-bold tracking-wider uppercase text-sm">About MOS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-primary">Your Strategic Partner in Infrastructure & Mining</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mining Options & Solutions (MOS) is a premier Ghanaian company dedicated to providing specialized services across the mining, oil & gas, and construction sectors. We combine local expertise with international standards to deliver projects that stand the test of time.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Comprehensive Contract Mining",
                "Advanced EPC & Project Management",
                "Environmental & ESG Compliance",
                "Cutting-edge Technology Solutions"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about">
              <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 font-semibold group">
                Learn more about us <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-primary">Integrated Solutions for Complex Challenges</h2>
            <p className="text-gray-600">We offer a diverse portfolio of services designed to optimize efficiency and ensure sustainability across your operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory className="w-10 h-10 text-white" />,
                title: "Contract Mining",
                desc: "Full-scale mining operations including load & haul, drilling, and blasting services.",
                bg: "bg-primary"
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-white" />,
                title: "EPC Projects",
                desc: "End-to-end Engineering, Procurement, and Construction services for industrial infrastructure.",
                bg: "bg-secondary"
              },
              {
                icon: <Shield className="w-10 h-10 text-white" />,
                title: "HSE & ESG",
                desc: "Comprehensive safety audits, environmental compliance, and sustainability consulting.",
                bg: "bg-accent"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group"
              >
                <div className={`${service.bg} p-6 flex justify-center items-center h-32 group-hover:opacity-90 transition-opacity`}>
                  {service.icon}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{service.desc}</p>
                  <Link href="/services" className="text-primary font-semibold text-sm hover:underline">Read Details</Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${STATS_BG})` }}
        />
        <div className="container-padding relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Optimize Your Operations?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Partner with MOS for innovative solutions that drive productivity and sustainability. Let's build the future together.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-10 py-6 text-lg shadow-2xl shadow-black/30">
              Request a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
