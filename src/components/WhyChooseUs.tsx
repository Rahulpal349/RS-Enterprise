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
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Why Choose Us</h2>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-secondary dark:text-slate-100">
            Reasons to Work With Us
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center group"
            >
              <div className="text-primary mb-6 p-4 rounded-full bg-slate-50 dark:bg-slate-900 group-hover:bg-primary group-hover:text-secondary transition-colors">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-secondary dark:text-slate-100 mb-3">{reason.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
