import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "@/src/constants/site";
import { ChevronDown } from "lucide-react";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Common Questions</span>
          <h2 className="text-4xl md:text-5xl mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="rounded-3xl border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-bold text-slate-800 font-serif">{faq.question}</span>
                  <ChevronDown 
                    className={`text-primary transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`} 
                    size={20} 
                  />
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative lg:h-[600px]"
        >
          <img
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000"
            alt="Dentist and patient"
            className="w-full h-full object-cover rounded-[40px] shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-[40px]" />
          <div className="absolute bottom-10 left-10 right-10 text-white">
             <p className="text-2xl font-serif font-bold">Have more questions?</p>
             <p className="opacity-90">Our friendly team is here to help you understand every part of your dental journey.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
