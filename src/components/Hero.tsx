"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundColor: "#0f172a"
        }}
      >
        <div className="absolute inset-0 bg-slate-950/75 sm:bg-slate-900/70"></div>
        {/* Gradient Mask to blend with the next section */}
        <div className="absolute bottom-0 left-0 w-full h-20 sm:h-28 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold tracking-widest uppercase mb-4 text-xs sm:text-sm backdrop-blur-sm">
            <span>Building Tomorrow</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] mb-4 sm:mb-6 tracking-tight">
            STRONG FOUNDATIONS<br />
            <span className="text-primary">FOR BETTER TOMORROWS</span>
          </h1>
          
          <p className="text-slate-200 font-normal text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            RS ENTERPRISE is a trusted civil construction & general order supplier delivering high-quality building solutions for homes, commercial spaces, and infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-extrabold px-6 py-3.5 sm:py-4 rounded-xl hover:bg-yellow-400 active:scale-95 transition-all uppercase tracking-wider text-sm shadow-xl text-center"
            >
              <span>Request a Quote</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+918515902364"
              className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-white font-semibold px-6 py-3.5 sm:py-4 rounded-xl border border-slate-700 active:scale-95 transition-all uppercase tracking-wider text-sm text-center backdrop-blur-sm"
            >
              <span>Call Us Directly</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
