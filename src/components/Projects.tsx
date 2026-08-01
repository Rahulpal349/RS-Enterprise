"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Residential Building", image: "project-1.jpg" },
  { title: "Office Building", image: "project-2.jpg" },
  { title: "Interior Work", image: "project-3.jpg" },
  { title: "Renovation Project", image: "project-4.jpg" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
            <div className="h-[2px] w-8 sm:w-12 bg-primary"></div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm">Our Projects</h2>
            <div className="h-[2px] w-8 sm:w-12 bg-primary"></div>
          </div>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-secondary dark:text-slate-100 tracking-tight">
            Recent Work
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800"
            >
              <div className="relative h-48 sm:h-64 w-full rounded-xl overflow-hidden mb-3 bg-slate-200 dark:bg-slate-800">
                {/* Placeholder Image container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                  <span className="font-mono text-xs sm:text-sm bg-white/80 dark:bg-slate-900/80 dark:text-slate-200 px-2 py-1 rounded shadow-sm">{project.image}</span>
                </div>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-secondary dark:text-slate-200 text-center py-1">{project.title}</h4>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <button className="w-full sm:w-auto bg-primary text-secondary font-extrabold py-3.5 px-8 rounded-xl hover:bg-yellow-400 active:scale-95 transition-all uppercase tracking-wider text-xs sm:text-sm shadow-md">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
}
