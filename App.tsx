
import React from 'react';
import { PROJECTS, SERVICES, HERO_IMAGE, BIO, STATS } from './constants';
import { ProjectCard } from './components/ui/ProjectCard';
import { AIAssistant } from './components/ui/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <span className="material-symbols-outlined text-2xl">grid_view</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Portfolio<span className="text-primary">.</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {['Work', 'About', 'Services', 'Contact'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20">
            Hire Me
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col gap-8 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Available for new projects</span>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight text-white">
                  Crafting Digital <br/>
                  <span className="text-primary">Experiences</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
                  {BIO.summary}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#work" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-extrabold text-lg transition-all shadow-xl shadow-primary/30 flex items-center gap-2">
                    View My Work
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                  <a href="#contact" className="bg-white/5 border border-white/10 hover:border-white/30 text-white px-8 py-4 rounded-xl font-extrabold text-lg transition-all">
                    Get in touch
                  </a>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden border border-primary/10 shadow-2xl bg-surface">
                  <img 
                    className="w-full h-full object-cover" 
                    src={HERO_IMAGE} 
                    alt="Creative Workspace" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-black border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl font-black text-white mb-8">About Me</h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  {BIO.story}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  With over {BIO.experience} in the industry, I've had the privilege of working with global brands and fast-growing startups. My philosophy is simple: technology should serve humanity, not the other way around.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mt-12">
                  {STATS.map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface rounded-3xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">school</span>
                  Core Principles
                </h3>
                <div className="space-y-6">
                  {[
                    { title: "User-First Approach", text: "Every pixel and line of code starts with understanding the user's pain points." },
                    { title: "Scalable Systems", text: "Building for today with an architecture that supports tomorrow's growth." },
                    { title: "Radical Transparency", text: "Honest communication and collaborative workflows lead to better results." }
                  ].map((p, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i+1}</div>
                      <div>
                        <div className="font-bold text-white mb-1">{p.title}</div>
                        <div className="text-sm text-gray-500 leading-relaxed">{p.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="services" className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-4 mb-16 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white">Our Services</h2>
              <div className="h-1.5 w-24 bg-primary rounded-full mx-auto"></div>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Specialized digital services designed to help brands navigate the modern digital landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map(service => (
                <div key={service.id} className="p-10 rounded-2xl border border-white/5 bg-surface hover:border-primary/40 transition-all group relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white relative z-10">{service.title}</h3>
                  <p className="text-gray-500 mt-2 leading-relaxed relative z-10">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="work" className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white">Selected Work</h2>
                <p className="text-gray-400 mt-4">Exploring the intersection of function and aesthetics.</p>
              </div>
              <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                View all projects <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {PROJECTS.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-primary p-12 md:p-24 text-center text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to build <br/>the future?</h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-lg mx-auto mb-10">
                Whether you have a specific project in mind or just want to chat about design, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:hello@example.com" className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl inline-flex items-center gap-2 justify-center">
                  Work With Me
                  <span className="material-symbols-outlined">mail</span>
                </a>
                <button className="bg-white/10 border border-white/20 backdrop-blur-sm px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-colors">
                  Schedule Call
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32 transition-transform duration-1000 group-hover:scale-150"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-1.5 rounded-lg text-primary">
                <span className="material-symbols-outlined text-2xl">grid_view</span>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">Portfolio<span className="text-primary">.</span></span>
            </div>
            <div className="flex items-center gap-8">
              {['Work', 'About', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest">{item}</a>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          <p className="text-gray-600 text-sm text-center">
            © 2024 Alex Sterling. All rights reserved. Designed and coded with passion.
          </p>
        </div>
      </footer>

      {/* Floating Elements */}
      <AIAssistant />
      
      {/* Scroll Indicator */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 hidden lg:block pointer-events-none">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
