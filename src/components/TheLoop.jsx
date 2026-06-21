import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Cpu, MessageSquare } from 'lucide-react';

const Step = ({ index, title, description, icon: Icon, progress }) => {
  // Reveal each step based on the overall scroll progress of the section
  const stepStart = index * 0.33;
  const stepEnd = (index + 1) * 0.33;
  
  const opacity = useTransform(progress, [stepStart, stepEnd], [0.3, 1]);
  const y = useTransform(progress, [stepStart, stepEnd], [20, 0]);
  const iconColor = useTransform(progress, [stepStart, stepEnd], ['rgba(255,255,255,0.2)', 'var(--color-cyan)']);

  return (
    <motion.div style={{ opacity, y }} className="flex items-start gap-6 relative">
      {/* Connecting Line */}
      {index < 2 && (
        <div className="absolute left-[23px] top-[48px] bottom-[-48px] w-[2px] bg-[rgba(255,255,255,0.1)]" />
      )}
      
      <motion.div 
        className="flex items-center justify-center rounded-full"
        style={{ 
          width: 48, 
          height: 48, 
          background: 'var(--bg-surface)', 
          border: '1px solid var(--color-border)',
          color: iconColor,
          zIndex: 2
        }}
      >
        <Icon size={24} />
      </motion.div>
      
      <div className="pb-12">
        <h3 className="heading-md mb-2">{title}</h3>
        <p className="text-muted text-lg">{description}</p>
      </div>
    </motion.div>
  );
};

const TheLoop = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} id="how-it-works" className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">The Loop</h2>
          <p className="text-lg text-muted">How PageCoder transforms your website into an answering machine.</p>
        </div>

        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="flex flex-col">
            <Step 
              index={0} 
              title="1. Connect Content" 
              description="Point PageCoder at your WordPress posts, pages, or custom post types. It automatically ingests and formats your content."
              icon={Database}
              progress={scrollYProgress}
            />
            <Step 
              index={1} 
              title="2. Private Processing" 
              description="Your content is chunked, embedded, and indexed locally on your server. No data ever leaves your control."
              icon={Cpu}
              progress={scrollYProgress}
            />
            <Step 
              index={2} 
              title="3. Instant Interaction" 
              description="Visitors ask questions via chat or search. The system retrieves the most relevant content and generates a precise answer."
              icon={MessageSquare}
              progress={scrollYProgress}
            />
          </div>

          {/* Visual representation */}
          <div className="relative h-[400px] flex items-center justify-center">
            <div className="glow-cyan" style={{ width: 400, height: 400, opacity: 0.1 }} />
            
            <motion.div 
              className="card absolute"
              style={{
                rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '1px dashed rgba(0, 255, 212, 0.3)',
                background: 'transparent'
              }}
            />
            
            <div className="card text-center relative z-10" style={{ background: 'var(--bg-darker)', borderColor: 'var(--color-cyan)' }}>
              <div className="text-cyan mb-2">✨ Active</div>
              <h3 className="font-semibold text-xl">The Loop</h3>
              <p className="text-sm text-muted mt-2">Continuously updating as you publish new content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheLoop;
