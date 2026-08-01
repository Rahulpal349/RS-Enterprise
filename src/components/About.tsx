"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[250px] sm:h-[380px] lg:h-[580px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800"
          >
            {/* Using standard img for placeholder. In real app, upload about-image.jpg to public folder */}
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-400 flex-col p-4 text-center">
              <span className="mb-2 text-xs sm:text-sm font-semibold">Image Placeholder:</span>
              <span className="font-mono bg-white dark:bg-slate-800 dark:text-slate-200 px-3 py-1 rounded text-xs sm:text-sm shadow-sm">about-image.jpg</span>
              <span className="text-xs mt-2 opacity-80">Upload image to public/ directory</span>
            </div>
            {/* Example with Next.js Image once image exists: */}
            {/* <Image src="/about-image.jpg" alt="About RS Enterprise" fill className="object-cover" /> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 sm:w-12 bg-primary"></div>
              <h2 className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm">About Us</h2>
            </div>
            
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-secondary dark:text-slate-100 mb-4 sm:mb-6 leading-tight tracking-tight">
              Building Trust.<br/>
              Delivering Quality.<br/>
              Supplying Excellence.
            </h3>
            
            <div className="space-y-4 sm:space-y-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                <strong>R. S. Enterprise</strong> is a trusted Civil Construction and General Order Supplier based in Andal Gram, Durgapur, West Bengal. Founded by Mr. Subrata Gorai, an entrepreneur committed to quality and customer satisfaction, we provide reliable construction solutions and timely supply services for residential, commercial, and industrial projects.
              </p>
              <p>
                With a strong focus on quality workmanship, transparent business practices, and on-time project delivery, we have built lasting relationships with our clients. Whether it&apos;s civil construction, renovation, building maintenance, or supplying construction materials and general orders, our experienced team ensures every project is completed with precision, safety, and professionalism.
              </p>
              <p>
                At R. S. Enterprise, we believe that every successful project begins with trust, dedication, and attention to detail. Our mission is to deliver cost-effective, durable, and high-quality solutions that exceed customer expectations while contributing to the growth of our communities.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
