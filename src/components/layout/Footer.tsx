import { Link } from "react-router-dom";
import { MENU_LINKS, SITE_CONFIG } from "@/src/constants/site";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        {/* Column 1: Info */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center">
            <img 
              src="input_file_2.png" 
              alt={SITE_CONFIG.name} 
              className="h-20 w-auto object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-slate-400 leading-relaxed">
            Leading the way in Downtown Orlando dental care. Our mission is to provide 
            premium dental services that enhance your natural beauty and total well-being.
          </p>
          <div className="flex gap-4">
             {SITE_CONFIG.socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:scale-110 duration-200"
                >
                   <social.icon size={20} />
                </a>
             ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xl font-bold font-serif mb-8 border-l-4 border-primary pl-4">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            {MENU_LINKS.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="text-slate-400 hover:text-primary transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
               <Link to="/insurance" className="text-slate-400 hover:text-primary transition-colors">
                  Insurance & Payment
               </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-xl font-bold font-serif mb-8 border-l-4 border-primary pl-4">Our Services</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">Dental Implants</Link></li>
            <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">Cosmetic Dentistry</Link></li>
            <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">Emergency Care</Link></li>
            <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">Teeth Whitening</Link></li>
            <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">Oral Surgery</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-xl font-bold font-serif mb-8 border-l-4 border-primary pl-4">Get In Touch</h4>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
               <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
               <p className="text-slate-400">{SITE_CONFIG.address}</p>
            </div>
            <div className="flex gap-4 items-start">
               <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
               <p className="text-slate-400">{SITE_CONFIG.phone}</p>
            </div>
            <div className="flex gap-4 items-start">
               <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
               <p className="text-slate-400">{SITE_CONFIG.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
         <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.</p>
         <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
         </div>
      </div>
    </footer>
  );
};
