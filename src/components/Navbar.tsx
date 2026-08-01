"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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

  const isHome = pathname === "/";
  const navClass = (scrolled || !isHome)
    ? "bg-secondary dark:bg-slate-950 text-white shadow-lg"
    : "bg-transparent text-white";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
              <span className="text-primary text-3xl">RS</span> ENTERPRISE
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/quote"
              className="bg-primary text-secondary px-6 py-2 rounded font-bold hover:bg-yellow-400 transition-colors uppercase tracking-wider text-sm flex items-center gap-2"
            >
              Get a Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-primary">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="md:hidden bg-secondary dark:bg-slate-900"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-secondary-dark"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/quote"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary text-secondary px-6 py-3 rounded font-bold hover:bg-yellow-400 transition-colors uppercase"
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
