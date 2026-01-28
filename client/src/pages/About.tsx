import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Heart, ShieldCheck } from "lucide-react";

// Image for Leadership or Team
const TEAM_IMG = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"; 

export default function About() {
  const values = [
    { icon: <Target className="w-6 h-6" />, title: "Performance", desc: "We deliver results that exceed expectations through rigorous standards." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Precision", desc: "Attention to detail in every engineering and operational task." },
    { icon: <Heart className="w-6 h-6" />, title: "Sustainability", desc: "Commitment to environmental stewardship and community wellbeing." },
    { icon: <Users className="w-6 h-6" />, title: "Collaboration", desc: "Building strong partnerships with clients and stakeholders." },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation", desc: "Embracing new technologies to solve complex challenges." },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-primary py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container-padding relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-heading)' }}>About MOS</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Building a legacy of excellence in African mining and infrastructure.</p>
        </div>
      </div>

      {/* Intro & Mission */}
      <section className="section-padding bg-white">
        <div className="container-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
            <div className="prose text-gray-600 leading-relaxed space-y-4">
              <p>
                Mining Options & Solutions (MOS) is a wholly Ghanaian-owned limited liability company. We are a dynamic force in the mining, oil & gas, engineering, and construction sectors, driven by a commitment to local content and international standards.
              </p>
              <p>
                Founded on the principles of integrity and operational excellence, MOS bridges the gap between complex industry demands and sustainable, practical solutions. We pride ourselves on our ability to adapt to the evolving landscape of West African industry.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
                <p className="text-gray-700 italic">
                  "To provide superior mining, engineering, and technological solutions that drive value for our clients while upholding the highest standards of safety and environmental responsibility."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
                <p className="text-gray-700 italic">
                  "To be the preferred partner for infrastructure and industrial development in West Africa, recognized for our innovation, reliability, and sustainable impact."
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={TEAM_IMG} 
              alt="MOS Team Collaboration" 
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent rounded-full -z-10 opacity-20 hidden md:block" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary rounded-full -z-10 opacity-20 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm">Core Values</span>
            <h2 className="text-3xl font-bold text-primary mt-2">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {val.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                <p className="text-sm text-gray-600">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="section-padding bg-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400 text-2xl font-bold">
                KD
              </div>
              <h3 className="text-xl font-bold text-primary">Kofi Appiah Dwomoh</h3>
              <p className="text-accent font-medium mb-4">Managing Director</p>
              <p className="text-sm text-gray-600">Leading strategic direction and operational growth.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400 text-2xl font-bold">
                MP
              </div>
              <h3 className="text-xl font-bold text-primary">Mawuli Peters</h3>
              <p className="text-accent font-medium mb-4">Director of Operations</p>
              <p className="text-sm text-gray-600">Overseeing project execution and technical excellence.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
