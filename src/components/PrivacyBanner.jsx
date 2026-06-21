import React from 'react';
import { motion } from 'framer-motion';
import { Server, Lock, KeyRound } from 'lucide-react';

const PrivacyBanner = () => {
  return (
    <section id="privacy" className="py-24 relative overflow-hidden">
      <div className="glow-red" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw', height: '400px', opacity: 0.1 }} />
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(255, 77, 92, 0.1) 0%, rgba(26, 26, 32, 0.8) 100%)',
            borderColor: 'rgba(255, 77, 92, 0.2)'
          }}
        >
          <div className="text-center max-w-3xl mx-auto py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: 'rgba(255, 77, 92, 0.1)', color: 'var(--color-red)' }}>
              <Lock size={32} />
            </div>
            
            <h2 className="heading-lg mb-6">Truly Private AI</h2>
            <p className="text-xl text-muted mb-12">
              Stop sending your data to third-party APIs. PageCoder runs entirely on your infrastructure.
            </p>
            
            <div className="grid grid-cols-3 gap-8 text-left">
              <div className="flex flex-col items-center text-center">
                <Server size={32} className="text-cyan mb-4" />
                <h4 className="font-semibold mb-2">Self-Hosted</h4>
                <p className="text-sm text-muted">Your data never leaves your WordPress server.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <KeyRound size={32} className="text-cyan mb-4" />
                <h4 className="font-semibold mb-2">No API Keys</h4>
                <p className="text-sm text-muted">No OpenAI or Anthropic accounts required.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Lock size={32} className="text-cyan mb-4" />
                <h4 className="font-semibold mb-2">Zero Tracking</h4>
                <p className="text-sm text-muted">No cookies or third-party trackers injected.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyBanner;
