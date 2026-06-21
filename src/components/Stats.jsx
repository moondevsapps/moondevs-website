import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <p className="text-sm text-muted font-medium uppercase tracking-widest mb-1">Trusted</p>
            <p className="text-white/80 font-medium">Helping thousands of users stay productive every day</p>
          </div>
          
          <div className="flex items-center gap-12 text-center">
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight">100+</span>
              <span className="text-xs text-muted font-medium uppercase tracking-widest mt-1">Downloads</span>
            </div>
            
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight">4.8★</span>
              <span className="text-xs text-muted font-medium uppercase tracking-widest mt-1">Rating</span>
            </div>
            
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight">2</span>
              <span className="text-xs text-muted font-medium uppercase tracking-widest mt-1">Apps Shipped</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Stats;
