import { motion } from "motion/react";
import { CheckCircle2, Award, Users, Search } from "lucide-react";
import { Button } from "@/src/components/ui/Button";

export default function AboutUs() {
  const certifications = [
    { title: "ADA Member", subtitle: "American Dental Association" },
    { title: "FDA Licensed", subtitle: "Florida Dental Association" },
    { title: "Top Dentist 2023", subtitle: "Orlando Magazine Award" },
  ];

  return (
    <main className="pt-32">
       {/* Hero Header */}
       <section className="bg-neutral-subtle py-20">
          <div className="section-padding text-center">
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-7xl font-bold font-serif mb-6"
             >
               Our Story & Mission
             </motion.h1>
             <p className="max-w-2xl mx-auto text-xl text-slate-600">
                Founded with a vision to redefine dental care in Downtown Orlando, Fine Dentistry 
                is where modern science meets compassionate artistry.
             </p>
          </div>
       </section>

       {/* Story Content */}
       <section className="section-padding grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
             <h2 className="text-4xl font-bold border-l-4 border-primary pl-6">Decades of Excellence</h2>
             <p className="text-lg text-slate-700 leading-relaxed">
                Fine Dentistry has been a staple of the Orlando community for over 20 years. 
                What started as a small local practice has grown into a premier destination for 
                comprehensive dental care, known for our personalized approach and commitment 
                to utilizing the world's most advanced dental technologies.
             </p>
             <p className="text-lg text-slate-700 leading-relaxed">
                Our mission is simple: to provide a dental experience that is as comfortable as 
                it is effective. We don't just treat teeth; we care for people.
             </p>
             <div className="pt-6 grid grid-cols-2 gap-8">
                <div className="flex gap-4 items-start">
                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <Users size={24} />
                   </div>
                   <div>
                      <p className="font-bold text-xl">15,000+</p>
                      <p className="text-slate-500">Patients Served</p>
                   </div>
                </div>
                <div className="flex gap-4 items-start">
                   <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary flex-shrink-0">
                      <Search size={24} />
                   </div>
                   <div>
                      <p className="font-bold text-xl">99%</p>
                      <p className="text-slate-500">Satisfaction Rate</p>
                   </div>
                </div>
             </div>
          </div>
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
               alt="Team in clinic" 
               className="rounded-[40px] shadow-2xl grayscale"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-primary/20 rounded-[40px] mix-blend-multiply" />
          </div>
       </section>

       {/* Certifications */}
       <section className="bg-primary py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
             <h2 className="text-white text-3xl font-bold mb-12 font-serif">Trust Badges & Certifications</h2>
             <div className="grid md:grid-cols-3 gap-8 w-full text-center">
                {certifications.map((cert) => (
                   <div key={cert.title} className="bg-white/10 p-8 rounded-3xl border border-white/20 text-white">
                      <Award className="mx-auto mb-4 text-secondary-light" size={40} />
                      <h4 className="text-xl font-bold mb-1">{cert.title}</h4>
                      <p className="text-primary-light/80 text-sm">{cert.subtitle}</p>
                   </div>
                ))}
             </div>
          </div>
       </section>

       {/* Team again? Skip since it's on home. Maybe a Join CTA */}
       <section className="section-padding text-center">
          <div className="bg-secondary/5 rounded-[50px] p-12 lg:p-20">
             <h2 className="text-4xl font-bold font-serif mb-6">Ready to Join the Family?</h2>
             <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                We are always looking for new patients who value their oral health. 
                Experience the difference of a clinic that truly cares.
             </p>
             <Button size="lg">Book Your First Visit</Button>
          </div>
       </section>
    </main>
  );
}
