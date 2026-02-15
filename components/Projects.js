"use client"
import { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const projectsRef = useRef(null);
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'caloriesense',
      link: 'https://caloriesense-rust.vercel.app/',
      problem: 'people struggle to track nutrition because manual logging is slow and easy to quit.',
      built: 'i built a web app that reads uploaded food bills and turns them into structured nutrition data with ai support and simple tracking flows.',
      impact: 'founders can offer a sticky health product with less user drop-off and clearer retention loops.'
    },
    {
      title: 'getyologo',
      link: 'https://getyologo.vercel.app/',
      problem: 'early-stage founders need branding quickly but designers and iterations can slow launch.',
      built: 'i built an ai-powered logo generator that produces brand-ready options fast through a guided user flow.',
      impact: 'founders can move from idea to branded product in minutes and launch faster.'
    },
    {
      title: 'auto meme poster',
      link: 'https://github.com/Namanahuja82/auto-meme-poster',
      problem: 'social growth requires consistent content, but manual posting takes daily founder time.',
      built: 'i built an automation system that generates memes from context and posts to x through scheduled workflows.',
      impact: 'founders can keep marketing channels active with lower effort and better consistency.'
    },
    {
      title: 'this portfolio rebuild',
      link: 'https://namanahuja.vercel.app/',
      problem: 'most portfolios list tools but fail to show business value and delivery trust.',
      built: 'i rebuilt positioning, copy, and cta structure to sell outcomes, speed, ownership, and execution clarity.',
      impact: 'founders can quickly see fit and decide whether to hire without long back-and-forth.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" id="projects">
      <div ref={projectsRef} className="container mx-auto px-4 max-w-6xl">
        <div className={`text-center mb-14 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">projects</h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-lg">
            selected work with clear problem to outcome mapping.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`rounded-2xl p-7 bg-slate-50 border border-slate-100 shadow-sm transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{project.title}</h3>
              <p className="text-slate-700 mb-3"><span className="font-semibold text-slate-900">problem:</span> {project.problem}</p>
              <p className="text-slate-700 mb-3"><span className="font-semibold text-slate-900">what i built:</span> {project.built}</p>
              <p className="text-slate-700 mb-5"><span className="font-semibold text-slate-900">business outcome:</span> {project.impact}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300">
                view project
                <i className="ri-external-link-line"></i>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300">
            hire me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
