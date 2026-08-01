import Link from "next/link";
const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative text-white pt-16 pb-8 border-t-[10px] border-primary overflow-hidden">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/footer-bg.jpg')", // Ensure footer-bg.jpg exists in public folder
          backgroundColor: "#1e293b" // Fallback color
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80"></div> {/* Dark Overlay for text readability */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter mb-4">
              <span className="text-primary text-3xl">RS</span> ENTERPRISE
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              We are committed to building strong relationships and delivering exceptional construction services.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><FacebookIcon size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><InstagramIcon size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><TwitterIcon size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/quote" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Renovation & Remodeling</li>
              <li>Architectural Design</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>+91 8515902364</li>
              <li>rsenterpris85@gmail.com</li>
              <li>Andal Gram, Dhubchururia,<br/>Durgapur, Paschim Bardhaman<br/>West Bengal, 713321</li>
              <li className="pt-2 text-primary">GSTN: 19AKFR3327G1ZO</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} RS ENTERPRISE. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision & care.</p>
        </div>

      </div>
    </footer>
  );
}
