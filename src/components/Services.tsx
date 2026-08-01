"use client";
import { motion } from "framer-motion";
import { Home, Building2, Wrench, Ruler, Briefcase, PackageOpen } from "lucide-react";

const services = [
  {
    title: "Residential Construction",
    description: "Building beautiful and comfortable homes tailored to your lifestyle.",
    icon: <Home size={40} />
  },
  {
    title: "Commercial Construction",
    description: "Modern and functional commercial spaces for your business needs.",
    icon: <Building2 size={40} />
  },
  {
    title: "Renovation & Remodeling",
    description: "Transforming existing spaces with quality care and precision.",
    icon: <Wrench size={40} />
  },
  {
    title: "General Order Supply",
    description: "Reliable supply of construction materials and general orders.",
    icon: <PackageOpen size={40} />
  },
  {
    title: "Architectural Design",
    description: "Creative designs that bring your vision to life.",
    icon: <Ruler size={40} />
  },
  {
    title: "Project Management",
    description: "End-to-end management ensuring timely delivery.",
    icon: <Briefcase size={40} />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-900 transition-colors relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
            <div className="h-[2px] w-8 sm:w-12 bg-primary"></div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm">Our Services</h2>
            <div className="h-[2px] w-8 sm:w-12 bg-primary"></div>
          </div>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-secondary dark:text-slate-100 tracking-tight">
            What We Offer
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700/80 group"
            >
              <div className="text-primary mb-4 sm:mb-6 p-3 w-fit rounded-xl bg-slate-50 dark:bg-slate-900 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-secondary dark:text-slate-100 mb-2.5">{service.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
