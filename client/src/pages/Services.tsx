import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Truck, HardHat, Cpu, Droplet, Fuel, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "mining",
    icon: <Truck className="w-6 h-6" />,
    title: "Contract Mining",
    content: "We provide comprehensive contract mining solutions designed to maximize efficiency and reduce costs. Our fleet and experienced operators handle everything from load & haul to drilling and blasting. We ensure strict adherence to safety protocols while meeting production targets.",
    details: ["Load & Haul Operations", "Drilling & Blasting", "Mine Planning & Surveying", "Equipment Rental & Maintenance"]
  },
  {
    id: "epc",
    icon: <HardHat className="w-6 h-6" />,
    title: "EPC & Construction",
    content: "Our Engineering, Procurement, and Construction (EPC) division delivers turnkey industrial and infrastructure projects. From civil works to structural steel erection, we manage the entire project lifecycle with precision.",
    details: ["Civil Engineering Works", "Structural Steel Fabrication", "Industrial Plant Construction", "Roads & Infrastructure"]
  },
  {
    id: "tech",
    icon: <Cpu className="w-6 h-6" />,
    title: "Technologies & IT",
    content: "MOS integrates modern technology into traditional industries. We supply robust IT hardware, mining software solutions, and communication infrastructure tailored for remote and harsh environments.",
    details: ["Mining Software Solutions", "IT Infrastructure & Hardware", "Remote Communication Systems", "Data Analytics for Operations"]
  },
  {
    id: "supplies",
    icon: <Droplet className="w-6 h-6" />,
    title: "General Supplies",
    content: "We serve as a reliable supply chain partner, sourcing high-quality mining consumables, PPE, chemicals, and spare parts. Our logistics network ensures timely delivery to keep your operations running smoothly.",
    details: ["Mining Consumables", "Personal Protective Equipment (PPE)", "Industrial Chemicals", "Machinery Spare Parts"]
  },
  {
    id: "oilgas",
    icon: <Fuel className="w-6 h-6" />,
    title: "Oil & Gas Services",
    content: "Expanding into the energy sector, we offer specialized support services for upstream and downstream operations, including facility maintenance and technical manpower supply.",
    details: ["Facility Maintenance", "Technical Manpower Supply", "Logistics Support", "Safety Equipment"]
  },
  {
    id: "enviro",
    icon: <Leaf className="w-6 h-6" />,
    title: "Environmental Consulting",
    content: "Sustainability is at our core. We help clients navigate complex environmental regulations, conduct impact assessments, and implement remediation strategies.",
    details: ["Environmental Impact Assessments", "Waste Management Solutions", "Reclamation & Remediation", "Compliance Audits"]
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-20 text-center">
        <div className="container-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-heading)' }}>Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Integrated solutions powered by expertise and innovation.</p>
        </div>
      </div>

      <div className="container-padding py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
              <div className="p-4 bg-gray-100 border-b border-gray-200">
                <h3 className="font-bold text-primary">Service Menu</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={`w-full flex items-center justify-between p-4 text-left transition-all ${
                      activeService.id === service.id 
                        ? "bg-primary text-white" 
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={activeService.id === service.id ? "text-accent" : "text-gray-400"}>
                        {service.icon}
                      </span>
                      <span className="font-medium">{service.title}</span>
                    </div>
                    {activeService.id === service.id && <ChevronRight className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 min-h-[500px]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {activeService.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-primary">{activeService.title}</h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {activeService.content}
                </p>

                <h3 className="text-lg font-bold text-primary mb-4 border-b pb-2">Key Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeService.details.map((detail, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <ChevronRight className="w-4 h-4 text-accent" />
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-secondary/10 rounded-xl border border-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-secondary text-lg">Interested in this service?</h4>
                    <p className="text-sm text-gray-600">Contact our team for a detailed proposal.</p>
                  </div>
                  <Button className="bg-secondary hover:bg-secondary/90">Get in Touch</Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
