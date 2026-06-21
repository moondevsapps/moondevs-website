import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Zap, Shield, WifiOff, Cloud, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: <Palette size={24} className="text-pink-400" />,
    title: 'Beautiful Design',
    desc: 'Every pixel is thoughtfully placed to create an effortless experience.',
    colSpan: 'md:col-span-1',
    glow: 'from-pink-500/20 to-purple-500/20'
  },
  {
    icon: <Zap size={24} className="text-yellow-400" />,
    title: 'Lightning Fast',
    desc: 'Optimized for speed and minimal battery drain on all devices.',
    colSpan: 'md:col-span-1',
    glow: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    icon: <Shield size={24} className="text-green-400" />,
    title: 'Privacy First',
    desc: 'Your data stays yours. No tracking, no invasive permissions.',
    colSpan: 'md:col-span-1',
    glow: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: <WifiOff size={24} className="text-blue-400" />,
    title: 'Offline Support',
    desc: 'Full functionality even when you drop connection.',
    colSpan: 'md:col-span-1',
    glow: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: <Cloud size={24} className="text-indigo-400" />,
    title: 'Cloud Sync',
    desc: 'Seamlessly sync your data across all your Android devices.',
    colSpan: 'md:col-span-1',
    glow: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    icon: <RefreshCw size={24} className="text-teal-400" />,
    title: 'Regular Updates',
    desc: 'Constant improvements and new features based on user feedback.',
    colSpan: 'md:col-span-1',
    glow: 'from-teal-500/20 to-cyan-500/20'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container relative z-10 max-w-[1200px] mx-auto">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Why MoonDevs?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl max-w-[600px] mx-auto font-light"
          >
            We don't just build apps. We craft premium experiences that respect your time, battery, and privacy.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-[32px] p-8 flex flex-col group transition-all duration-500 ${feature.colSpan} bg-[#0c0c0c] border border-white/5 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1`}
            >
              {/* Glow overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              {/* Massive background icon */}
              <div className="absolute -right-8 -bottom-8 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-500 transform group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
                {React.cloneElement(feature.icon, { size: feature.large ? 240 : 160, className: 'text-white' })}
              </div>

              {/* Inner content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {feature.icon}
                </div>
                <div className={feature.large ? "mt-auto pt-12" : "mt-auto pt-8"}>
                  <h3 className={`${feature.large ? 'text-3xl' : 'text-xl'} font-bold mb-3 text-white tracking-wide`}>{feature.title}</h3>
                  <p className={`${feature.large ? 'text-lg' : 'text-sm'} text-white/50 leading-relaxed font-light max-w-[90%]`}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
