import { motion } from "motion/react";
import { SERVICES } from "@/src/constants/site";
import { Button } from "@/src/components/ui/Button";

export default function ServicesPage() {
  return (
    <main className="pt-32">
       {/* Hero */}
       <section className="bg-primary py-24 px-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
             <motion.h1 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="text-5xl md:text-7xl font-bold font-serif text-white mb-6"
             >
               Our specialized Services
             </motion.h1>
             <p className="max-w-2xl mx-auto text-xl text-primary-light">
                Explore our range of comprehensive dental treatments designed 
                to give you the healthy, radiant smile you deserve.
             </p>
          </div>
       </section>

       {/* Individual Sections per Service */}
       <section className="bg-white">
          {SERVICES.map((service, index) => (
             <div 
               key={service.title} 
               className={`py-20 px-6 border-b border-slate-100 ${index % 2 === 1 ? "bg-neutral-subtle" : ""}`}
             >
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                   <div className={`${index % 2 === 1 ? "lg:order-last" : ""}`}>
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                         <service.icon size={32} />
                      </div>
                      <h2 className="text-4xl font-bold font-serif mb-6">{service.title}</h2>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                         {service.description} Our team utilizes advanced techniques including digital 
                         X-rays and 3D imaging to provide the highest level of care for this procedure.
                         We focus on minimal discomfort and long-lasting results.
                      </p>
                      <ul className="space-y-4 mb-10">
                         {["State-of-the-art equipment", "Painless procedures", "Long-lasting results"].map(item => (
                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                               <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                               {item}
                            </li>
                         ))}
                      </ul>
                      <Button size="lg">Book this Service</Button>
                   </div>
                   <div className="relative group">
                      <div className="absolute -inset-4 bg-primary/5 rounded-[40px] group-hover:bg-primary/10 transition-colors" />
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="relative z-10 w-full h-[450px] object-cover rounded-[32px] shadow-xl"
                        referrerPolicy="no-referrer"
                      />
                   </div>
                </div>
             </div>
          ))}
       </section>
    </main>
  );
}
