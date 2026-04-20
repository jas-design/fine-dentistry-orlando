import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { SITE_CONFIG } from "@/src/constants/site";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-neutral-subtle">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10 translate-x-20" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              Welcome to Fine Dentistry
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold text-slate-900">
              We Provide the Best Dental Care in <span className="text-primary">{SITE_CONFIG.city}</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl">
              Experience modern dentistry with a gentle touch. Our advanced technology and 
              compassionate team ensure your comfort at every visit.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg">Schedule Appointment</Button>
            <Button size="lg" variant="outline">Call Now</Button>
          </div>

          {/* Inline Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-lg"
          >
            <h3 className="text-xl font-bold mb-4 font-serif">Quick Booking</h3>
            <form className="grid sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 text-sm"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 text-sm"
              />
              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 text-sm"
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
          className="relative lg:h-[600px] order-first lg:order-last"
        >
          <div className="absolute inset-0 bg-secondary/10 rounded-[40px] transform rotate-3 -z-10" />
          <img
            src="input_file_0.png"
            alt="Dr. Aileen Trivedi"
            className="w-full h-full object-cover rounded-[40px] shadow-2xl"
            referrerPolicy="no-referrer"
          />
          
          {/* Floating Element */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-50 flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
               <Smile size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">New Patient Special</p>
              <p className="text-sm font-bold text-slate-900">$99 Full Exam</p>
            </div>
          </motion.div>
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
