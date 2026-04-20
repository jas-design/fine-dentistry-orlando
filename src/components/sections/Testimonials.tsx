import { motion } from "motion/react";
import { TESTIMONIALS } from "@/src/constants/site";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">What Our Clients Say</h2>
          <p className="text-slate-600">
            Real stories from our patients about their experiences and life-changing 
            smile transformations at Fine Dentistry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-subtle p-8 rounded-[40px] border border-slate-100 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-6 right-8 text-primary/10">
                 <Quote size={60} />
              </div>
              
              <div className="flex gap-1 mb-6 text-secondary">
                 {[...Array(t.rating)].map((_, i) => (
                   <Star key={i} size={18} fill="currentColor" />
                 ))}
              </div>

              <p className="text-lg text-slate-700 italic mb-8 flex-1 relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                 <img 
                   src={t.image} 
                   alt={t.name} 
                   className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                 />
                 <div>
                    <p className="font-bold text-slate-900 font-serif">{t.name}</p>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
