
import React from 'react';
import { ShieldCheck, Star, ArrowRight, Globe, Cpu, Layers, Database, Search, Code2, Rocket, PlayCircle, CheckCircle2, Terminal } from 'lucide-react';
import { PageView } from '../../types';
import { CATEGORIES } from '../../constants';
import NetworkBackground from '../NetworkBackground';

interface HomePageProps {
  setPage: (page: PageView) => void;
}

const TESTIMONIALS = [
  {
    id: 1,
    text: "The most reliable engineering partner we've ever worked with. Period.",
    author: "David Park",
    role: "CTO @ TechFlow",
    stars: 5
  },
  {
    id: 2,
    text: "Codexier helped us scale from MVP to Series A in just 4 months.",
    author: "Sarah Jenkins",
    role: "Founder @ NextLevel",
    stars: 5
  },
  {
    id: 3,
    text: "Absolute game changer for our backend infrastructure. The code quality is pristine.",
    author: "Michael Chen",
    role: "VP Engineering @ DataStream",
    stars: 5
  },
  {
    id: 4,
    text: "The UI/UX work was world-class. Our conversion rate doubled within weeks of launch.",
    author: "Elena Rodriguez",
    role: "Product Lead @ FinServe",
    stars: 5
  },
  {
    id: 5,
    text: "We replaced our entire legacy system without a single minute of downtime. Incredible.",
    author: "James Wilson",
    role: "CEO @ StartUpX",
    stars: 5
  }
];

