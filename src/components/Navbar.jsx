import React from 'react';
import { Link } from 'react-router-dom';
import NavHeader from './ui/NavHeader';

const Navbar = () => {
  return (
    <header className="fixed w-full z-50 transition-all duration-300 py-4" style={{ backgroundColor: 'rgba(11, 11, 11, 0.8)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #333 0%, #111 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">MoonDevs</span>
        </Link>
        
        {/* Right side Links */}
        <div className="hidden md:block">
          <NavHeader />
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;
