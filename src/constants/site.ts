import { 
  Stethoscope, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Search, 
  Smile,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";

export const SITE_CONFIG = {
  name: "Fine Dentistry",
  fullName: "Fine Dentistry of Orlando",
  city: "Orlando",
  phone: "(407) 843-0504",
  email: "frontdesk@finedentistryorlando.com",
  address: "931 S Orange Ave, Orlando, FL 32806",
  hours: [
    { day: "Monday", hours: "8:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 5:00 PM" },
    { day: "Friday", hours: "8:00 AM - 2:00 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/FineDentistryOrlando/", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/finedentistryorlando/", icon: Instagram },
    { name: "Twitter", href: "#", icon: Twitter },
  ],
};

export const MENU_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    title: "Teeth Cleaning",
    description: "Professional dental cleanings to maintain optimal oral health and prevent future issues.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacement solutions for a confident, fully functional smile.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Root Canal",
    description: "Painless procedures designed to save your natural teeth and alleviate dental discomfort.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Cosmetic Dentistry",
    description: "From veneers to bonding, we enhance your smile's aesthetics with precise, modern techniques.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Invisalign",
    description: "Clear, comfortable aligners to straighten your teeth discretely without traditional braces.",
    icon: Smile,
    image: "https://images.unsplash.com/photo-1583307567825-4c6e9a6e1470?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Oral Exams",
    description: "Comprehensive check-ups to catch potential issues early and provide personalized care plans.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
  },
];

export const TESTIMONIALS = [
  {
    name: "Michael R.",
    quote: "The best dental experience I've ever had. Dr. Awan and the team are incredibly professional and caring. The office is beautiful and uses top-tier technology.",
    rating: 5,
    role: "Local Business Owner",
    image: "https://i.pravatar.cc/150?u=michael",
  },
  {
    name: "Sarah J.",
    quote: "I was always nervous about the dentist, but Fine Dentistry changed that. They explained everything clearly and the pain control was perfect.",
    rating: 5,
    role: "Teacher",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "David L.",
    quote: "Highly recommend for anyone in Downtown Orlando. Convenient location, friendly staff, and very flexible with my schedule.",
    rating: 5,
    role: "Resident",
    image: "https://i.pravatar.cc/150?u=david",
  },
];

export const DOCTORS = [
  {
    name: "Dr. Aileen Trivedi",
    specialty: "Founder & Lead Dentist",
    image: "input_file_0.png",
    description: "Bringing over 20 years of expertise and a passion for artistic clinical excellence to the Orlando community.",
  },
  {
    name: "The Fine Dentistry Team",
    specialty: "Dedicated Professionals",
    image: "input_file_1.png",
    description: "Our diverse and skilled team works together to provide a seamless and comfortable patient experience.",
  },
];

export const FAQS = [
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major PPO insurance plans. Our team can help you maximize your benefits and handle all the paperwork.",
  },
  {
    question: "Is treatment painful?",
    answer: "We prioritize your comfort. We use advanced local anesthesia and modern techniques to ensure your experience is virtually pain-free.",
  },
  {
    question: "Do you offer emergency care?",
    answer: "Yes, we provide same-day emergency appointments for established and new patients whenever possible. Call us immediately if you have a dental emergency.",
  },
  {
    question: "How often should I visit?",
    answer: "For most patients, we recommend a professional cleaning and examination every six months to maintain optimal health.",
  },
];
