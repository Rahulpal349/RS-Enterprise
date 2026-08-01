"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Let&apos;s Build Something Great</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              GET A QUOTE
            </h3>
            
            <p className="text-slate-600 text-lg mb-10 max-w-md">
              Have a project in mind? Share your requirements with us and we&apos;ll get back to you with the best solution and quotation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full text-primary shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Phone & WhatsApp</h4>
                  <p className="text-slate-600">
                    <a href="https://wa.me/918515902364" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                      +91 8515902364
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full text-primary shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Email</h4>
                  <p className="text-slate-600">rsenterpris85@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full text-primary shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Address</h4>
                  <p className="text-slate-600">Andal Gram, Dhubchururia, Durgapur,<br/>Paschim Bardhaman - 713321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full text-primary shadow-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Business Hours</h4>
                  <p className="text-slate-600">Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-xl border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-secondary mb-2">Your Name *</label>
                <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-bold text-secondary mb-2">Phone Number *</label>
                <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-bold text-secondary mb-2">Email Address *</label>
                <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-bold text-secondary mb-2">Subject *</label>
                <input type="text" placeholder="Enter the subject" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-bold text-secondary mb-2">Project Description *</label>
                <textarea rows={4} placeholder="Describe your project details..." className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"></textarea>
              </div>

              <button className="w-full bg-primary text-secondary font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors uppercase tracking-wider">
                Send Quote Request
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-4">
                🔒 Your information is safe with us.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
