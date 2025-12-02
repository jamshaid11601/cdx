import React from 'react';

interface LogoProps {
  isDark?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ isDark = false, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div className="relative w-8 h-8 perspective-[500px] group">
        <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <svg 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-full transform transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-110 drop-shadow-xl"
        >
            <path d="M20 2L4 11V29L20 38L36 29V11L20 2Z" fill="url(#paint0_linear)" stroke={isDark ? "#1e293b" : "#ffffff"} strokeWidth="2" strokeOpacity="0.2"/>
            <path d="M20 2L20 19" stroke={isDark ? "#1e293b" : "#ffffff"} strokeWidth="2" strokeOpacity="0.2"/>
            <path d="M20 19L36 11" stroke={isDark ? "#1e293b" : "#ffffff"} strokeWidth="2" strokeOpacity="0.2"/>
            <path d="M20 19L4 11" stroke={isDark ? "#1e293b" : "#ffffff"} strokeWidth="2" strokeOpacity="0.2"/>
            <path d="M20 38V19" stroke={isDark ? "#1e293b" : "#ffffff"} strokeWidth="2" strokeOpacity="0.2"/>
            <defs>
                <linearGradient id="paint0_linear" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#6366F1" />
                </linearGradient>
            </defs>
        </svg>
      </div>
      <span className={`text-2xl font-bold tracking-tighter ${isDark ? 'text-slate-900' : 'text-white'}`}>
        codexier<span className="text-blue-500">.</span>
      </span>
    </div>
  );
};

export default Logo;