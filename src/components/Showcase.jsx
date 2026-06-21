import React from 'react';

const Showcase = () => {
  return (
    <section id="showcase" className="py-32 relative overflow-hidden bg-black/50 border-y border-white/5">
      
      <div className="container relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-24 z-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">See It In Action</h2>
          <p className="text-muted text-lg max-w-[600px] mx-auto">
            Experience the fluidity of our applications through these interactive previews.
          </p>
        </div>

        {/* Floating Phones Container - acting as the hover group */}
        <div className="relative w-full max-w-[1000px] h-[550px] flex justify-center items-center group">
          
          {/* Phone 1 (Left) */}
          <div 
            className="z-10 transition-all duration-500 -mr-[45px] -rotate-[15deg] group-hover:rotate-0 group-hover:mx-[15px] group-hover:z-30 group-hover:-translate-y-4"
          >
            <div className="w-[200px] h-[420px] rounded-[32px] bg-[#111] border border-white/10 shadow-2xl p-2">
              <div className="w-full h-full rounded-[24px] bg-[#0A0A0A] border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
                <div className="w-16 h-16 rounded-full bg-blue-500/20 mb-4" />
                <div className="w-3/4 h-3 bg-white/10 rounded-full mb-2" />
                <div className="w-1/2 h-3 bg-white/5 rounded-full" />
              </div>
            </div>
          </div>

          {/* Phone 2 (Center - Main) */}
          <div 
            className="z-20 transition-all duration-500 group-hover:mx-[15px] group-hover:z-30 group-hover:-translate-y-4"
          >
            <div className="w-[240px] h-[500px] rounded-[36px] bg-[#0A0A0A] border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,255,255,0.05)] p-2">
              <div className="w-full h-full rounded-[28px] bg-[#000] border border-white/10 flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-5 flex justify-center z-10">
                  <div className="w-20 h-5 bg-[#0A0A0A] rounded-b-xl" />
                </div>
                {/* UI Elements */}
                <div className="mt-12 px-4">
                  <div className="w-1/2 h-6 bg-white/10 rounded-md mb-6" />
                  <div className="space-y-3">
                    <div className="w-full h-16 rounded-xl bg-white/5 border border-white/5" />
                    <div className="w-full h-16 rounded-xl bg-white/5 border border-white/5" />
                    <div className="w-full h-16 rounded-xl bg-white/5 border border-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3 (Right) */}
          <div 
            className="z-10 transition-all duration-500 -ml-[45px] rotate-[15deg] group-hover:rotate-0 group-hover:mx-[15px] group-hover:z-30 group-hover:-translate-y-4"
          >
            <div className="w-[200px] h-[420px] rounded-[32px] bg-[#111] border border-white/10 shadow-2xl p-2">
              <div className="w-full h-full rounded-[24px] bg-[#0A0A0A] border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent" />
                <div className="grid grid-cols-2 gap-3 w-full px-4 mb-4">
                  <div className="aspect-square rounded-xl bg-white/5" />
                  <div className="aspect-square rounded-xl bg-white/10" />
                  <div className="aspect-square rounded-xl bg-white/10" />
                  <div className="aspect-square rounded-xl bg-white/5" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Showcase;