const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
  return (
    <div className="font-sans selection:bg-indigo-500/30 bg-black text-white">
      
      {/* 1. Cinematic Hero Section - Updated to 'WE CODE DESIRES' */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050507] perspective-[1000px]">
        
        {/* Dynamic Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* 3D Perspective Grid Floor (From Work Page) */}
            <div className="absolute bottom-[-10%] left-[-50%] w-[200%] h-[60%] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [transform:rotateX(60deg)] origin-bottom opacity-40"></div>
            
            {/* Gradient Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-indigo-800/10 rounded-full blur-[120px] animate-pulse duration-[8000ms]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[120px] animate-pulse duration-[10000ms]" />
            
            {/* Interactive Network Effect (Kept as requested) */}
            <div className="absolute inset-0 z-10 opacity-70">
                <NetworkBackground />
            </div>

            {/* Horizon Fade */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#050507] via-transparent to-[#050507] z-20"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-30 max-w-[1440px] mx-auto px-6 md:px-12 text-center pt-32 pb-20 md:pt-40 md:pb-24">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-blue-300 mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 pointer-events-auto">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
             </span>
             <Terminal size={12} />
             System Online
          </div>

          {/* Headline - One Line, Shadowed */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-tight animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-100 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] uppercase">
            WE CODE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">DESIRES.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-200 pointer-events-auto">
            Turning abstract vision into deployed reality. The definitive platform for <span className="text-white font-medium">Custom SaaS</span>, <span className="text-white font-medium">Global E-Commerce</span>, and <span className="text-white font-medium">AI Architecture</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300 pointer-events-auto">
            <button 
              onClick={() => setPage('custom-order')} 
              className="px-10 py-5 bg-white text-black rounded-full font-semibold text-lg tracking-tight hover:bg-blue-50 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] transition-all duration-300 min-w-[200px] hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Building
            </button>
            <button 
              onClick={() => setPage('marketplace')} 
              className="group px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full font-semibold text-lg tracking-tight hover:bg-white/10 transition-all flex items-center justify-center gap-3 min-w-[200px] hover:scale-[1.02] active:scale-[0.98]"
            >
              <PlayCircle size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
              <span>Explore Services</span>
            </button>
          </div>

          {/* Social Proof Strip (Stats) */}
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-slate-500 text-sm font-medium animate-in fade-in duration-1000 delay-500 pointer-events-auto">
             <div className="flex flex-col items-center gap-1">
                 <span className="text-white font-bold text-lg tracking-tight">500+</span>
                 <span className="text-xs uppercase tracking-widest">Projects Shipped</span>
             </div>
             <div className="w-px h-8 bg-white/10 hidden md:block"></div>
             <div className="flex flex-col items-center gap-1">
                 <span className="text-white font-bold text-lg tracking-tight">98%</span>
                 <span className="text-xs uppercase tracking-widest">Retention Rate</span>
             </div>
             <div className="w-px h-8 bg-white/10 hidden md:block"></div>
             <div className="flex flex-col items-center gap-1">
                 <span className="text-white font-bold text-lg tracking-tight">Global</span>
                 <span className="text-xs uppercase tracking-widest">Engineering Teams</span>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted By (Logo Strip) */}
      <div className="bg-black border-y border-white/5 py-16 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <p className="text-slate-600 text-xs font-bold uppercase tracking-[0.2em] mb-10">Trusted by Engineering Leaders</p>
            <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="text-2xl font-bold text-white flex items-center gap-2 tracking-tighter"><Globe size={28} /> GlobalTech</div>
                <div className="text-2xl font-bold text-white flex items-center gap-2 tracking-tighter"><Cpu size={28} /> InnovateAI</div>
                <div className="text-2xl font-bold text-white flex items-center gap-2 tracking-tighter"><Layers size={28} /> StackFlow</div>
                <div className="text-2xl font-bold text-white flex items-center gap-2 tracking-tighter"><Database size={28} /> DataCorp</div>
            </div>
        </div>
      </div>

      {/* 3. Process Section - Re-designed for Premium Alignment */}
      <section className="py-32 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
             <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
                 <Layers size={14} /> The Pipeline
             </div>
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Engineering, simplified.</h2>
             <p className="text-xl text-slate-500 font-light leading-relaxed">
               We've stripped away the complexity of hiring and management. <br className="hidden md:block"/> You focus on the vision, we handle the engine.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line - Gradient */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 group">
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full">
                  {/* Background Number */}
                  <div className="absolute -right-4 -top-8 text-[120px] font-bold text-slate-50 opacity-50 group-hover:text-blue-50 transition-colors pointer-events-none select-none">01</div>
                  
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 relative z-10 group-hover:scale-110 transition-transform duration-500">
                    <Search size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight relative z-10 group-hover:text-blue-600 transition-colors">Request</h3>
                  <p className="text-slate-500 leading-relaxed text-lg font-light relative z-10">
                    Select from our catalog of pre-built modules or define a custom scope. We match you with a dedicated squad instantly.
                  </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10 group">
               <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full">
                  <div className="absolute -right-4 -top-8 text-[120px] font-bold text-slate-50 opacity-50 group-hover:text-purple-50 transition-colors pointer-events-none select-none">02</div>

                  <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 text-purple-600 relative z-10 group-hover:scale-110 transition-transform duration-500">
                    <Code2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight relative z-10 group-hover:text-purple-600 transition-colors">Develop</h3>
                  <p className="text-slate-500 leading-relaxed text-lg font-light relative z-10">
                    Our elite teams start coding immediately. Track progress in real-time via your dashboard with full git transparency.
                  </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10 group">
               <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full">
                  <div className="absolute -right-4 -top-8 text-[120px] font-bold text-slate-50 opacity-50 group-hover:text-green-50 transition-colors pointer-events-none select-none">03</div>

                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-green-600 relative z-10 group-hover:scale-110 transition-transform duration-500">
                    <Rocket size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight relative z-10 group-hover:text-green-600 transition-colors">Deploy</h3>
                  <p className="text-slate-500 leading-relaxed text-lg font-light relative z-10">
                    Receive production-ready code, fully tested, secured, and documented. We handle the handover to your cloud.
                  </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Featured Services Preview */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">Core Capabilities</h2>
              <p className="text-slate-500 text-lg font-light">Specialized engineering domains ready to scale.</p>
            </div>
            <button onClick={() => setPage('marketplace')} className="hidden md:flex text-slate-900 font-bold items-center gap-2 hover:gap-4 transition-all">
              View All Services <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CATEGORIES.slice(0, 3).map((cat) => (
              <div key={cat.id} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-500/30 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 group cursor-pointer" onClick={() => setPage('marketplace')}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{cat.label}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed font-light">{cat.desc}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Scrollable Testimonials - DE-EMPHASIZED */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-100 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-10 flex justify-between items-end">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Success Stories</h2>
             <div className="hidden md:flex gap-2 text-slate-400 text-sm font-medium items-center">
                 Scroll to explore <ArrowRight size={16} />
             </div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="w-full overflow-x-auto pb-12 px-6 md:px-0 scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-6 w-max max-w-[1440px] mx-auto md:px-12">
             {TESTIMONIALS.map((testimonial) => (
                 <div key={testimonial.id} className="snap-center shrink-0 w-[85vw] md:w-[500px] p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-500 group cursor-pointer">
                    <div className="flex gap-1 mb-6">
                       {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-slate-900 text-slate-900" />)}
                    </div>
                    <h3 className="text-lg md:text-xl font-medium tracking-tight mb-6 leading-relaxed group-hover:text-blue-600 transition-colors">"{testimonial.text}"</h3>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm">
                           {testimonial.author.charAt(0)}
                       </div>
                       <div>
                          <div className="font-bold text-slate-900 text-sm">{testimonial.author}</div>
                          <div className="text-slate-500 text-xs">{testimonial.role}</div>
                       </div>
                    </div>
                 </div>
             ))}
             {/* Spacer for right padding in scroll */}
             <div className="w-6 md:hidden"></div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA - Reduced Height & Standardized Button */}
      <section className="relative py-24 bg-[#050507] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{animationDuration: '10s'}} />
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">faster.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
             Join 500+ companies scaling with Codexier.
          </p>
          <button 
            onClick={() => setPage('custom-order')} 
            className="bg-white text-black px-10 py-5 rounded-full font-semibold text-lg tracking-tight hover:scale-105 transition-transform duration-300 shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)]"
          >
             Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
