
import React from 'react';
import { ArrowRight, ArrowUpRight, Smartphone, Globe, Cpu, BarChart, Truck, ShieldCheck, Package, Users, Zap, Calculator, Plane, Sparkles, Armchair, ShoppingBag, Code, Terminal } from 'lucide-react';
import { PageView } from '../../types';

interface PortfolioPageProps {
  setPage: (page: PageView) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ setPage }) => {
  const projects = [
    {
      id: 1,
      client: "Spiritual Healer LA",
      industry: "Wellness & Lifestyle",
      category: "Digital Booking Platform",
      icon: <Sparkles size={20} />,
      image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&q=80&w=1200", // Mystical/Dark/Gold aesthetic
      description: "A premium digital presence for a Los Angeles-based energy healer. We engineered a seamless appointment booking system integrated with a content-rich blog architecture. The UI focuses on serenity and luxury, utilizing dark modes and gold accents to match the brand identity.",
      stack: ["WordPress Headless", "React Frontend", "Booking API", "SEO Core Vitals"],
      metrics: ["+60% Online Bookings", "Page Speed 98/100", "Mobile-First UX"]
    },
    {
      id: 2,
      client: "Tunc Design",
      industry: "Architecture & Design",
      category: "Immersive Portfolio",
      icon: <Armchair size={20} />,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1200", // Minimalist Furniture/Design
      description: "A minimalist, gallery-style showcase for high-end furniture and architectural concepts. We focused on 'invisible technology'—using smooth GSAP animations and high-resolution image optimization to let the product design speak for itself without UI clutter.",
      stack: ["Custom Webflow Dev", "GSAP Animations", "CDN Optimization"],
      metrics: ["Award Winning UI", "0.8s LCP Load Time", "Global Reach"]
    },
    {
      id: 3,
      client: "Pure Culture",
      industry: "E-Commerce",
      category: "B2B Wholesale Hub",
      icon: <ShoppingBag size={20} />,
      image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=1200", // Nordic/Danish Interior - Clean Scandi Style
      description: "A robust e-commerce platform for a Danish home decor brand. Beyond the B2C storefront, we engineered a complex B2B login portal allowing wholesale partners to view varied pricing tiers, manage bulk inventory, and automate invoicing directly through the web interface.",
      stack: ["WooCommerce Custom", "ERP Integration", "B2B Logic Module"],
      metrics: ["Automated Invoicing", "Real-time Stock Sync", "Danish Design UX"]
    },
    {
      id: 4,
      client: "MediScan AI",
      industry: "HealthTech",
      category: "Computer Vision",
      icon: <Cpu size={20} />,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200", // Medical Technology/Screen
      description: "Developed a computer vision model to assist radiologists in detecting early-stage anomalies in X-rays. The system pre-screens images to prioritize critical cases.",
      stack: ["Python", "TensorFlow", "HIPAA Cloud"],
      metrics: ["99.2% Diagnostic Accuracy", "HIPAA Compliant", "Real-time Inference"]
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* 1. Cinematic 3D Hero Section */}
      <div className="bg-[#050507] text-white min-h-[90vh] flex flex-col justify-center relative overflow-hidden perspective-[1000px]">
        
        {/* 3D Perspective Grid Floor */}
        <div className="absolute bottom-0 left-[-50%] w-[200%] h-[50%] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)] origin-bottom opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#050507] via-transparent to-[#050507] pointer-events-none z-10"></div>
        
        {/* Dynamic Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[100px]" />

        {/* Content */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-20 w-full pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
              <div className="animate-in slide-in-from-bottom-8 fade-in duration-1000">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-400 mb-6 backdrop-blur-md">
                     <Terminal size={14} /> Engineering Showcase
                  </div>
                  <h1 className="text-6xl md:text-8xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-6">
                    Built to <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Perform.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-400 max-w-xl font-light leading-relaxed">
                    A curated gallery of enterprise platforms, high-velocity apps, and complex integrations engineered by Codexier.
                  </p>
              </div>

              {/* Stats Strip */}
              <div className="flex flex-col gap-8 animate-in slide-in-from-right-8 fade-in duration-1000 delay-200">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md min-w-[240px]">
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Total Value Created</div>
                      <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">$500M+</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md min-w-[240px]">
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Code Shipped</div>
                      <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">10M+ Lines</div>
                  </div>
              </div>
          </div>
        </div>
      </div>

      {/* 2. Featured Case Studies */}
      <section className="bg-slate-900 py-24 text-white relative border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-32">
            
            {/* FEATURE 1: LATINO LEADS NOW */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 animate-in slide-in-from-left-8 fade-in duration-1000 delay-200">
                    <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider text-xs mb-6">
                        <Users size={14} /> Featured Case Study
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Scaling CRM for Latino Leads Now</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                        Latino Leads Now needed a high-velocity engine to connect contractors with the growing Latino market. We architected a custom CRM and lead distribution platform that processes thousands of inquiries daily, automating qualification and reducing response times from hours to seconds.
                    </p>
                    
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {['Next.js', 'Node.js', 'Twilio API', 'Real-time Analytics'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-slate-300">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-3 gap-6 border-y border-white/10 py-8 mb-10">
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">300%</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Lead Volume</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">&lt; 1min</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Response Time</div>
                        </div>
                         <div>
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">95%</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Automation</div>
                        </div>
                    </div>

                    <button className="text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-all font-bold flex items-center gap-2">
                        View Live Platform <ArrowRight size={18} />
                    </button>
                </div>
                
                {/* Featured Image */}
                <div className="order-1 lg:order-2 relative group animate-in slide-in-from-right-8 fade-in duration-1000 delay-200">
                    <div className="absolute inset-0 bg-blue-600/20 rounded-[2.5rem] blur-2xl group-hover:bg-blue-600/30 transition-all duration-700"></div>
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-slate-800">
                         <img 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                            alt="Latino Leads Now Dashboard" 
                            className="w-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <div className="absolute bottom-8 left-8">
                             <div className="flex items-center gap-2 text-white font-bold">
                                <Zap size={20} className="text-blue-400" /> High-Velocity System
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURE 2: MY GERMANY */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                 {/* Image Left */}
                 <div className="relative group animate-in slide-in-from-left-8 fade-in duration-1000 delay-300">
                    <div className="absolute inset-0 bg-amber-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-amber-500/20 transition-all duration-700"></div>
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-slate-800">
                         {/* Logistics / Calculator Image */}
                         <img 
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                            alt="My Germany Shipping Platform" 
                            className="w-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <div className="absolute bottom-8 left-8">
                             <div className="flex items-center gap-2 text-white font-bold">
                                <Plane size={20} className="text-amber-400" /> Global Logistics
                             </div>
                        </div>
                    </div>
                </div>

                <div className="animate-in slide-in-from-right-8 fade-in duration-1000 delay-300">
                    <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-xs mb-6">
                        <Package size={14} /> Featured Case Study
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Global Shipping for My Germany</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                        We developed the entire My Germany platform, enabling international customers to shop from German stores seamlessly. The core of this solution is a custom-engineered <strong>Shipping Cost Calculator</strong> that integrates real-time API data from carriers (DHL, FedEx) with warehouse dimensioning logic to provide instant, accurate quotes.
                    </p>
                    
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {['Custom Calculator Logic', 'PHP / Laravel', 'Carrier API Integration', 'Warehouse Management'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-slate-300">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-3 gap-6 border-y border-white/10 py-8 mb-10">
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">150+</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Countries</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">100%</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Automated Quotes</div>
                        </div>
                         <div>
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">24/7</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Processing</div>
                        </div>
                    </div>

                    <button className="text-white border-b border-white pb-1 hover:text-amber-400 hover:border-amber-400 transition-all font-bold flex items-center gap-2">
                        View Calculator <ArrowRight size={18} />
                    </button>
                </div>
            </div>

        </div>
      </section>

      {/* 3. Project Grid */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
         <div className="flex justify-between items-end mb-16">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">More Recent Deliveries</h2>
                <p className="text-slate-500 text-lg font-light">Engineering challenges we've solved recently.</p>
            </div>
         </div>

         <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {projects.map((project) => (
                <div key={project.id} className="group cursor-pointer">
                    {/* Card Image */}
                    <div className="relative overflow-hidden rounded-[2.5rem] mb-8 border border-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 bg-slate-100">
                        <img 
                            src={project.image} 
                            alt={project.client} 
                            className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500"></div>
                        <div className="absolute top-6 right-6 bg-white w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg z-10">
                            <ArrowUpRight size={20} className="text-slate-900" />
                        </div>
                    </div>

                    {/* Card Content */}
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <span className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">{project.icon}</span>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.client}</h3>
                                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{project.industry}</div>
                                </div>
                            </div>
                        </div>
                        
                        <p className="text-slate-500 leading-relaxed mb-6 font-light">{project.description}</p>
                        
                        {/* Stack & Metrics */}
                        <div className="space-y-4">
                             <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-slate-100 rounded-md text-xs font-mono text-slate-600">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                                {project.metrics.map((metric, i) => (
                                    <span key={i} className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        {metric}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
         </div>
      </section>

      {/* 4. Immersive Final CTA */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-[#050507] text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[100px] animate-pulse duration-[8000ms]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-blue-300 mb-8">
                    <Sparkles size={16} /> Ready to deploy?
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
                    Stop dreaming.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Start building.</span>
                </h2>
                
                <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Our teams are ready to architect your next breakthrough. Schedule a technical consultation today.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button onClick={() => setPage('custom-order')} className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg tracking-tight hover:scale-105 transition-transform duration-300 shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
                        Launch Project <ArrowRight size={20} />
                    </button>
                     <button onClick={() => setPage('about')} className="px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg tracking-tight hover:bg-white/5 transition-all">
                        Our Philosophy
                    </button>
                </div>
            </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
