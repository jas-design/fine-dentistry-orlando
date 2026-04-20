import { Hero } from "@/src/components/sections/Hero";
import { Services } from "@/src/components/sections/Services";
import { About } from "@/src/components/sections/About";
import { AppointmentBar } from "@/src/components/sections/AppointmentBar";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { Insurance } from "@/src/components/sections/Insurance";
import { FAQ } from "@/src/components/sections/FAQ";
import { Team } from "@/src/components/sections/Team";
import { CTABanner } from "@/src/components/sections/CTABanner";
import { Blog } from "@/src/components/sections/Blog";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AppointmentBar />
      <Services />
      <About />
      <Insurance />
      <Testimonials />
      <Team />
      <FAQ />
      <CTABanner />
      <Blog />
    </main>
  );
}
