import { motion } from "motion/react";
import { DOCTORS } from "@/src/constants/site";
import { Linkedin, Mail } from "lucide-react";
import { cn } from "@/src/lib/utils";

export const Team = () => {
  return (
    <section className="bg-neutral-subtle">
      <div className="section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Team</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">Meet Our Expert Dentists</h2>
          <p className="text-slate-600">
            A dedicated team of professionals committed to excellence in oral health 
            and aesthetic perfection.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {DOCTORS.map((doc, index) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500",
                index === 0 ? "lg:col-span-5" : "lg:col-span-7"
              )}
            >
              <div className={cn("relative overflow-hidden", index === 0 ? "h-[500px]" : "h-[500px] lg:h-full")}>
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                      <Linkedin size={20} />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                      <Mail size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-10 text-center">
                <span className="text-secondary font-bold uppercase text-xs tracking-widest block mb-2">{doc.specialty}</span>
                <h3 className="text-3xl font-bold font-serif mb-4">{doc.name}</h3>
                <p className="text-slate-600 italic">
                  "{doc.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
