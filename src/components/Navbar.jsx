import React from 'react';
import { Link } from 'react-router-dom';
import NavHeader from './ui/NavHeader';
import logo from '/favicon.ico';

const Navbar = () => {
  return (
    <header
      className="fixed w-full z-50 transition-all duration-300 py-4"
      style={{
        backgroundColor: 'rgba(11, 11, 11, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <div className="container flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">

          <img
            src={logo}
            alt="MoonDevs"
            className="w-10 h-10 rounded-lg"
          />

          <span className="text-white font-semibold tracking-tight text-lg">
            MoonDevs
          </span>

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