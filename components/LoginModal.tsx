import React from 'react';
import { ShieldCheck, Users, Briefcase } from 'lucide-react';
import { UserRole } from '../types';
import Logo from './Logo';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: UserRole) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl">
        <div className="bg-slate-900 p-8 text-center border-b border-slate-800">
          <div className="flex justify-center mb-4">
             <Logo isDark={false} />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Welcome back</h3>
          <p className="text-slate-400 text-sm font-light">Select your access portal below</p>
        </div>
        
        <div className="p-8 space-y-4">
          <button onClick={() => onLogin('admin')} className="w-full p-4 border border-slate-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 hover:shadow-md transition-all flex items-center gap-4 group text-left">
            <div className="bg-blue-100 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Admin / Manager</div>
              <div className="text-xs text-slate-500">Full System Control</div>
            </div>
          </button>
          
          <button onClick={() => onLogin('client')} className="w-full p-4 border border-slate-200 rounded-2xl hover:border-green-500 hover:bg-green-50 hover:shadow-md transition-all flex items-center gap-4 group text-left">
            <div className="bg-green-100 p-3 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Users size={20} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Client Portal</div>
              <div className="text-xs text-slate-500">Buy Gigs & Manage Orders</div>
            </div>
          </button>
          
          <button onClick={() => onLogin('freelancer')} className="w-full p-4 border border-slate-200 rounded-2xl hover:border-purple-500 hover:bg-purple-50 hover:shadow-md transition-all flex items-center gap-4 group text-left">
            <div className="bg-purple-100 p-3 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Briefcase size={20} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Freelancer / Employee</div>
              <div className="text-xs text-slate-500">View Tasks & Submit Work</div>
            </div>
          </button>
        </div>
        
        <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
          <button onClick={onClose} className="text-slate-500 hover:text-slate-900 font-bold text-sm px-6 py-2 rounded-full hover:bg-slate-200 transition-colors">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;