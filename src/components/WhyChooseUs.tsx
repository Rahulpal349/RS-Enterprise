"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Package, Clock, IndianRupee, HeartHandshake, ShieldAlert, MapPin } from "lucide-react";

const reasons = [
  {
    title: "Quality Construction Services",
    description: "We deliver superior quality in every project we undertake.",
    icon: <ShieldCheck size={32} />
  },
  {
    title: "Experienced & Skilled Team",
    description: "Our dedicated professionals ensure precision and perfection.",
    icon: <Users size={32} />
  },
  {
    title: "Reliable General Order Supply",
    description: "All types of general orders and materials under one roof.",
    icon: <Package size={32} />
  },
  {
    title: "Timely Project Completion",
    description: "We value time and deliver projects as promised.",
    icon: <Clock size={32} />
  },
  {
    title: "Competitive Pricing",
    description: "Transparent pricing with no hidden costs.",
    icon: <IndianRupee size={32} />
  },
  {
    title: "Customer-First Approach",
    description: "Customer satisfaction and happiness is our priority.",
    icon: <HeartHandshake size={32} />
  },
  {
    title: "Safe & Professional Work Practices",
    description: "We prioritize safety in every construction and supply process.",
    icon: <ShieldAlert size={32} />
  },
  {
    title: "Trusted Local Service in West Bengal",
    description: "Deep roots and commitment to the growth of our communities.",
    icon: <MapPin size={32} />
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
            <div className="h-[2px] w-8 sm:w-12 bg-primary"></div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm">Why Choose Us</h2>
            <div className="h-[2px] w-8 sm:w-12 bg-primary"></div>
          </div>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-secondary dark:text-slate-100 tracking-tight">
            Reasons to Work With Us
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700/80 flex flex-col items-center text-center group"
            >
              <div className="text-primary mb-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 group-hover:bg-primary group-hover:text-secondary transition-colors">
                {reason.icon}
              </div>
              <h4 className="text-base sm:text-lg font-bold text-secondary dark:text-slate-100 mb-2">{reason.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
