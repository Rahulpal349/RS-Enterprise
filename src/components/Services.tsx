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
    <section id="services" className="py-20 bg-slate-50 text-secondary relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Our Services</h2>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold">
            What We Offer
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl hover:border-primary transition-all group"
            >
              <div className="text-primary mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
