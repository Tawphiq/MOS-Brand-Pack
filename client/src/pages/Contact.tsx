import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary py-16 text-center text-white">
        <div className="container-padding">
          <h1 className="text-4xl font-bold font-heading mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">We'd love to hear about your project.</p>
        </div>
      </div>

      <div className="container-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed">
                Have a question about our services or need a quote for a project? Reach out to our team using the form or the contact details below. We are ready to assist you.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Visit Us</h3>
                  <p className="text-gray-600 text-sm">A88 Legon Bypass, Westlands</p>
                  <p className="text-gray-600 text-sm">Accra, Ghana</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Call Us</h3>
                  <p className="text-gray-600 text-sm">+233 24 473 4616</p>
                  <p className="text-gray-500 text-xs mt-1">Mon-Fri, 8am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email Us</h3>
                  <p className="text-gray-600 text-sm">info@miningopts.com</p>
                  <p className="text-gray-500 text-xs mt-1">We typically reply within 24 hours</p>
                </div>
              </div>
            </div>
            
            {/* Embed Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p>Google Map Embed Placeholder</p>
                <p className="text-xs">Location: A88 Legon Bypass, Westlands, Accra</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div>
             <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
