import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const BottomNav = ({ active }) => {
  const navIcons = [
    { id: 'home', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
    { id: 'calendar', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><text x="12" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" strokeWidth="0.5" fill="currentColor">20</text></svg> },
    { id: 'tasks', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg> },
    { id: 'activity', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
    { id: 'timer', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><line x1="10" x2="14" y1="2" y2="2"/></svg> }
  ];

  return (
    <div className="h-16 bg-[#0B0D17]/95 backdrop-blur-md flex items-center justify-around px-3 z-10 absolute bottom-0 inset-x-0 w-full border-t border-white/5 pb-2 pt-1">
      {navIcons.map((item) => {
        const isActive = active === item.id;
        return (
          <div key={item.id} className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all ${isActive ? 'bg-[#6366f1] text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] -translate-y-1' : 'text-white/30 hover:text-white hover:bg-white/5'}`}>
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};
const InteractiveCalendarScreen = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  const tasks = [
    { title: "Prepare Client Presentation", time: "15min", date: "Jun 21, 2026", tags: [{ text: "Work", color: "red" }, { text: "High", color: "red" }] },
    { title: "Fix Navigation Bug", time: "30min", date: "Jun 21, 2026", tags: [{ text: "Work", color: "red" }, { text: "Medium", color: "orange" }] },
    { title: "Review Design System", time: "30min", date: "Jun 21, 2026", tags: [{ text: "Work", color: "red" }, { text: "High", color: "red" }] }
  ];

  return (
    <div className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] bg-[#0B0D17] rounded-[32px] overflow-hidden flex flex-col z-0 font-sans text-white">
      <div className="h-10 w-full shrink-0 bg-[#0B0D17] z-20 absolute top-0 left-0"></div>

      <div className="px-5 pb-2 shrink-0 flex items-center justify-between mt-10 relative z-10">
        <div className="w-7 h-7 rounded-full bg-[#6366f1] flex items-center justify-center cursor-pointer hover:bg-[#4f46e5] transition-colors">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        </div>
        <h2 className="text-[13px] font-semibold">Calendar</h2>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:rotate-90 transition-transform duration-300"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-20 pt-2 relative" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        <div className="bg-[#151828] rounded-[24px] p-4 border border-white/5 mb-5 hover:border-white/10 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold">June 2026</span>
            <div className="flex gap-4 text-[#6366f1]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:-translate-x-0.5 transition-transform"><polyline points="15 18 9 12 15 6"/></svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:translate-x-0.5 transition-transform"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center mb-1">
            {days.map((d, i) => (
              <div key={`d-${i}`} className="text-[9px] text-white/40">{d}</div>
            ))}
            
            <div className="w-6 h-6"></div>
            
            {dates.map(date => (
              <div key={date} className="flex justify-center items-center">
                <div className={`w-[22px] h-[22px] flex items-center justify-center rounded-full text-[10px] cursor-pointer relative ${date === 21 ? 'bg-[#6366f1] text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'text-white/80 hover:bg-white/10 transition-colors'}`}>
                  {date}
                  {date === 21 && <div className="absolute bottom-1 w-0.5 h-0.5 bg-white rounded-full"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-[13px] font-semibold">Tasks for Jun 21</h3>
          <div className="w-5 h-5 rounded-full bg-[#6366f1] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_10px_rgba(99,102,241,0.4)]">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
        </div>

        <div className="space-y-2.5">
          {tasks.map((task, i) => (
            <div key={i} className="bg-[#151828] rounded-[16px] p-3 border border-white/5 cursor-pointer hover:border-[#6366f1]/30 hover:bg-[#1A1D36] transition-all group">
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 w-3 h-3 rounded-sm border border-white/20 flex-shrink-0 group-hover:border-[#6366f1]/50 transition-colors"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <h4 className="text-[10px] font-medium text-white/90 group-hover:text-[#6366f1] transition-colors">{task.title}</h4>
                    <div className="flex gap-1">
                      {task.tags.map((tag, j) => (
                        <span key={j} className={`text-[7px] px-1.5 py-0.5 rounded flex items-center gap-0.5 ${tag.color === 'red' ? 'text-red-400 bg-red-400/10' : 'text-orange-400 bg-orange-400/10'}`}>
                          <span className={`w-1 h-1 rounded-full ${tag.color === 'red' ? 'bg-red-400' : 'bg-orange-400'}`}></span>
                          {tag.text}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[8px] text-white/30 font-medium">
                    <span className="flex items-center gap-1">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      Task
                    </span>
                    <span className="bg-[#6366f1]/10 text-[#6366f1] px-1 rounded">{task.time}</span>
                    <span className="flex items-center gap-1 border-l border-white/10 pl-3">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {task.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="calendar" />
    </div>
  );
};

const InteractiveTimerScreen = ({ isHovered }) => {
  const [time, setTime] = React.useState(3);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(true);
  
  React.useEffect(() => {
    let timer;
    if (isHovered && !isCompleted && isPlaying) {
      timer = setInterval(() => {
        setTime(prev => {
          if (prev <= 1) {
            setIsCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (!isHovered) {
      setTime(3);
      setIsCompleted(false);
    }
    return () => clearInterval(timer);
  }, [isHovered, isCompleted, isPlaying]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  const totalTime = 10;
  const fractionRemaining = time / totalTime;
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - fractionRemaining);

  return (
    <div className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] bg-[#0B0D17] rounded-[32px] overflow-hidden flex flex-col z-0 font-sans text-white">
      <div className="h-10 w-full shrink-0"></div>

      <div className="px-5 pb-2 shrink-0 flex items-center justify-between z-10">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:text-[#6366f1] transition-colors"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        <h2 className="text-xs font-semibold truncate px-2">Complete the Website Design</h2>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:opacity-80 transition-opacity"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      </div>

      {isCompleted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center justify-center px-6 text-center z-10"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="w-24 h-24 rounded-full bg-[#6366f1]/20 flex items-center justify-center relative mb-6 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            <div className="absolute inset-0 rounded-full bg-[#6366f1] opacity-20 animate-ping" />
            <motion.svg 
              width="48" height="48" viewBox="0 0 24 24" 
              fill="none" stroke="#6366f1" strokeWidth="3" 
              strokeLinecap="round" strokeLinejoin="round"
            >
              <motion.polyline 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                points="20 6 9 17 4 12" 
              />
            </motion.svg>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="text-white text-xl font-bold tracking-wide"
          >
            Session Complete
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="text-white/50 text-[11px] mt-2 leading-relaxed"
          >
            Great job! You've stayed focused and completed your task.
          </motion.p>
        </motion.div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center relative mt-2 z-10">
          <div className="relative w-[220px] h-[220px] flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <circle cx="110" cy="110" r="90" fill="transparent" stroke="#1A1D36" strokeWidth="12" />
              <circle 
                cx="110" cy="110" r="90" 
                fill="transparent" 
                stroke="#6366f1" 
                strokeWidth="12" 
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-linear"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-bold tracking-wider mb-1 font-mono">{timeString}</span>
              <span className="text-[10px] text-white/40 mb-3">of 00:10</span>
              <span className="text-[10px] text-[#6366f1] font-medium tracking-wide">Focus Session</span>
            </div>
          </div>

          <div className="flex items-center justify-between w-full px-8 mt-6">
            <div className="flex flex-col items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span className="text-[9px] text-white/50 mb-1">Focus Duration</span>
              <span className="text-[11px] text-[#6366f1] font-semibold">15 min</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
              <span className="text-[9px] text-white/50 mb-1">Short Break</span>
              <span className="text-[11px] text-[#6366f1] font-semibold">5 min</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => { setTime(3); setIsCompleted(false); }}>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 group-hover:border-white/20 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              </div>
              <span className="text-[9px] text-white/60">Reset</span>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 group-hover:border-white/20 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
              </div>
              <span className="text-[9px] text-white/60">Break</span>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => setIsPlaying(!isPlaying)}>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 group-hover:border-white/20 transition-all text-[#6366f1]">
                {isPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                )}
              </div>
              <span className="text-[9px] text-[#6366f1]">{isPlaying ? 'Pause' : 'Play'}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full px-5 mt-6 mb-2">
            <button className="flex-1 py-2.5 rounded-xl border border-red-500/30 text-red-400 text-xs font-medium flex items-center justify-center gap-2 hover:bg-red-500/10 transition-colors">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-sm"></div> Stop
            </button>
            <button className="flex-[1.5] py-2.5 rounded-xl bg-[#6366f1] text-white text-xs font-medium flex items-center justify-center gap-2 hover:bg-[#4f46e5] transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Complete
            </button>
          </div>
        </div>
      )}

      <BottomNav active="timer" />
    </div>
  );
};

const InteractiveTaskScreen = () => {
  const tasks = [
    { title: "Design the Landing Page", desc: "Create a clean and modern landing page for the new website.", time: "30min", date: "Jun 21, 2026", tag: "High", tagColor: "red" },
    { title: "Prepare Project Presentation", desc: "Finalize slides and key points for the client presentation.", time: "30min", date: "Jun 21, 2026", tag: "High", tagColor: "red" },
    { title: "Review Marketing Strategy", desc: "Go through the marketing plan and suggest improvements.", time: "30min", date: "Jun 21, 2026", tag: "Medium", tagColor: "orange" },
    { title: "Update Website Content", desc: "Update the latest content and fix broken links.", time: "30min", date: "Jun 21, 2026", tag: "Medium", tagColor: "orange" }
  ];

  return (
    <div className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] bg-[#0B0D17] rounded-[32px] overflow-hidden flex flex-col z-0 font-sans">
      <div className="h-10 w-full shrink-0 bg-[#0B0D17] z-20 absolute top-0 left-0"></div>
      
      <div className="px-5 pb-3 shrink-0 mt-12 relative z-10">
        <h2 className="text-white text-xl font-bold tracking-wide">Tasks</h2>
        <div className="flex items-center gap-2 mt-4 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="px-3 py-1.5 rounded-full border border-white/10 text-[9px] text-white/50 whitespace-nowrap cursor-pointer hover:bg-white/5 transition-colors">Due</div>
          <div className="px-3 py-1.5 rounded-full bg-[#6366f1] text-white text-[9px] font-medium flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-[0_0_10px_rgba(99,102,241,0.4)]">
            Upcoming <span className="bg-white/20 rounded-full px-1.5 py-0.5 text-[8px]">4</span>
          </div>
          <div className="px-3 py-1.5 rounded-full border border-white/10 text-[9px] text-white/50 whitespace-nowrap cursor-pointer hover:bg-white/5 transition-colors">Today</div>
          <div className="px-3 py-1.5 rounded-full border border-white/10 text-[9px] text-white/50 whitespace-nowrap cursor-pointer hover:bg-white/5 transition-colors">Done 1</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-20 pt-2 space-y-3 relative" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {tasks.map((task, i) => (
          <div key={i} className="bg-[#151828] rounded-[20px] p-4 border border-white/5 cursor-pointer hover:border-[#6366f1]/50 hover:bg-[#1A1D36] transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_8px_20px_-10px_rgba(99,102,241,0.2)]">
            <div className="flex justify-between items-start mb-2 gap-2">
              <div className="flex-1">
                <div className="flex items-center flex-wrap gap-2 mb-1.5">
                  <h3 className="text-white text-[11px] font-semibold group-hover:text-[#6366f1] transition-colors line-clamp-1">{task.title}</h3>
                  {task.tag && (
                    <span className={`text-[8px] px-1.5 py-0.5 rounded flex items-center gap-1 ${task.tagColor === 'red' ? 'text-red-400 bg-red-400/10' : 'text-orange-400 bg-orange-400/10'}`}>
                      <span className={`w-1 h-1 rounded-full ${task.tagColor === 'red' ? 'bg-red-400' : 'bg-orange-400'}`}></span>
                      {task.tag}
                    </span>
                  )}
                </div>
                <p className="text-[9px] text-white/40 leading-relaxed line-clamp-2">{task.desc}</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#6366f1]/10 flex items-center justify-center text-[#6366f1] group-hover:bg-[#6366f1] group-hover:text-white transition-colors shrink-0 shadow-sm group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-3 text-[9px] text-white/30 font-medium">
              <span className="bg-[#6366f1]/10 text-[#6366f1] px-1.5 py-0.5 rounded">{task.time}</span>
              
              <div className="flex items-center gap-2 px-3 border-x border-white/10">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 6h11"/><path d="M10 12h11"/><path d="M10 18h11"/>
                  <polyline points="3 6 4 7 6 5"/><polyline points="3 12 4 13 6 11"/><polyline points="3 18 4 19 6 17"/>
                </svg>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="21" y1="6" x2="3" y2="6"/><line x1="15" y1="12" x2="3" y2="12"/><line x1="17" y1="18" x2="3" y2="18"/>
                </svg>
              </div>

              <span className="flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 
                {task.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-16 right-5 w-12 h-12 bg-[#6366f1] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] cursor-pointer hover:scale-110 transition-transform">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </div>

      <BottomNav active="tasks" />
    </div>
  );
};

const PhoneMockup = ({ imageSrc, interactive, interactiveTimer, interactiveCalendar, isHovered }) => (
  <div 
    className="relative w-[280px] h-[580px] rounded-[40px] border border-white/10 bg-[#050505] shadow-2xl overflow-hidden"
    style={{ 
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8), inset 0 0 0 8px #111, inset 0 0 20px rgba(255,255,255,0.05)'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20 rounded-[40px]" />
    
    {interactive ? (
      <InteractiveTaskScreen />
    ) : interactiveTimer ? (
      <InteractiveTimerScreen isHovered={isHovered} />
    ) : interactiveCalendar ? (
      <InteractiveCalendarScreen />
    ) : imageSrc ? (
      <img src={imageSrc} alt="App Screen" className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-[32px] z-0" />
    ) : (
      <div className="absolute inset-x-4 top-12 bottom-4 rounded-[24px] bg-[#0A0A0A] border border-white/5 flex flex-col p-6 overflow-hidden z-0">
        <div className="w-full h-32 rounded-xl bg-white/5 mb-4" />
        <div className="w-3/4 h-6 rounded-md bg-white/10 mb-2" />
        <div className="w-1/2 h-4 rounded-md bg-white/5 mb-8" />
        <div className="flex gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-white/10" />
          <div className="flex-1 rounded-xl bg-white/5" />
        </div>
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/10" />
          <div className="flex-1 rounded-xl bg-white/5" />
        </div>
      </div>
    )}

    <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30 pointer-events-none">
      <div className="w-24 h-6 bg-[#111] rounded-b-xl border-b border-x border-white/5" />
    </div>
  </div>
);

const Hero = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      
      {/* Background Glows */}
      <div className="radial-glow top-0 left-[-10%]" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)' }} />
      <div className="radial-glow bottom-0 right-[-10%]" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)' }} />

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            We Build Apps That <span className="text-white/60">Make Life Easier</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted mb-10 max-w-[500px] leading-relaxed">
            MoonDevs creates beautifully designed applications focused on productivity, focus, organization, and everyday simplicity.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#apps" className="uiverse">
              <div className="wrapper">
                <span className="gap-2">Explore Apps <ArrowRight size={18} /></span>
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
          </div>
        </motion.div>

        {/* Right Content - Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end perspective-1000 w-full"
        >
          {/* Abstract Phone Mockups with Hover Effect */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex justify-center items-center group cursor-pointer w-[280px] h-[580px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Title that reveals on hover */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-30">
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Nexus <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Todo</span>
              </span>
            </div>
            {/* Left Mockup (Slides out on hover) */}
            <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform scale-95 opacity-0 group-hover:-translate-x-[200px] lg:group-hover:-translate-x-[280px] group-hover:-rotate-6 group-hover:scale-100 group-hover:opacity-100 z-0">
              <PhoneMockup interactiveTimer={true} isHovered={isHovered} />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/70 font-medium tracking-wide text-sm whitespace-nowrap">Pomodoro</div>
            </div>

            {/* Right Mockup (Slides out on hover) */}
            <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform scale-95 opacity-0 group-hover:translate-x-[200px] lg:group-hover:translate-x-[280px] group-hover:rotate-6 group-hover:scale-100 group-hover:opacity-100 z-0">
              <PhoneMockup interactiveCalendar={true} />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/70 font-medium tracking-wide text-sm whitespace-nowrap">Calendar</div>
            </div>

            {/* Main Mockup (Center) */}
            <div className="relative z-10 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover:scale-105 group-hover:-translate-y-4">
              <PhoneMockup interactive={true} />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/90 font-medium tracking-wide text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">Create Task</div>
            </div>
          </motion.div>
          
          {/* Decorative floating elements behind phone */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-64 h-64 border border-white/5 rounded-full z-[-1]"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-10 w-48 h-48 border border-white/5 rounded-full z-[-1]"
          />
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
