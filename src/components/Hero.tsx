"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')", // Ensure hero-bg.jpg exists in public folder
          backgroundColor: "#1e293b" // Fallback color
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div> {/* Dark Overlay */}
        {/* Gradient Mask to blend with the next section (slate-50) */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
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
          
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            RS ENTERPRISE is a trusted construction company delivering high-quality building solutions for homes, offices, and commercial spaces.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
