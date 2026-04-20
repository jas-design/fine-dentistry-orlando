import { motion } from "motion/react";
import { ShieldCheck, CreditCard, HeartHandshake } from "lucide-react";

export const Insurance = () => {
  const options = [
    {
      title: "PPO Insurance",
      description: "We are in-network with most major PPO providers. We'll handle the claims for you.",
      icon: ShieldCheck,
    },
    {
      title: "Flexible Financing",
      description: "Options like CareCredit and low-interest payment plans available for your treatment.",
      icon: CreditCard,
    },
    {
      title: "Membership Plan",
      description: "No insurance? No problem. Our in-house membership plan covers preventative care.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="bg-primary py-24 px-6 overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <span className="text-secondary-light font-bold tracking-widest uppercase text-sm mb-4">Financial Support</span>
        <h2 className="text-4xl md:text-5xl mb-12 text-white">Insurance & Payment Options</h2>
        
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-[38px] border border-white/20 text-white hover:bg-white/15 transition-colors"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                 <option.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">{option.title}</h3>
              <p className="text-primary-light/90 leading-relaxed">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
           <img src="https://carecredit.com/favicon.ico" alt="CareCredit" className="h-8 opacity-50 grayscale invert" />
           <p className="text-white/60 font-medium">We accept MetLife, Delta Dental, Cigna, Guardian, and more.</p>
        </div>
      </div>
    </section>
  );
};
