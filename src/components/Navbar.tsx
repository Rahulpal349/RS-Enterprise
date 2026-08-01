"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/quote" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const navClass = (scrolled || !isHome || isOpen)
    ? "bg-secondary/95 dark:bg-slate-950/95 backdrop-blur-md text-white shadow-xl border-b border-slate-800/50"
    : "bg-gradient-to-b from-slate-950/80 to-transparent text-white";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              className="flex items-center gap-1.5 text-lg sm:text-2xl font-bold tracking-tighter hover:opacity-90 transition-opacity"
            >
              <span className="text-primary text-2xl sm:text-3xl font-extrabold">RS</span> ENTERPRISE
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors text-sm font-semibold uppercase tracking-wider ${
                    isActive ? "text-primary font-bold" : "hover:text-primary text-slate-200"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <ThemeToggle />
            <Link
              href="/quote"
              className="bg-primary text-secondary px-5 py-2.5 rounded-lg font-bold hover:bg-yellow-400 active:scale-95 transition-all uppercase tracking-wider text-xs flex items-center gap-2 shadow-md"
            >
              Get a Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg text-slate-200 hover:text-primary hover:bg-slate-800/60 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-secondary/95 dark:bg-slate-950/95 border-b border-slate-800 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                      isActive 
                        ? "bg-primary/10 text-primary border-l-4 border-primary pl-3" 
                        : "text-slate-200 hover:text-primary hover:bg-slate-800/50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={16} className={`opacity-60 ${isActive ? "text-primary opacity-100" : ""}`} />
                  </Link>
                );
              })}
              <div className="pt-3">
                <Link
                  href="/quote"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full text-center bg-primary text-secondary px-6 py-3.5 rounded-xl font-extrabold hover:bg-yellow-400 active:scale-95 transition-all uppercase tracking-wider text-sm shadow-lg"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
