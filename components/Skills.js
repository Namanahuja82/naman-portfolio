"use client"
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'mvp builds',
      proof: 'scoped and shipped complete products from zero to live in weeks, including auth, payments, admin flows, and analytics.',
      capability: 'you get a launch-ready mvp fast so you can test demand and start learning from users.'
    },
    {
      title: 'ai integrations',
      proof: 'built ai features that connect llms to real product workflows, including document parsing, automation decisions, and user-facing tools.',
      capability: 'you get practical ai that saves time or creates new value, not demo-only features.'
    },
    {
      title: 'automation',
      proof: 'implemented end-to-end automations across APIs, scheduled jobs, and alerts to remove repetitive ops work.',
      capability: 'you reduce manual work, cut errors, and free up founder time for growth.'
    },
    {
      title: 'frontend + backend ownership',
      proof: 'handled full delivery across ui, api design, database modeling, deployment, and post-launch fixes.',
      capability: 'you work with one accountable engineer who can unblock the full stack.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50" id="services">
      <div ref={sectionRef} className="container mx-auto px-4 max-w-6xl">
        <div className={`text-center mb-14 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">services</h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-lg">
            no skill bars. just what i can own and ship for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white rounded-2xl p-7 shadow-lg shadow-slate-200/40 border border-slate-100 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-700 mb-3"><span className="font-semibold text-slate-900">proof of work:</span> {service.proof}</p>
              <p className="text-slate-700"><span className="font-semibold text-slate-900">business outcome:</span> {service.capability}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="mailto:naman6176@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300">
            book a call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
