"use client";
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const principles = [
    {
      title: 'how i think',
      text: 'i start from the business goal, not the tech stack. we define success in numbers first, then build only what moves that metric.'
    },
    {
      title: 'how i execute',
      text: 'i break work into short build cycles, ship usable slices early, and keep quality high with practical testing and production-safe decisions.'
    },
    {
      title: 'how i communicate',
      text: 'you get direct updates: what is done, what is blocked, what is next. no vague status reports and no surprises.'
    },
    {
      title: 'how i take responsibility',
      text: 'i do not disappear after deploy. i monitor outcomes, fix issues fast, and keep improving until the product is stable and useful.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" id="about">
      <div ref={aboutRef} className="container mx-auto px-4 max-w-6xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">about</h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-lg">
            i work like a product engineer, not a ticket-taker. i care about revenue, retention, speed to market, and user trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((item, index) => (
            <article
              key={item.title}
              className={`p-7 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-700 leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300">
            hire me
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
