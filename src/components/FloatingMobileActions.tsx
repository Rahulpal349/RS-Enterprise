"use client";
import { Phone, MessageSquare } from "lucide-react";

export default function FloatingMobileActions() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-between gap-3 bg-secondary/95 dark:bg-slate-900/95 backdrop-blur-md p-2.5 rounded-full shadow-2xl border border-slate-700/50">
      <a
        href="tel:+918515902364"
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-secondary font-bold py-3 px-4 rounded-full text-xs uppercase tracking-wider shadow-md hover:bg-yellow-400 active:scale-95 transition-all"
      >
        <Phone size={16} className="fill-secondary" />
        Call Now
      </a>

      <a
        href="https://wa.me/918515902364"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 px-4 rounded-full text-xs uppercase tracking-wider shadow-md hover:bg-emerald-500 active:scale-95 transition-all"
      >
        <MessageSquare size={16} />
        WhatsApp
      </a>
    </div>
  );
}
