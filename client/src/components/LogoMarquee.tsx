import { motion } from "framer-motion";

interface LogoMarqueeProps {
  logos: Array<{
    src: string;
    alt: string;
  }>;
  speed?: number;
  className?: string;
}

export function LogoMarquee({ logos, speed = 25, className = "" }: LogoMarqueeProps) {
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 dark:from-background" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 dark:from-background" />
      
      <motion.div
        className="flex items-center gap-16 py-6"
        animate={{
          x: [0, -100 * logos.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((logo, i) => (
          <div key={i} className="flex-shrink-0 px-4">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-10 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
