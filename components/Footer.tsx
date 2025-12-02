import React from 'react';
import { ArrowRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { PageView } from '../types';
import Logo from './Logo';

interface FooterProps {
  setPage: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => (
  <footer className="bg-[#050507] border-t border-white/10 pt-24 pb-12 text-sm font-sans text-slate-400">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
      
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
        <div>
          {/* Brand Logo */}
          <div className="cursor-pointer mb-8 inline-block" onClick={() => setPage('home')}>
             <Logo isDark={false} />
          </div>
          <p className="text-lg font-light leading-relaxed max-w-md text-slate-500">
            The enterprise operating system for modern engineering teams. Design, build, and scale with absolute precision.
          </p>
        </div>
        
        {/* Newsletter */}
        <div className="flex flex-col justify-center lg:items-end">
            <h4 className="text-white font-medium mb-6">Subscribe to our engineering newsletter</h4>
            <div className="relative w-full max-w-sm">
                <input 
                    type="email" 
                    placeholder="email@company.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 pr-14 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-blue-50 transition-colors">
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-24 border-t border-white/5 pt-16">
        <div>
          <h4 className="text-white font-bold mb-6">Platform</h4>
          <ul className="space-y-4 font-light">
            <li><button onClick={() => setPage('marketplace')} className="hover:text-blue-400 transition-colors">Marketplace</button></li>
            <li><button onClick={() => setPage('custom-order')} className="hover:text-blue-400 transition-colors">Enterprise</button></li>
            <li><button onClick={() => setPage('portfolio')} className="hover:text-blue-400 transition-colors">Case Studies</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Pricing</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 font-light">
            <li><button onClick={() => setPage('about')} className="hover:text-blue-400 transition-colors">About</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Careers</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Blog</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Contact</button></li>
          </ul>
        </div>
        
        <div className="col-span-2 md:col-span-2">
            <h4 className="text-white font-bold mb-6">Global Offices</h4>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono uppercase tracking-wide text-slate-600">
                <div>
                    <span className="block text-slate-400 mb-1">San Francisco</span>
                    548 Market St, CA 94104
                </div>
                <div>
                    <span className="block text-slate-400 mb-1">London</span>
                    100 Bishopsgate, EC2M 1GT
                </div>
                <div>
                    <span className="block text-slate-400 mb-1">Singapore</span>
                    Marina Bay Financial Ctr
                </div>
                 <div>
                    <span className="block text-slate-400 mb-1">Berlin</span>
                    Potsdamer Platz 1
                </div>
            </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-600 font-medium">
        <div>© 2024 Codexier Inc. All rights reserved.</div>
        <div className="flex gap-8">
             <button className="hover:text-slate-400 transition-colors">Privacy</button>
             <button className="hover:text-slate-400 transition-colors">Terms</button>
             <button className="hover:text-slate-400 transition-colors">Sitemap</button>
        </div>
        <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;