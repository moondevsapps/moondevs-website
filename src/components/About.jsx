import React from 'react';
import { motion } from 'framer-motion';
import { Code, Gamepad2, Box, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About the Founder</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="relative rounded-[40px] bg-[#0a0a0a] border border-white/10 p-8 md:p-16 overflow-hidden group">
            {/* Animated Gradient Background inside card */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-transparent rounded-full blur-[80px] opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start">
              
              {/* Left Column: Visual / Badges */}
              <div className="w-full md:w-1/3 lg:w-1/5 flex flex-col gap-6 shrink-0">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/20 mb-4 border border-white/20 overflow-hidden">
                  <img src="/profile.jpg.jpeg" alt="Atul - Founder of MoonDevs" className="w-full h-full object-cover scale-[2.5] origin-[50%_65%]" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full transition-colors hover:bg-white/10 w-fit">
                    <Code size={12} className="text-cyan-400" />
                    <span className="font-medium text-xs tracking-widest uppercase">Developer</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full transition-colors hover:bg-white/10 w-fit">
                    <Gamepad2 size={12} className="text-purple-400" />
                    <span className="font-medium text-xs tracking-widest uppercase">Game Designer</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full transition-colors hover:bg-white/10 w-fit">
                    <Box size={12} className="text-pink-400" />
                    <span className="font-medium text-xs tracking-widest uppercase">3D Generalist</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Text */}
              <div className="w-full md:w-2/3 lg:w-4/5 flex flex-col gap-8 text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                  Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Atul</span>,<br/> the creator of <span className="text-white">MoonDevs</span>.
                </h2>
                
                <div className="space-y-4 text-lg text-muted font-light leading-relaxed">
                  <p>
                    I'm a developer, game designer, and 3D generalist who loves building digital products that solve real problems.
                  </p>
                  <p>
                    After years of trying countless apps, I realized that many were either too complicated or missing features people actually needed. Instead of waiting for someone else to build better solutions, I decided to create them myself. What began as personal projects evolved into <strong className="text-white font-medium">MoonDevs</strong>—a place where I design and develop applications focused on simplicity, productivity, and everyday usefulness.
                  </p>
                  <p>
                    Every app I create is built with care, simplicity, and a focus on real users—not trends. My goal is simple: to build tools that help people save time, stay organized, and make life a little easier.
                  </p>
                  <p>
                    When I'm not coding, you'll usually find me exploring game design, creating 3D art, or experimenting with new ideas and technologies.
                  </p>
                  <p className="text-xl font-medium text-white/90 pt-4 flex items-center gap-3">
                    <Sparkles className="text-yellow-400" size={24} /> Thanks for stopping by.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
