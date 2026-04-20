import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { SITE_CONFIG } from "@/src/constants/site";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="input_file_3.png" 
          alt="Fine Dentistry Team" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
      </div>

      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-semibold tracking-wide uppercase border border-primary/30">
              Welcome to Fine Dentistry
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold text-white">
              We Provide the Best Dental Care in <span className="text-primary-light">{SITE_CONFIG.city}</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-xl font-medium">
              Experience modern dentistry with a gentle touch. Our advanced technology and 
              compassionate team ensure your comfort at every visit.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="primary">Schedule Appointment</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">Call Now</Button>
          </div>

          {/* Inline Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/10 max-w-lg"
          >
            <h3 className="text-xl font-bold mb-4 font-serif text-white">Quick Booking</h3>
            <form className="grid sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-white/20 focus:ring-2 focus:ring-primary/20 text-sm text-white placeholder:text-white/50"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-white/20 focus:ring-2 focus:ring-primary/20 text-sm text-white placeholder:text-white/50"
              />
              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-white/20 focus:ring-2 focus:ring-primary/20 text-sm text-white"
              />
              <Button size="sm" variant="secondary" className="sm:col-span-3">
                Book My Visit
              </Button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative lg:h-[500px] hidden lg:flex items-center justify-center"
        >
          {/* We'll use a smaller portrait of Dr. Trivedi here to maintain identity without overwhelming */}
          <div className="relative w-80 h-[450px]">
             <div className="absolute inset-0 bg-secondary/20 rounded-[40px] transform rotate-6 -z-10" />
             <img
               src="input_file_0.png"
               alt="Dr. Aileen Trivedi"
               className="w-full h-full object-cover rounded-[40px] shadow-2xl border-4 border-white/10"
               referrerPolicy="no-referrer"
             />
             <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3"
             >
               <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                  <Smile size={24} />
               </div>
               <div>
                 <p className="text-xs text-slate-500 font-medium">New Patient Special</p>
                 <p className="text-sm font-bold text-slate-900">$99 Full Exam</p>
               </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Smile = ({ size }: { size: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
  >
    <path d="M7 10h.01"/><path d="M17 10h.01"/><path d="M8 15s1.5 2 4 2 4-2 4-2"/><circle cx="12" cy="12" r="10"/>
  </svg>
);
