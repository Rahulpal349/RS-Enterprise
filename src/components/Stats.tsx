"use client";
import { motion } from "framer-motion";
import { CheckCircle, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: <CheckCircle size={40} />,
    value: "100+",
    label: "Projects Completed",
  },
  {
    icon: <Users size={40} />,
    value: "50+",
    label: "Happy Clients",
  },
  {
    icon: <Clock size={40} />,
    value: "10+",
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
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-yellow-500">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="text-secondary mb-4">{stat.icon}</div>
              <h4 className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">{stat.value}</h4>
              <p className="text-secondary font-semibold uppercase tracking-wide text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
