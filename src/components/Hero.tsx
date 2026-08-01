"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')", // Ensure hero-bg.jpg exists in public folder
          backgroundColor: "#1e293b" // Fallback color
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div> {/* Overlay */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-primary font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            We Build
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            STRONG FOUNDATIONS<br />
            <span className="text-primary">FOR BETTER TOMORROWS</span>
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            RS ENTERPRISE is a trusted construction company delivering high-quality building solutions for homes, offices, and commercial spaces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#services" 
              className="bg-primary text-secondary font-bold py-4 px-8 rounded flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors uppercase tracking-wider text-sm"
            >
              Our Services
              <ArrowRight size={18} />
            </Link>
            
            <Link 
              href="/quote" 
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded flex items-center justify-center gap-2 hover:bg-white hover:text-secondary transition-colors uppercase tracking-wider text-sm"
            >
              Get a Quote
              <FileText size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
