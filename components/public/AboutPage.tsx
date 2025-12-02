
import React from 'react';
import { Shield, Zap, Users, Globe, Award, ArrowRight } from 'lucide-react';
import { PageView } from '../../types';

interface AboutPageProps {
  setPage: (page: PageView) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ setPage }) => {
    return (
        <div className="font-sans text-slate-900 bg-white">
            {/* 1. Hero Section */}
            <div className="bg-[#050507] text-white pt-40 pb-32 px-6 md:px-12 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                     <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[100px] animate-pulse duration-[8000ms]" />
                     <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[100px]" />
                     {/* Noise Texture */}
                     <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
                </div>

                <div className="max-w-[1440px] mx-auto relative z-10 text-center animate-in slide-in-from-bottom-8 fade-in duration-1000">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        We build the software<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">that powers the future.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-12">
                        Codexier isn't just a dev shop. We are a sovereign engineering collective dedicated to craft, speed, and absolute precision.
                    </p>
                </div>
            </div>

            {/* 2. The Mission Section */}
            <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="animate-in slide-in-from-left-8 fade-in duration-1000 delay-200">
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">Our Philosophy</div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">The agency model is broken. <br/>So we reinvented it.</h2>
                        <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                            <p>
                                Traditional agencies are slow, opaque, and bloated. Freelancers are risky and hard to manage.
                            </p>
                            <p>
                                <span className="font-semibold text-slate-900">Codexier bridges the gap.</span> We combine the reliability of an enterprise consultancy with the agility of a startup squad. We don't just write code; we architect outcomes.
                            </p>
                            <p>
                                By leveraging AI-augmented workflows and a global network of elite talent, we deliver production-grade software 3x faster than industry standards.
                            </p>
                        </div>
                    </div>
                    <div className="relative animate-in slide-in-from-right-8 fade-in duration-1000 delay-200">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2.5rem] transform rotate-3 opacity-20 blur-xl"></div>
                         <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                            alt="Team collaboration" 
                            className="relative rounded-[2.5rem] shadow-2xl z-10 w-full object-cover h-[500px]"
                        />
                    </div>
                </div>
            </section>

            {/* 3. Stats / Trust Bar */}
            <section className="bg-slate-50 py-24 border-y border-slate-200">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">500+</div>
                            <div className="text-xs md:text-sm text-slate-500 uppercase font-bold tracking-widest">Projects Shipped</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">98%</div>
                            <div className="text-xs md:text-sm text-slate-500 uppercase font-bold tracking-widest">Client Retention</div>
                        </div>
                         <div className="space-y-2">
                            <div className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">15+</div>
                            <div className="text-xs md:text-sm text-slate-500 uppercase font-bold tracking-widest">Countries Served</div>
                        </div>
                         <div className="space-y-2">
                            <div className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">24/7</div>
                            <div className="text-xs md:text-sm text-slate-500 uppercase font-bold tracking-widest">Support Coverage</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Values - Bento Grid */}
            <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
                <div className="text-center mb-20">
                     <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Why visionaries choose us</h2>
                     <p className="text-slate-500 text-xl font-light">We hold ourselves to a higher standard of engineering.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Large Card */}
                    <div className="md:col-span-2 bg-[#050507] text-white p-10 rounded-[2.5rem] relative overflow-hidden group min-h-[300px] flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-600/30 transition-all duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                                <Users size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 tracking-tight">Top 1% Global Talent</h3>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-lg font-light">
                                We accept less than 1% of engineering applicants. Our teams are composed of senior developers from top tech firms, ensuring your code is scalable, secure, and performant from day one.
                            </p>
                        </div>
                    </div>

                    {/* Tall Card */}
                    <div className="bg-slate-50 border border-slate-100 p-10 rounded-[2.5rem] flex flex-col justify-center hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-transparent transition-all duration-300">
                         <div>
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-slate-900 shadow-sm border border-slate-100">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">Velocity</h3>
                            <p className="text-slate-500 leading-relaxed font-light">
                                Our pre-built modules and AI-augmented dev environments allow us to ship MVPs in weeks, not months.
                            </p>
                         </div>
                    </div>

                    {/* Regular Card */}
                    <div className="bg-slate-50 border border-slate-100 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-transparent transition-all duration-300">
                         <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-slate-900 shadow-sm border border-slate-100">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">Security First</h3>
                            <p className="text-slate-500 leading-relaxed font-light">
                                Enterprise-grade security protocols, SOC2 compliance standards, and automated testing baked into every deploy.
                            </p>
                    </div>

                     {/* Regular Card */}
                    <div className="bg-slate-50 border border-slate-100 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-transparent transition-all duration-300">
                         <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-slate-900 shadow-sm border border-slate-100">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">Asynchronous</h3>
                            <p className="text-slate-500 leading-relaxed font-light">
                                We work around the clock. While you sleep, our global teams are pushing commits and closing tickets.
                            </p>
                    </div>

                     {/* Wide Card */}
                     <div className="md:col-span-1 bg-white border border-slate-200 p-10 rounded-[2.5rem] flex flex-col justify-center shadow-lg shadow-slate-200/50 relative overflow-hidden">
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-green-100 rounded-full blur-xl opacity-50"></div>
                        <div className="relative z-10">
                             <div className="flex items-center gap-2 mb-4 text-green-600 font-bold uppercase text-xs tracking-wider">
                                <Award size={16} /> Best Value 2024
                             </div>
                             <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">Transparent Pricing</h3>
                             <p className="text-slate-500 text-lg leading-relaxed font-light">
                                No hidden fees. No scope creep. Just clear, flat-rate pricing.
                             </p>
                        </div>
                     </div>
                </div>
            </section>

             {/* 5. Team Lead CTA */}
            <section className="bg-[#050507] py-32 px-6 md:px-12 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                     <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Join the revolution.</h2>
                     <p className="text-xl text-slate-400 mb-12 font-light max-w-2xl mx-auto">
                        Whether you need a single specialized engineer or a full product team, Codexier is ready to deploy.
                     </p>
                     <button onClick={() => setPage('custom-order')} className="bg-white text-black px-12 py-6 rounded-full font-bold text-xl tracking-tight hover:scale-105 transition-transform flex items-center gap-2 mx-auto shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]">
                        Hire Codexier <ArrowRight size={24} />
                     </button>
                </div>
            </section>
        </div>
    )
}

export default AboutPage;
