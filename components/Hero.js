"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';

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
      <div ref={heroRef} className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center opacity-0 translate-y-8 transition-all duration-1000">
        
        {/* Text Content */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wide animate-fade-in-right animation-delay-300">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-right animation-delay-500">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                Naman
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Ahuja
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light animate-fade-in-right animation-delay-700">
              Full Stack Developer & UI/UX Enthusiast
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up animation-delay-1000">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center space-x-2">
                <span>Get in Touch</span>
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
              </span>
            </button>
            
            <button className="px-8 py-4 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105">
              View Projects
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-6 pt-8 animate-fade-in-up animation-delay-1200">
            {[
              { icon: 'ri-github-fill', url: 'https://github.com/Namanahuja82', color: 'hover:text-gray-700' },
              { icon: 'ri-linkedin-box-fill', url: 'https://www.linkedin.com/in/naman-ahuja-3a789b222/', color: 'hover:text-blue-600' },
              { icon: 'ri-twitter-fill', url: 'https://twitter.com/your-twitter', color: 'hover:text-blue-500' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-slate-400 ${social.color} transition-all duration-300 hover:scale-125 hover:-translate-y-1`}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Image Content */}
        <div className="relative flex justify-center animate-fade-in-left animation-delay-800">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:scale-110"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Naman Ahuja"
                width={500}
                height={600}
                className="rounded-xl object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-8 w-16 h-16 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float animation-delay-500"></div>
    </section>
  );
};

export default Hero;