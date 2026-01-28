import { Shield, Leaf, HeartHandshake, CheckCircle } from "lucide-react";

// Image related to safety/environment
const SAFETY_IMG = "https://images.unsplash.com/photo-1599818821033-0c5806282136?auto=format&fit=crop&q=80&w=1600";

export default function HseEsg() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-secondary py-24 overflow-hidden">
         <div className="absolute inset-0 bg-black/20 z-0"></div>
         <div className="container-padding relative z-10 text-center text-white">
           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-heading)' }}>HSE & ESG Commitment</h1>
           <p className="text-xl max-w-3xl mx-auto opacity-90">
             Safety isn't just a policy at MOS; it's our culture. We are dedicated to zero harm and sustainable development.
           </p>
         </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Safety First Philosophy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We operate under a strict "Zero Harm" policy. Every project begins with a comprehensive risk assessment and continues with daily safety briefings. Our goal is ensuring every employee returns home safely every single day.
              </p>
              <ul className="space-y-4">
                {[
                  "ISO 45001 Compliant Safety Systems",
                  "Regular Safety Training & Drills",
                  "Strict PPE Enforcement",
                  "Proactive Hazard Identification"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-secondary/10 transform rotate-3 rounded-xl"></div>
               <img src={SAFETY_IMG} alt="Safety First" className="relative rounded-xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-gray-50 p-8 rounded-xl border-t-4 border-secondary text-center">
              <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Health & Safety</h3>
              <p className="text-gray-600 text-sm">Rigorous protocols to protect physical and mental well-being of our workforce and partners.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border-t-4 border-accent text-center">
              <Leaf className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Environment</h3>
              <p className="text-gray-600 text-sm">Minimizing our ecological footprint through responsible waste management and energy efficiency.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border-t-4 border-primary text-center">
              <HeartHandshake className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Community</h3>
              <p className="text-gray-600 text-sm">Engaging with local communities to create shared value and sustainable opportunities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
