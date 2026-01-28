import { Button } from "@/components/ui/button";
import { Briefcase, Mail } from "lucide-react";

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary py-20 text-center text-white">
        <div className="container-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-heading)' }}>Join Our Team</h1>
          <p className="text-xl text-gray-300">Build your future with a leader in African infrastructure.</p>
        </div>
      </div>

      <div className="container-padding py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-accent" />
            </div>
            
            <h2 className="text-2xl font-bold text-primary mb-4">We Are Always Looking for Talent</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At MOS, we believe our people are our greatest asset. We welcome experienced professionals who share our values of Performance, Precision, and Integrity. Whether you are an engineer, technician, or project manager, we offer an environment where you can grow and make a real impact.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <h3 className="font-bold text-gray-800 mb-2">Current Openings</h3>
              <p className="text-gray-500 text-sm">There are no specific vacancies listed at the moment, but we are always eager to connect with skilled individuals.</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <p className="font-medium text-gray-700">Send your CV and Cover Letter to:</p>
              <a href="mailto:careers@miningopts.com" className="flex items-center gap-2 text-xl font-bold text-accent hover:underline">
                <Mail className="w-5 h-5" />
                careers@miningopts.com
              </a>
              <p className="text-xs text-gray-400 mt-2">Please include your area of expertise in the subject line.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
