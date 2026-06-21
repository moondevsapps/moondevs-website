import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505]">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left side: Logo and Copyright */}
        <div className="flex items-center gap-3">
          <Link to="/" className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
            <span className="text-white font-bold text-sm">M</span>
          </Link>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tight">MoonDevs</span>
            <span className="text-muted text-[11px]">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
        </div>
        
        {/* Right side: Links */}
        <nav className="flex items-center gap-6 flex-wrap justify-center">
          <a href="/#apps" className="text-sm font-medium text-muted hover:text-white transition-colors">
            Apps
          </a>
          <a href="/#about" className="text-sm font-medium text-muted hover:text-white transition-colors">
            About
          </a>
          <a href="mailto:atul1995og@gmail.com" className="text-sm font-medium text-muted hover:text-white transition-colors">
            Contact
          </a>
          <a href="/#playstore" className="text-sm font-medium text-muted hover:text-white transition-colors">
            Play Store
          </a>
          <Link to="/terms/nexus-todo" className="text-sm font-medium text-muted hover:text-white transition-colors">
            Terms
          </Link>
        </nav>
        
      </div>
    </footer>
  );
};

export default Footer;
