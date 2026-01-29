import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Shield, 
  Cpu, 
  Building2, 
  Landmark, 
  Factory, 
  Droplets, 
  Leaf, 
  Users,
  Globe,
  Award,
  Zap,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { LogoMarquee } from "@/components/LogoMarquee";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

import heroImg from "@assets/pexels-enrique72-15071423_1769658600887.jpg";
import dataCenterImg from "@/assets/images/datacenter-futuristic.png";
import cybersecurityImg from "@/assets/images/cybersecurity-ops-center.png";

// Partner logos
import logoAsanteGold from "@assets/iduapriem_1769656481085.jpg";
import logoMTN from "@assets/mtn_1769656481087.jpg";
import logoBankOfGhana from "@assets/omnibsic_1769656481089.png";
import logoOmniBSIC from "@assets/adb-bank_1769656481090.jpg";
import logoAngloGold from "@assets/anglogold_1769656481091.png";
import logoGoldFields from "@assets/asante-gold_1769656481092.jpg";
import logoADB from "@assets/bank-of-ghana_1769656481093.png";
import logoWestcon from "@assets/ramjack-logo_1769656504256.png";
import logoCrowdstrike from "@assets/westcon-logo_1769656504257.png";
import logoRamjack from "@assets/RamJack_logo_(1)_1769656621043.png";
import serviceMiningImg from "@/assets/images/mining-fleet-operations.png";
import serviceEpcImg from "@/assets/images/epc-megaproject.png";
import serviceMiningTechImg from "@/assets/images/mining-tech-control.png";
import serviceItImg from "@/assets/images/datacenter-futuristic.png";
import serviceOilGasImg from "@/assets/images/oil-refinery-sunset.png";
import serviceEsgImg from "@/assets/images/esg-rainforest.png";

