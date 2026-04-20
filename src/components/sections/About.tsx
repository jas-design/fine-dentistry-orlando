import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import teamPhoto from "@/src/assets/images/teamphoto.webp";

export const About = () => {
  const stats = [
    { label: "Years Experience", value: "20+" },
    { label: "Happy Patients", value: "15k+" },
    { label: "Specialists", value: "5" },
    { label: "Awards Won", value: "12" },
  ];

  return (
    <section className="bg-neutral-subtle">
      <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={teamPhoto} 
              alt="Fine Dentistry Team"
              className="w-full h-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-100 hidden md:block">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                   <CheckCircle2 size={24} />
                </div>
                <div>
                   <p className="text-xl font-bold font-serif">Certified Pros</p>
                   <p className="text-sm text-slate-500">Board Licensed Care</p>
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">About Our Clinic</span>
          <h2 className="text-4xl md:text-5xl mb-6">We Care For Your Dental Health</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            At Fine Dentistry of Downtown Orlando, we believe that a healthy smile starts with personalized, 
            trust-focused care. We use the latest technology to ensure precision, comfort, and outstanding 
            results for every patient, from young children to seniors.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl bg-white border border-slate-100">
                <p className="text-3xl font-bold text-primary font-serif mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Learn Our Story</Button>
            <div className="flex items-center gap-3 px-4">
               <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white overflow-hidden -ml-2 first:ml-0">
                  <img src="https://i.pravatar.cc/100?u=1" alt="team" />
               </div>
               <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white overflow-hidden -ml-4">
                  <img src="https://i.pravatar.cc/100?u=2" alt="team" />
               </div>
               <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white overflow-hidden -ml-4">
                  <img src="https://i.pravatar.cc/100?u=3" alt="team" />
               </div>
               <span className="text-sm font-semibold text-slate-700 ml-2">5+ Master Dentists</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
