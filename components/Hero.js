"use client";
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      <div ref={heroRef} className="container mx-auto px-4 max-w-6xl opacity-0 translate-y-8 transition-all duration-1000">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-300/40 border border-slate-100">
          <p className="text-blue-600 font-semibold tracking-wide text-sm md:text-base">for startup founders who need speed and reliability</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4 text-slate-900">
            i build production saas and ai systems fast, then stay accountable until they work in the real world
          </h1>
          <p className="mt-6 text-lg text-slate-700 max-w-3xl leading-relaxed">
            from mvp to launch, i handle frontend, backend, data flows, ai integrations, and messy edge cases.
            you get clear updates, sharp execution, and someone who thinks like an owner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a href="#contact" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 text-center">
              <span className="flex items-center justify-center space-x-2">
                <span>hire me</span>
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
              </span>
            </a>
            <a href="mailto:naman6176@gmail.com" className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 text-center">
              book a call
            </a>
            <a href="https://x.com/_palindromic" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 text-center">
              dm me
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-8">
            {[
              'ships quickly without shipping chaos',
              'owns the product from idea to production',
              'solves hard problems with simple communication'
            ].map((point) => (
              <div key={point} className="p-4 rounded-xl bg-slate-50 text-slate-700 font-medium">
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
