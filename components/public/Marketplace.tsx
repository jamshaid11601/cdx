import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Star, Search, Filter, Sparkles, Zap, Clock } from 'lucide-react';
import { Gig, PageView } from '../../types';
import { CATEGORIES } from '../../constants';

interface MarketplaceProps {
  setPage: (page: PageView) => void;
  gigs: Gig[];
  onBuy: (gig: Gig) => void;
  isEmbedded?: boolean; // New prop for dashboard integration
}

const Marketplace: React.FC<MarketplaceProps> = ({ setPage, gigs, onBuy, isEmbedded = false }) => {
  const [view, setView] = useState<'categories' | 'gigs'>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    setView('gigs');
    if (!isEmbedded) window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter categories based on search
  const filteredCategories = CATEGORIES.filter(cat => 
    cat.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
    cat.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeGigs = selectedCategory ? gigs.filter(g => g.category === selectedCategory && g.status === 'active') : [];
  const activeCatLabel = CATEGORIES.find(c => c.id === selectedCategory)?.label;
  const activeCatDesc = CATEGORIES.find(c => c.id === selectedCategory)?.desc;

  return (
    <div className={`${isEmbedded ? 'bg-transparent min-h-full' : 'bg-slate-50 min-h-screen'} font-sans`}>
      
      {/* 1. Editorial Header Section - Only show if NOT embedded */}
      {!isEmbedded && (
        <div className="bg-white border-b border-slate-200 pt-32 pb-16">
           <div className="max-w-[1440px] mx-auto px-6 md:px-12">
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 animate-in slide-in-from-bottom-8 fade-in duration-700">
                  <div>
                      <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
                          <Sparkles size={14} /> Service Catalog v2.0
                      </div>
                      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-6">
                          Marketplace.
                      </h1>
                      <p className="text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
                          Pre-packaged engineering modules and dedicated squads. <br className="hidden md:block"/>
                          Select your service, define your scope, and start building.
                      </p>
                  </div>
                  
                  {/* Search Bar */}
                  {view === 'categories' && (
                      <div className="w-full md:w-auto relative group">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                          <input 
                              type="text" 
                              placeholder="Search services..." 
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full md:w-[320px] pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all shadow-sm"
                          />
                      </div>
                  )}
              </div>
           </div>
        </div>
      )}

      {/* Embedded Header Version */}
      {isEmbedded && view === 'categories' && (
        <div className="mb-8 flex justify-between items-center animate-in fade-in slide-in-from-bottom-4">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Browse Services</h1>
                <p className="text-slate-500 text-sm">Add new capabilities to your project.</p>
            </div>
            <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                    type="text" 
                    placeholder="Search catalog..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
            </div>
        </div>
      )}

      <div className={`${isEmbedded ? 'w-full' : 'max-w-[1440px] mx-auto px-6 md:px-12 py-16'}`}>
        
        {/* VIEW: CATEGORIES GRID */}
        {view === 'categories' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            {filteredCategories.length > 0 ? (
                <div className={`grid gap-6 ${isEmbedded ? 'md:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
                {filteredCategories.map((cat, idx) => (
                    <button 
                        key={cat.id} 
                        onClick={() => handleCategorySelect(cat.id)} 
                        className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 text-left group h-full flex flex-col relative overflow-hidden"
                        style={{animationDelay: `${idx * 50}ms`}}
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10 flex-1">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-8 group-hover:scale-110 shadow-sm">
                                {cat.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{cat.label}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-light">{cat.desc}</p>
                        </div>
                        
                        <div className="relative z-10 mt-8 pt-6 border-t border-slate-100 flex items-center justify-between group-hover:border-blue-100 transition-colors">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-400">View Packages</span>
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </button>
                ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <div className="inline-block p-6 bg-slate-100 rounded-full mb-4 text-slate-400">
                        <Search size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">No services found</h3>
                    <p className="text-slate-500">Try adjusting your search terms.</p>
                </div>
            )}
          </div>
        )}

        {/* VIEW: GIGS LIST */}
        {view === 'gigs' && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            {/* Breadcrumb / Nav */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                    <button onClick={() => { setView('categories'); setSelectedCategory(null); }} className="flex items-center gap-2 text-slate-400 hover:text-slate-900 font-bold text-sm mb-4 transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Categories
                    </button>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-2">{activeCatLabel}</h2>
                    <p className="text-slate-500 text-lg font-light">{activeCatDesc}</p>
                </div>
            </div>

            <div className={`grid gap-6 ${isEmbedded ? 'md:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
              {activeGigs.map((gig, idx) => (
                <div 
                    key={gig.id} 
                    className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                    style={{animationDelay: `${idx * 100}ms`}}
                >
                  {/* Cinematic Image Area */}
                  <div className="h-56 relative overflow-hidden">
                    <img 
                        src={gig.image} 
                        alt={gig.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        {gig.rating >= 4.9 && (
                            <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm flex items-center gap-1">
                                <Zap size={12} className="fill-current" /> Popular
                            </span>
                        )}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight tracking-tight group-hover:text-blue-600 transition-colors">{gig.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{gig.description}</p>
                    </div>
                    
                    <div className="space-y-3 mb-8 flex-1">
                      {gig.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                          <span className="font-medium">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Starting at</div>
                        <div className="text-2xl font-bold text-slate-900">${gig.price}</div>
                      </div>
                      <button onClick={() => onBuy(gig)} className="px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-full font-bold transition-all flex items-center gap-2 hover:gap-3 shadow-lg hover:shadow-blue-600/20 text-sm">
                        Select <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;