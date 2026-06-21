import React from 'react';

const DownloadSection = () => {
  return (
    <section className="relative w-full pt-20 pb-32 flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: '#0f111a' }}>
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg) scale(2) translateY(-100px)',
          transformOrigin: 'top center'
        }}
      />

      <div className="container relative z-10 flex flex-col items-center">
        
        {/* Top Button / Title */}
        <div 
          className="mb-4"
        >
          <span className="font-bold tracking-widest text-[16px]" style={{ color: '#ffb042' }}>
            TRY OUR APPS NOW
          </span>
        </div>

        {/* Subtitle */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><path d="M12 20v-8m0 0l4-4m-4 4l-4-4" /><path d="M4 12a8 8 0 0116 0" /></svg>
            <p className="font-sans text-[15px]" style={{ color: 'rgba(255,255,255,0.7)' }}>Designed to boost your daily productivity</p>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><path d="M12 20v-8m0 0l4-4m-4 4l-4-4" /><path d="M4 12a8 8 0 0116 0" /></svg>
          </div>
          <p className="font-sans text-[15px] mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Powerful tools with a minimal footprint</p>
        </div>

        {/* Floor Line */}
        <div className="absolute bottom-[80px] left-[-2000px] right-[-2000px] h-[60px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)', borderTop: '1px solid rgba(255,255,255,0.1)' }} />

        {/* 3D Icon Grid */}
        <div className="flex flex-wrap justify-center gap-6 relative" style={{ paddingBottom: '30px' }}>
          
          {/* App 1: Todo Task Manager */}
          <div className="flex flex-col items-center group relative">
            <div 
              className="relative flex items-center justify-center cursor-pointer mb-6"
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '26px',
                background: 'linear-gradient(180deg, #272a38 0%, #12141c 100%)',
                boxShadow: 'inset 0px 2px 3px rgba(255,255,255,0.1), inset 0px -2px 3px rgba(200, 160, 100, 0.4), 0px 15px 30px rgba(0,0,0,0.8), 0px 5px 10px rgba(0,0,0,0.6)',
                border: '1px solid rgba(0,0,0,0.8)',
                zIndex: 2
              }}
            >
              {/* Inner bevel ring */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderRadius: '26px',
                  border: '1px solid rgba(255,255,255,0.03)',
                  margin: '1px'
                }}
              />
              
              <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.5))' }}>
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
            <span className="text-[10px] tracking-widest font-bold uppercase" style={{ color: 'rgba(255,255,255,0.4)', zIndex: 2 }}>NEXUS TODO</span>
            
            {/* Ground shadow for the icon */}
            <div className="absolute bottom-10 w-[80%] h-[20px] bg-black/60 blur-md rounded-[50%]" style={{ zIndex: 1 }} />
          </div>

          {/* App 2: Alarm Clock */}
          <div className="flex flex-col items-center group relative">
            <div 
              className="relative flex items-center justify-center cursor-pointer mb-6"
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '26px',
                background: 'linear-gradient(180deg, #272a38 0%, #12141c 100%)',
                boxShadow: 'inset 0px 2px 3px rgba(255,255,255,0.1), inset 0px -2px 3px rgba(200, 160, 100, 0.4), 0px 15px 30px rgba(0,0,0,0.8), 0px 5px 10px rgba(0,0,0,0.6)',
                border: '1px solid rgba(0,0,0,0.8)',
                zIndex: 2
              }}
            >
              {/* Inner bevel ring */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderRadius: '26px',
                  border: '1px solid rgba(255,255,255,0.03)',
                  margin: '1px'
                }}
              />
              
              <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.5))' }}>
                <circle cx="12" cy="13" r="8" />
                <path d="M12 9v4l2 2" />
                <path d="M5 3L2 6" />
                <path d="M22 6l-3-3" />
              </svg>
            </div>
            <span className="text-[10px] tracking-widest font-bold uppercase" style={{ color: 'rgba(255,255,255,0.4)', zIndex: 2 }}>ALARM CLOCK</span>
            
            {/* Ground shadow for the icon */}
            <div className="absolute bottom-10 w-[80%] h-[20px] bg-black/60 blur-md rounded-[50%]" style={{ zIndex: 1 }} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default DownloadSection;
