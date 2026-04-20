import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { MENU_LINKS, SITE_CONFIG } from "@/src/constants/site";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import bannerLogo from "@/src/assets/images/bannerlogo.png";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent",
        isScrolled ? "backdrop-blur-md shadow-md py-3 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-slate-900/40" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
           <img 
            src={bannerLogo} 
            alt={SITE_CONFIG.name} 
            className="h-16 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {MENU_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled 
                  ? (location.pathname === link.href ? "text-primary" : "text-slate-600")
                  : "text-white hover:text-primary-light"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" variant={isScrolled ? "primary" : "secondary"}>Book Appointment</Button>
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
