import { Button } from "@/src/components/ui/Button";

export const AppointmentBar = () => {
  return (
    <section className="relative z-20 -mt-16 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-12 border border-slate-100 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/3">
           <h3 className="text-3xl font-bold font-serif mb-2">Book Appointment</h3>
           <p className="text-slate-500">Quick and easy online scheduling available 24/7.</p>
        </div>
        <form className="flex-1 grid sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
           <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400 ml-1">Name</label>
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full px-5 py-4 rounded-2xl bg-neutral-subtle border-none focus:ring-2 focus:ring-primary/20" 
              />
           </div>
           <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400 ml-1">Email</label>
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-2xl bg-neutral-subtle border-none focus:ring-2 focus:ring-primary/20" 
              />
           </div>
           <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400 ml-1">Date</label>
              <input 
                type="date" 
                className="w-full px-5 py-4 rounded-2xl bg-neutral-subtle border-none focus:ring-2 focus:ring-primary/20" 
              />
           </div>
           <div className="flex items-end">
              <Button className="w-full h-14" variant="secondary">Book Now</Button>
           </div>
        </form>
      </div>
    </section>
  );
};
