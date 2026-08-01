"use client";
import { motion } from "framer-motion";
import { CheckCircle, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: <CheckCircle size={40} />,
    value: "10+",
    label: "Projects Completed",
  },
  {
    icon: <Users size={40} />,
    value: "10+",
    label: "Happy Clients",
  },
  {
    icon: <Clock size={40} />,
    value: "2+",
    label: "Years of Experience",
  },
  {
    icon: <Award size={40} />,
    value: "100%",
    label: "Quality Commitment",
  }
];

export default function Stats() {
  return (
    <section className="bg-primary py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4 sm:p-6 bg-yellow-400/50 rounded-2xl border border-yellow-500/40 shadow-sm"
            >
              <div className="text-secondary mb-2 sm:mb-3 p-2 bg-yellow-300/40 rounded-xl">{stat.icon}</div>
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary mb-1 tracking-tight">{stat.value}</h4>
              <p className="text-secondary font-bold uppercase tracking-wider text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
