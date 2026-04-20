import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";

export const CTABanner = () => {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto bg-primary rounded-[50px] overflow-hidden relative min-h-[400px] flex items-center">
        {/* Background Image/Overlay */}
        <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
           <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
           <img 
              src="input_file_1.png" 
              alt="Fine Dentistry Team"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
           />
        </div>

        <div className="relative z-20 p-12 lg:p-20 lg:w-3/5 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
              We Are Accepting <br />New Patients
            </h2>
            <p className="text-xl text-primary-light/90 mb-10 max-w-lg">
              Take the first step towards a healthier, brighter smile today. 
              Our office is currently welcoming new families to our practice.
            </p>
            <Button size="lg" variant="secondary">Book Appointment Now</Button>
          </motion.div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-10 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />
      </div>
    </section>
  );
};
