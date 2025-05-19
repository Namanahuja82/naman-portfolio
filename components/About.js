"use client";
import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "400px",
    }
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.03,
    minSpeed: 0.01,
  }
};

const renderCustomIcon = (icon) => {
  const bgHex = "#ffffff";
  const fallbackHex = "#64748b";
  const minContrastRatio = 1.2;
  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    }
  });
};

const IconCloud = ({ iconSlugs }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon)
    );
  }, [data]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
};

const slugs = [
  "typescript", "javascript", "react", "nextdotjs", "nodejs", "express",
  "postgresql", "mongodb", "firebase", "docker", "aws", "vercel",
  "git", "github", "figma", "tailwindcss", "prisma", "jest"
];

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

  return (
    <section className="py-20 lg:py-32 bg-white" id="about">
      <div ref={aboutRef} className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className={`space-y-6 transition-all duration-1000 animation-delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed">
                  Hello! I'm <span className="font-semibold text-blue-600">Naman Ahuja</span>, 
                  a passionate full-stack developer with a love for creating innovative digital experiences. 
                  I specialize in building modern web applications that combine beautiful design with powerful functionality.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  With expertise in both frontend and backend technologies, I enjoy tackling complex problems 
                  and transforming ideas into reality. I'm constantly learning and exploring new technologies 
                  to stay at the forefront of web development.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {[
                  { label: 'Projects Completed', value: '15+' },
                  { label: 'Technologies Mastered', value: '20+' },
                  { label: 'Years Experience', value: '1+' },
                  { label: 'Cups of Coffee', value: '∞' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Resume Download */}
              <div className="pt-8">
                <a
                  href="/naman-resume.pdf"
                  download
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                >
                  <i className="ri-download-cloud-line text-xl"></i>
                  <span>Download Resume</span>
                </a>
              </div>


            </div>

            {/* Skills Cloud - Only visible on large screens */}
            <div className={`hidden lg:block transition-all duration-1000 animation-delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50">
                  <IconCloud iconSlugs={slugs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;