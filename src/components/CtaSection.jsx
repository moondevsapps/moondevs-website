import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      
      {/* Intense glow for final CTA */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-30">
        <div className="w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-12 md:p-20 border border-white/10 rounded-[40px] w-full max-w-[1000px] bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden"
        >
          {/* Subtle top reflection */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Ready to simplify <br className="hidden md:block" /> your day?
          </h2>
          
          <p className="text-lg text-muted mb-10 max-w-[400px] mx-auto">
            Join thousands of users who have transformed their daily routines.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#apps" className="uiverse">
              <div className="wrapper">
                <span className="gap-2"><Download size={20} /> Explore Our Apps</span>
                <div className="circle circle-12"></div>
                <div className="circle circle-11"></div>
                <div className="circle circle-10"></div>
                <div className="circle circle-9"></div>
                <div className="circle circle-8"></div>
                <div className="circle circle-7"></div>
                <div className="circle circle-6"></div>
                <div className="circle circle-5"></div>
                <div className="circle circle-4"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-1"></div>
              </div>
            </a>
            <a href="mailto:atul1995og@gmail.com" className="btn btn-glass gap-2 text-lg px-8 py-4">
              <Mail size={20} /> Contact Us
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CtaSection;
