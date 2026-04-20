import { motion } from "motion/react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { SITE_CONFIG } from "@/src/constants/site";

export default function Contact() {
  return (
    <main className="pt-32">
       <section className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
             >
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Contact Us</span>
                <h1 className="text-5xl md:text-6xl font-bold font-serif mb-8">Get In Touch</h1>
                <p className="text-lg text-slate-600 mb-12">
                   Have questions about your dental health or ready to book an appointment? 
                   Reach out to our friendly team today. We're here to help you smile better.
                </p>

                <div className="grid gap-8">
                   <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                         <MapPin size={28} />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold font-serif mb-1">Our Location</h4>
                         <p className="text-slate-600">{SITE_CONFIG.address}</p>
                      </div>
                   </div>
                   <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary flex-shrink-0">
                         <Phone size={28} />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold font-serif mb-1">Phone Number</h4>
                         <a href={`tel:${SITE_CONFIG.phone}`} className="text-slate-600 hover:text-primary transition-colors text-lg font-medium">
                            {SITE_CONFIG.phone}
                         </a>
                      </div>
                   </div>
                   <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                         <Mail size={28} />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold font-serif mb-1">Email Address</h4>
                         <p className="text-slate-600">{SITE_CONFIG.email}</p>
                      </div>
                   </div>
                   <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-neutral-200 rounded-2xl flex items-center justify-center text-slate-700 flex-shrink-0">
                         <Clock size={28} />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold font-serif mb-1">Business Hours</h4>
                         <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                            {SITE_CONFIG.hours.map(h => (
                               <div key={h.day} className="contents">
                                  <span className="text-slate-500 font-medium">{h.day}</span>
                                  <span className="text-slate-700">{h.hours}</span>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-white p-8 md:p-12 rounded-[50px] shadow-2xl border border-slate-100"
             >
                <h3 className="text-3xl font-bold font-serif mb-8">Send Us a Message</h3>
                <form className="space-y-6">
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                         <input type="text" className="w-full px-6 py-4 rounded-2xl bg-neutral-subtle border-none focus:ring-2 focus:ring-primary/20" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                         <input type="email" className="w-full px-6 py-4 rounded-2xl bg-neutral-subtle border-none focus:ring-2 focus:ring-primary/20" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                      <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-neutral-subtle border-none focus:ring-2 focus:ring-primary/20" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                      <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-neutral-subtle border-none focus:ring-2 focus:ring-primary/20 resize-none"></textarea>
                   </div>
                   <Button size="lg" className="w-full">Submit Message</Button>
                </form>
             </motion.div>
          </div>
       </section>

       {/* Map Placeholder */}
       <section className="section-padding">
          <div className="w-full h-[500px] bg-slate-200 rounded-[50px] flex items-center justify-center overflow-hidden grayscale">
             <div className="text-center px-10">
                <MapPin size={48} className="mx-auto text-primary mb-4" />
                <p className="text-xl font-bold font-serif">Map View Placeholder</p>
                <p className="text-slate-500">Integrating real Google Maps would require an API Key. Visit us at {SITE_CONFIG.address}.</p>
             </div>
          </div>
       </section>
    </main>
  );
}
