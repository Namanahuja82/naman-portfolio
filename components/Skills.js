"use client"
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
      observer.disconnect();
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🖥️",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "TypeScript", level: 80, icon: "📘" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express", level: 80, icon: "🚀" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "MongoDB", level: 70, icon: "🍃" }
      ],
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, icon: "🔀" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 65, icon: "☁️" },
        { name: "Figma", level: 75, icon: "🎯" }
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50" id="skills">
      <div ref={skillsRef} className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">
              I'm passionate about continuous learning and staying up-to-date with the latest technologies. 
              Here are the skills I've developed over the years.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`group transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="h-full bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  
                  {/* Background Gradient */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>
                  
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-xl">{category.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-slate-500 text-sm">{skill.icon}</span>
                            <span className="text-slate-700 font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-slate-500 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className={`mt-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Years of Experience', value: '1+', icon: '⏱️' },
                { label: 'Projects Completed', value: '15+', icon: '🏆' },
                { label: 'Technologies', value: '20+', icon: '💻' },
                { label: 'Certifications', value: '5+', icon: '🎖️' }
              ].map((stat, index) => (
                <div key={stat.label} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                    <span className="text-xl">{stat.icon}</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;