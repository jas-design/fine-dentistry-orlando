import { motion } from "motion/react";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1583307567825-4c6e9a6e1470?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <main className="pt-32">
       <section className="bg-neutral-subtle py-20">
          <div className="section-padding text-center">
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-7xl font-bold font-serif mb-6"
             >
               Smile Gallery & Office
             </motion.h1>
             <p className="max-w-2xl mx-auto text-xl text-slate-600">
                A look inside our state-of-the-art facility and some of the 
                wonderful results we've achieved for our patients.
             </p>
          </div>
       </section>

       <section className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {images.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group h-80 rounded-[40px] overflow-hidden cursor-pointer"
                >
                   <img 
                      src={img} 
                      alt={`Gallery ${i}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-bold tracking-widest uppercase">View Result</span>
                   </div>
                </motion.div>
             ))}
          </div>
       </section>
    </main>
  );
}
