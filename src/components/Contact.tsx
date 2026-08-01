"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 sm:w-12 bg-primary"></div>
              <h2 className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm">Let&apos;s Build Something Great</h2>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary dark:text-slate-100 mb-4 sm:mb-6 tracking-tight">
              GET A QUOTE
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-8 max-w-md leading-relaxed">
              Have a project in mind? Share your requirements with us and we&apos;ll get back to you with the best solution and quotation.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3.5 sm:gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors">
                <div className="p-3 bg-primary/10 dark:bg-slate-900 rounded-xl text-primary shadow-sm flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary dark:text-slate-100 text-base sm:text-lg">Phone & WhatsApp</h4>
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-slate-600 dark:text-slate-400 text-sm mt-0.5">
                    <a href="tel:+918515902364" className="hover:text-primary font-semibold transition-colors">
                      Call: +91 8515902364
                    </a>
                    <span className="hidden sm:inline text-slate-400">•</span>
                    <a href="https://wa.me/918515902364" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 font-semibold transition-colors">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors">
                <div className="p-3 bg-primary/10 dark:bg-slate-900 rounded-xl text-primary shadow-sm flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary dark:text-slate-100 text-base sm:text-lg">Email</h4>
                  <a href="mailto:rsenterpris85@gmail.com" className="text-slate-600 dark:text-slate-400 text-sm hover:text-primary transition-colors block mt-0.5">
                    rsenterpris85@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors">
                <div className="p-3 bg-primary/10 dark:bg-slate-900 rounded-xl text-primary shadow-sm flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary dark:text-slate-100 text-base sm:text-lg">Address</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-0.5 leading-relaxed">
                    Andal Gram, Dhubchururia, Durgapur,<br/>
                    Paschim Bardhaman - 713321
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors">
                <div className="p-3 bg-primary/10 dark:bg-slate-900 rounded-xl text-primary shadow-sm flex-shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary dark:text-slate-100 text-base sm:text-lg">Business Hours</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-0.5 leading-relaxed">
                    Mon - Sat: 9:00 AM - 6:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-slate-800/90 p-5 sm:p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700/80"
          >
            <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs sm:text-sm font-bold text-secondary dark:text-slate-300 mb-1.5 uppercase tracking-wider">Your Name *</label>
                <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-secondary dark:text-slate-100 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-secondary dark:text-slate-300 mb-1.5 uppercase tracking-wider">Phone Number *</label>
                <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-secondary dark:text-slate-100 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-secondary dark:text-slate-300 mb-1.5 uppercase tracking-wider">Email Address *</label>
                <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-secondary dark:text-slate-100 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-secondary dark:text-slate-300 mb-1.5 uppercase tracking-wider">Subject *</label>
                <input type="text" placeholder="Enter the subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-secondary dark:text-slate-100 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-secondary dark:text-slate-300 mb-1.5 uppercase tracking-wider">Project Description *</label>
                <textarea rows={4} placeholder="Describe your project details..." className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-secondary dark:text-slate-100 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"></textarea>
              </div>

              <button className="w-full bg-primary text-secondary font-extrabold py-3.5 sm:py-4 rounded-xl hover:bg-yellow-400 active:scale-95 transition-all uppercase tracking-wider text-xs sm:text-sm shadow-lg">
                Send Quote Request
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-3">
                🔒 Your information is confidential & safe with us.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
