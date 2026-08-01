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
    <section id="projects" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Our Projects</h2>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-secondary dark:text-slate-100">
            Recent Work
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4 bg-slate-200">
                {/* Placeholder Image container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                  <span className="font-mono text-sm bg-white/80 px-2 py-1 rounded">{project.image}</span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-secondary dark:text-slate-200 text-center">{project.title}</h4>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary text-secondary font-bold py-3 px-8 rounded hover:bg-yellow-400 transition-colors uppercase tracking-wider text-sm">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
}
