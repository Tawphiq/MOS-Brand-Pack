import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, Sparkles, ArrowRight, Building2 } from "lucide-react";
import { useContact } from "@/hooks/use-contact";
import contactOfficeImg from "@/assets/images/contact-communication.png";

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

export default function Contact() {
  const { form, onSubmit, isPending } = useContact();
  const { register, handleSubmit, formState: { errors } } = form;

  const contactInfo = [
    { 
      icon: <MapPin className="w-6 h-6" />, 
      title: "Visit Us", 
      value: "A80 Legon Bypass, Papao\nHaatso, Accra, Ghana",
      gradient: "from-blue-600 to-blue-700"
    },
    { 
      icon: <Phone className="w-6 h-6" />, 
      title: "Call Us", 
      value: "+233 59973 8900",
      link: "tel:+233599738900",
      gradient: "from-emerald-600 to-emerald-700"
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      title: "Email Us", 
      value: "info@miningopts.com",
      link: "mailto:info@miningopts.com",
      gradient: "from-violet-600 to-violet-700"
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: "Business Hours", 
      value: "Mon - Fri: 8:00 AM - 5:00 PM",
      gradient: "from-amber-600 to-amber-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden -mt-20 sm:-mt-24 pt-20 sm:pt-24">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={contactOfficeImg} 
          alt="Contact MOS - Professional Business Partnership" 
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
              <span className="text-sm font-medium text-white/90">Get In Touch</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Let's discuss how we can help transform your operations
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container-padding py-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {contactInfo.map((info, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" data-testid={`card-contact-info-${i}`}>
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${info.gradient} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {info.icon}
                  </motion.div>
                  <h3 className="font-bold text-lg mb-3 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                      data-testid={`link-contact-${info.title.toLowerCase().replace(' ', '-')}`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-6">
              <span className="w-10 h-0.5 bg-accent rounded-full" />
              Send a Message
            </span>
            <h2 className="text-primary mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              We'd Love to Hear From You
            </h2>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              Whether you need contract mining services, EPC solutions, mining technology integration, or enterprise IT support, our team is ready to help. Fill out the form and we'll get back to you within 24 hours.
            </p>

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
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Subject *</label>
                    <Input 
                      placeholder="Inquiry about Contract Mining" 
                      {...register("subject")}
                      className={errors.subject ? "border-destructive" : ""}
                      data-testid="input-subject"
                    />
                    {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>}
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                    <Textarea 
                      placeholder="Tell us about your project or requirements..." 
                      rows={5}
                      {...register("message")}
                      className={`min-h-[140px] resize-none ${errors.message ? "border-destructive" : ""}`}
                      data-testid="input-message"
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-accent"
                    disabled={isPending}
                    data-testid="button-submit-contact"
                  >
                    {isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-6">
              <span className="w-10 h-0.5 bg-accent rounded-full" />
              Our Location
            </span>
            <h2 className="text-primary mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Visit Our Office
            </h2>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              We're located in the heart of Accra, Ghana. Feel free to schedule a visit to discuss your project in person.
            </p>

            <Card className="shadow-2xl border-0 overflow-hidden mb-8">
              <div className="h-[300px] bg-gray-200 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.23507850798!2d-0.22!3d5.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzknMDAuMCJOIDDCsDEzJzEyLjAiVw!5e0!3m2!1sen!2sgh!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: 'var(--font-heading)' }}>MOS Headquarters</h3>
                    <p className="text-muted-foreground">
                      A80 Legon Bypass, Papao<br />
                      Haatso, Accra, Ghana
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Prefer a Different Channel?</h3>
              <p className="text-muted-foreground mb-6">
                You can also reach us directly via email or phone:
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:info@miningopts.com" 
                  className="flex items-center gap-3 text-primary hover:text-accent transition-colors"
                  data-testid="link-contact-alt-email"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">info@miningopts.com</span>
                </a>
                <a 
                  href="tel:+233599738900" 
                  className="flex items-center gap-3 text-primary hover:text-accent transition-colors"
                  data-testid="link-contact-alt-phone"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+233 59973 8900</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
