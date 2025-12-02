import React, { useState, useEffect } from 'react';
import { PageView, User } from '../types';
import Logo from './Logo';

interface NavigationProps {
  activePage: PageView;
  setPage: (page: PageView) => void;
  onOpenLogin: () => void;
  user?: User | null;
}

const Navigation: React.FC<NavigationProps> = ({ activePage, setPage, onOpenLogin, user }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkHeroPage = activePage === 'home' || activePage === 'about' || activePage === 'portfolio';
  const isSolidNav = isScrolled || !isDarkHeroPage;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isSolidNav ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200/50 py-4' : 'bg-transparent border-b border-white/5 py-6'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        <div className="cursor-pointer group" onClick={() => setPage('home')}>
          <Logo isDark={isSolidNav} />
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <button onClick={() => setPage('home')} className={`text-sm font-medium transition-colors hover:text-blue-500 ${activePage === 'home' ? 'text-blue-500' : isSolidNav ? 'text-slate-600' : 'text-slate-300'}`}>Home</button>
          <button onClick={() => setPage('portfolio')} className={`text-sm font-medium transition-colors hover:text-blue-500 ${activePage === 'portfolio' ? 'text-blue-500' : isSolidNav ? 'text-slate-600' : 'text-slate-300'}`}>Work</button>
          <button onClick={() => setPage('marketplace')} className={`text-sm font-medium transition-colors hover:text-blue-500 ${activePage === 'marketplace' ? 'text-blue-500' : isSolidNav ? 'text-slate-600' : 'text-slate-300'}`}>Marketplace</button>
          <button onClick={() => setPage('about')} className={`text-sm font-medium transition-colors hover:text-blue-500 ${activePage === 'about' ? 'text-blue-500' : isSolidNav ? 'text-slate-600' : 'text-slate-300'}`}>Company</button>
          
          <div className={`h-4 w-px ${isSolidNav ? 'bg-slate-300' : 'bg-white/20'}`} />
          
          {user ? (
            <button 
              onClick={() => setPage('dashboard')} 
              className={`flex items-center gap-2 text-sm font-bold transition-colors ${isSolidNav ? 'text-slate-900' : 'text-white'}`}
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                {user.name.charAt(0)}
              </div>
              <span className="hidden xl:inline">Dashboard</span>
            </button>
          ) : (
            <button onClick={onOpenLogin} className={`text-sm font-medium transition-colors hover:text-blue-500 ${isSolidNav ? 'text-slate-900' : 'text-white'}`}>Log In</button>
          )}
          
          <button onClick={() => setPage('custom-order')} className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] ${isSolidNav ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 hover:bg-blue-50'}`}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;