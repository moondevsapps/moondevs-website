import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, AlarmClock, Sparkles, Dumbbell, Download, Clock } from 'lucide-react';

const apps = [
  {
    id: 'nexus-todo',
    name: 'Nexus Todo',
    desc: 'A powerful task manager with built-in Pomodoro, analytics, and calendar reminders to keep you focused.',
    tag: 'Productivity',
    icon: <CheckSquare size={32} className="text-white" />,
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'alarm-me',
    name: 'Alarm Me',
    desc: 'A smart alarm app that forces you out of bed with math problems, photo missions, and challenges.',
    tag: 'Lifestyle',
    icon: <AlarmClock size={32} className="text-white" />,
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 'hair-care-ai',
    name: 'Hair Care AI',
    desc: 'An AI assistant that helps diagnose hair problems and offers personalized care tutorials.',
    tag: 'Health & Beauty',
    icon: <Sparkles size={32} className="text-white" />,
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: 'gym-ai',
    name: 'Gym.ai',
    desc: 'Your AI personal trainer that plans your daily workouts, tracks your sets, and guides your exercises.',
    tag: 'Fitness',
    icon: <Dumbbell size={32} className="text-white" />,
    color: 'from-green-500/20 to-emerald-500/20'
  }
];

const AppsSection = () => {
  return (
    <section id="apps" className="py-24 relative overflow-hidden">
      
      {/* Background Glows for Glassmorphism */}
      <div className="absolute top-1/2 left-[10%] w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-[10%] w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="container relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Apps</h2>
          <p className="text-muted text-lg max-w-[600px] mx-auto">
            Beautifully crafted applications designed to seamlessly integrate into your daily workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {apps.map((app, index) => (
            <motion.div 
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-[32px] group cursor-pointer app-card"
            >
              {/* Inner Card Content */}
              <div className={`relative z-10 h-full bg-[#111111] border border-white/10 group-hover:border-transparent transition-all duration-500 rounded-[32px] p-8 flex flex-col ${
                index >= 1 ? 'blur-[8px] opacity-60 group-hover:blur-none group-hover:opacity-100' : ''
              }`}>
                {/* Top Row: Icon and Tag */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white transition-colors">
                    {app.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60">
                    {app.tag}
                  </span>
                </div>
                
                {/* Middle Row: Content */}
                <div className="flex-1 mb-8">
                  <h3 className="text-xl font-bold mb-3">{app.name}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {app.desc}
                  </p>
                </div>

                {/* Bottom Row: Button */}
              <div className="btn-get-app-container mt-auto">
                <button className="btn-get-app-real"></button>
                <div className="btn-get-app-bg">
                  <div className="btn-get-app-spin btn-get-app-spin-blur"></div>
                  <div className="btn-get-app-spin btn-get-app-spin-intense"></div>
                  <div className="btn-get-app-spin btn-get-app-spin-inside"></div>
                  <div className="btn-get-app-content">
                    <Clock size={16} /> Coming Soon
                  </div>
                </div>
              </div>
              </div>

              {/* In Development Overlay */}
              {index >= 1 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                  <span className="bg-black/60 backdrop-blur-md text-white font-bold px-4 py-2 rounded-full border border-white/10 tracking-widest uppercase text-xs shadow-xl">
                    In Development
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AppsSection;
