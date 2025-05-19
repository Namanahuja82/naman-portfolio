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

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "CalorieSense",
      subtitle: "Upload bill → get nutrition → track your nutrition",
      image: "/images/caloriesense.png",
      link: "https://caloriesense-rust.vercel.app/",
      tech: ["React", "Next.js", "AI/ML", "TypeScript"],
      description: "AI-powered nutrition tracking app that analyzes food receipts to provide detailed nutritional information and tracking.",
      icon: "🍎"
    },
    {
      title: "GetYoLogo",
      subtitle: "Get professional logos in 69 seconds",
      image: "/images/getyologo.png",
      link: "https://getyologo.vercel.app/",
      tech: ["React", "Next.js", "Design AI", "Tailwind"],
      description: "Rapid logo generation platform using AI to create professional brand identities in under a minute.",
      icon: "🎨"
    },
    {
      title: "Auto-meme-poster",
      subtitle: "Give context → get memes → automatically post on X",
      image: "/images/automeme.png",
      link: "https://github.com/Namanahuja82/auto-meme-poster",
      tech: ["Python", "AI/ML", "Twitter API", "Automation"],
      description: "Automated meme creation and posting system that generates context-aware memes and posts them on social media.",
      icon: "🤖"
    },
    {
      title: "Portfolio Website",
      subtitle: "Modern, responsive personal portfolio",
      image: "/images/portfnew.png",
      link: "https://namanahuja.vercel.app/",
      tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
      description: "A sleek, modern portfolio website showcasing my projects and skills with smooth animations and dark mode support.",
      icon: "👨‍💻"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50" id="projects">
      <div ref={projectsRef} className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              AI integration, and modern web technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="h-full bg-white rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-500 overflow-hidden group-hover:scale-105">
                  
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Project Header */}
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl">{project.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-600 font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Link */}
                    <div className="pt-4 border-t border-slate-200">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-purple-600 transition-colors duration-300 font-semibold"
                      >
                        <span>Explore Project</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}>
            <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Interested in collaborating?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and bring innovative ideas to life. 
                Let's create something amazing together!
              </p>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Get In Touch</span>
                <span>💬</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;