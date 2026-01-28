import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, Sparkles, ArrowRight } from "lucide-react";
import { useContact } from "@/hooks/use-contact";

export default function Contact() {
  const { form, onSubmit, isPending } = useContact();
  const { register, handleSubmit, formState: { errors } } = form;

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
            <span className="text-sm font-medium text-white/90">Let's Talk</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white" 
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-xl mx-auto"
          >
            Get in touch with our team for enterprise technology solutions
          </motion.p>
        </div>
      </div>

      <div className="container-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-4">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Reach Out
            </span>
            <h2 className="text-primary mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Get In Touch
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
              Whether you're looking to secure your data centre, implement cybersecurity solutions, or optimize your operations, our team is ready to help. Reach out to discuss how MOS can support your technology initiatives.
            </p>

            <div className="space-y-6">
              {[
                { icon: <MapPin className="w-5 h-5" />, title: "Address", value: "A80 Legon Bypass, Papao, Haatso\nAccra, Ghana" },
                { icon: <Phone className="w-5 h-5" />, title: "Phone", value: "+233 59973 8900" },
                { icon: <Mail className="w-5 h-5" />, title: "Email", value: "info@miningopts.com" },
                { icon: <Clock className="w-5 h-5" />, title: "Business Hours", value: "Monday - Friday: 8:00 AM - 5:00 PM" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 pb-6 pt-8 px-8">
                <CardTitle className="text-xl text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                  Send Us a Message
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">We'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                      <Input 
                        placeholder="Your name" 
                        {...register("name")}
                        className={errors.name ? "border-destructive" : ""}
                        data-testid="input-name"
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                      <Input 
                        placeholder="Your company" 
                        {...register("company")}
                        data-testid="input-company"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email Address *</label>
                    <Input 
                      type="email" 
                      placeholder="email@example.com" 
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                      data-testid="input-email"
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                    <Input 
                      type="tel" 
                      placeholder="+233 XX XXX XXXX" 
                      {...register("phone")}
                      data-testid="input-phone"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                    <Textarea 
                      placeholder="Tell us about your project or requirements..." 
                      rows={5}
                      {...register("message")}
                      className={errors.message ? "border-destructive" : "border-gray-200"}
                      data-testid="input-message"
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent"
                    disabled={isPending}
                    data-testid="button-submit-contact"
                  >
                    {isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