import industryMiningImg from "@/assets/images/industry-mining.png";
import industryOilGasImg from "@/assets/images/industry-oil-gas.png";
import industryEpcImg from "@/assets/images/industry-epc.png";
import industryGovernmentImg from "@/assets/images/industry-government.png";
import industryEnvironmentalImg from "@/assets/images/industry-environmental.png";
import industryIndustrialImg from "@/assets/images/industry-industrial.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const services = [
    {
      icon: <Factory className="w-7 h-7" />,
      title: "Contract Mining & Operations",
      desc: "Full contract mining execution including open-pit load & haul, fleet operations, and tailings management.",
      gradient: "from-blue-600 to-blue-700",
      image: serviceMiningImg
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "EPC Services",
      desc: "Engineering, Procurement & Construction from concept to commissioning for resource sector projects.",
      gradient: "from-emerald-600 to-emerald-700",
      image: serviceEpcImg
    },
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "Mining Technologies",
      desc: "Fleet management systems, GPS guidance, drones, condition monitoring, and digital safety solutions.",
      gradient: "from-violet-600 to-violet-700",
      image: serviceMiningTechImg
    },
    {
      icon: <Server className="w-7 h-7" />,
      title: "IT & Enterprise Technology",
      desc: "Servers, networks, data centers, cybersecurity, and cloud solutions in partnership with global IT leaders.",
      gradient: "from-amber-600 to-amber-700",
      image: serviceItImg
    },
    {
      icon: <Droplets className="w-7 h-7" />,
      title: "Oil & Gas Support",
      desc: "Production optimization, pipeline integrity, shutdown planning, and HSSE compliance for oil & gas operations.",
      gradient: "from-rose-600 to-rose-700",
      image: serviceOilGasImg
    },
    {
      icon: <Leaf className="w-7 h-7" />,
      title: "Environmental & ESG",
      desc: "Environmental management systems, ESIA support, monitoring, and ESG reporting aligned with international standards.",
      gradient: "from-teal-600 to-teal-700",
      image: serviceEsgImg
    }
  ];

  const markets = [
    { icon: <Factory className="w-5 h-5" />, name: "Mining & Resources", image: industryMiningImg },
    { icon: <Droplets className="w-5 h-5" />, name: "Oil & Gas", image: industryOilGasImg },
    { icon: <Building2 className="w-5 h-5" />, name: "EPC Contractors", image: industryEpcImg },
    { icon: <Landmark className="w-5 h-5" />, name: "Government", image: industryGovernmentImg },
    { icon: <Leaf className="w-5 h-5" />, name: "Environmental", image: industryEnvironmentalImg },
    { icon: <Users className="w-5 h-5" />, name: "Industrial", image: industryIndustrialImg }
  ];

  const stats = [
    { value: 2019, label: "Year Established", suffix: "" },
    { value: 6, label: "West African Countries", suffix: "+" },
    { value: 100, label: "Projects Delivered", suffix: "+" },
    { value: 30, label: "Efficiency Improvement", suffix: "%" }
  ];

  const logos = [
    { src: logoAsanteGold, alt: "Asante Gold Corporation" },
    { src: logoMTN, alt: "MTN" },
    { src: logoBankOfGhana, alt: "Bank of Ghana" },
    { src: logoOmniBSIC, alt: "OmniBSIC Bank" },
    { src: logoAngloGold, alt: "AngloGold Ashanti" },
    { src: logoGoldFields, alt: "Gold Fields" },
    { src: logoADB, alt: "Agricultural Development Bank" },
    { src: logoWestcon, alt: "Westcon-Comstor" },
    { src: logoCrowdstrike, alt: "CrowdStrike" },
    { src: logoRamjack, alt: "Ramjack Technology Solutions" }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section - Professional Industry Standard Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden -mt-20 pt-20">
        {/* Background Image with Parallax - extends behind navbar */}
        <motion.div 
          className="absolute inset-x-0 top-[-80px] bottom-0 z-0"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImg})` }}
          />
          {/* Dark wash overlay - ensures text readability on bright image */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-gray-900/30" />
        </motion.div>

        {/* Main Content - Centered with enhanced styling */}
        <div className="container-padding relative z-20 pt-40 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Tagline */}
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <span className="inline-block text-accent font-semibold text-sm md:text-base tracking-wider uppercase">
                  West Africa's Premier Resource Partner
                </span>
              </motion.div>

              {/* Main Headline - Enhanced with text shadow for readability */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.025em', textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
                data-testid="heading-hero"
              >
                Powering Africa's
                <br />
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-400 drop-shadow-lg">
                    Resource Future
                  </span>
                </span>
              </motion.h1>
              
              {/* Description - Enhanced readability */}
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
              >
                End-to-end engineering, mining operations, and environmental solutions. 
                Trusted by industry leaders across Ghana and West Africa.
              </motion.p>
              
              {/* CTA Buttons - Enhanced styling */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/services">
                  <Button 
                    size="lg" 
                    className="bg-accent text-white font-semibold group shadow-2xl shadow-accent/30 px-8" 
                    data-testid="button-explore-services"
                  >
                    Explore Our Services
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/40 text-white backdrop-blur-md bg-white/10 px-8" 
                    data-testid="button-contact-hero"
                  >
                    Request a Quote
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div 
            className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-2 bg-accent rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-card" />
        <div className="container-padding relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary dark:text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-10 bg-white dark:bg-background border-y border-gray-100 dark:border-border">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.25em]">Trusted by Industry Leaders</p>
        </div>
        <LogoMarquee logos={logos} speed={20} />
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" />
        
        <div className="container-padding relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-6">
                  <span className="w-10 h-0.5 bg-accent rounded-full" />
                  About MOS
                </span>
                <h2 className="text-primary dark:text-foreground mb-8 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
                  Your Trusted Partner in West Africa
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Mining Optimization Solutions Ltd (MOS) is a Ghana-based engineering, mining, EPC, technology, and environmental services company providing full-lifecycle solutions across the West African resource sector.
                </p>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  Operating across Ghana, Guinea, Cote d'Ivoire, Sierra Leone, Burkina Faso, and Mali, we deliver contract mining, EPC project delivery, mining technology integration, IT solutions, and environmental/ESG systems.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4 mb-10"
              >
                {[
                  { icon: <Target className="w-5 h-5" />, text: "Performance" },
                  { icon: <Zap className="w-5 h-5" />, text: "Precision" },
                  { icon: <Shield className="w-5 h-5" />, text: "Sustainability" },
                  { icon: <Award className="w-5 h-5" />, text: "Integrity" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-card rounded-xl shadow-sm border border-gray-100 dark:border-border group hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 flex items-center justify-center text-primary dark:text-primary">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-foreground">{item.text}</span>
                  </div>
                ))}
              </motion.div>
              
              <Link href="/about">
                <Button className="bg-primary dark:bg-primary" data-testid="button-learn-more">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-gradient-to-br from-accent/20 to-transparent rounded-full -z-10" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={cybersecurityImg} 
                  alt="Cybersecurity Solutions" 
                  className="w-full object-cover h-[550px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                
                <motion.div
                  className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">24/7 Security Operations</div>
                      <div className="text-white/70 text-sm">Enterprise-grade protection</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white dark:bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(11,37,69,0.04),transparent_50%)]" />
        
        <div className="container-padding relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-6">
                <span className="w-10 h-0.5 bg-accent rounded-full" />
                Our Solutions
                <span className="w-10 h-0.5 bg-accent rounded-full" />
              </span>
              <h2 className="text-primary dark:text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
                Comprehensive Technology Services
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Enterprise-grade solutions designed to support secure, scalable, and highly available operations across West Africa.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-card group hover:-translate-y-2 overflow-hidden" data-testid={`card-service-${i}`}>
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className={`absolute bottom-5 left-5 bg-gradient-to-br ${service.gradient} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                  </div>
                  <CardContent className="p-7">
                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary dark:border-primary dark:text-primary" data-testid="button-view-services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-24 bg-gray-50 dark:bg-card">
        <div className="container-padding">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-6">
              <span className="w-10 h-0.5 bg-accent rounded-full" />
              Market Focus
              <span className="w-10 h-0.5 bg-accent rounded-full" />
            </span>
            <h2 className="text-primary dark:text-foreground text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Industries We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivering specialized solutions across key sectors in West Africa's growing economy
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((market, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1" data-testid={`card-market-${i}`}>
                  <img 
                    src={market.image} 
                    alt={market.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/20" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                        {market.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                        {market.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white dark:bg-background">
        <div className="container-padding">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-6">
              <span className="w-10 h-0.5 bg-accent rounded-full" />
              Testimonials
              <span className="w-10 h-0.5 bg-accent rounded-full" />
            </span>
            <h2 className="text-primary dark:text-foreground text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
              What Our Clients Say
            </h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-padding relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To design, build, operate, and optimize resource projects through engineering excellence, innovation, and unwavering commitment to safety, ESG and operational performance.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-emerald-500 flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To become West Africa's most trusted partner for integrated mining, EPC, and technology-driven resource solutions, delivering sustainable growth for clients and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white dark:bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,124,0,0.1),transparent_50%)]" />
        
        <div className="container-padding text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary dark:text-foreground mb-8 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Transform Your Operations?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
              Partner with MOS for enterprise-grade technology solutions that drive efficiency, security, and sustainable growth across West Africa.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-accent text-white font-semibold group" 
                data-testid="button-contact-cta"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
