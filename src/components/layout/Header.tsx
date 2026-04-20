import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { MENU_LINKS, SITE_CONFIG } from "@/src/constants/site";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex flex-col items-center leading-none text-primary">
             <div className="flex items-center gap-2">
                <div className="font-serif font-bold text-lg rotate-0 sm:-rotate-90 origin-center sm:translate-y-2 uppercase tracking-tighter">Fine</div>
                <div className="h-8 w-px bg-primary/30 mx-1 hidden sm:block" />
                <div className="flex flex-col items-center">
                   <div className="text-primary mb-[-4px]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                   </div>
                   <div className="h-6 w-0.5 bg-primary rounded-full" />
                </div>
             </div>
             <div className="text-[9px] tracking-[0.15em] font-serif uppercase mt-1 whitespace-nowrap">Of Downtown Orlando</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {MENU_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.href ? "text-primary" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm">Book Appointment</Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <a href={`tel:${SITE_CONFIG.phone}`} className="p-2 text-primary">
            <Phone size={20} />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {MENU_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-lg font-medium",
                    location.pathname === link.href ? "text-primary" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full">Book Appointment</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
