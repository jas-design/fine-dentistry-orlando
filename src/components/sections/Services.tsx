import { motion } from "motion/react";
import { SERVICES } from "@/src/constants/site";
import { Button } from "@/src/components/ui/Button";

export const Services = () => {
  return (
    <section className="bg-white">
      <div className="section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Services</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">What We Provide</h2>
          <p className="text-slate-600">
            Comprehensive dental solutions tailored to your unique needs, 
            combining clinical excellence with unmatched patient comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
              
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-4 font-serif">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <Button variant="ghost" size="sm" className="group-hover:text-primary p-0">
                Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">Explore All Services</Button>
        </div>
      </div>
    </section>
  );
};
