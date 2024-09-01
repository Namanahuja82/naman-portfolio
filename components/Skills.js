const Skills = () => {
    const skillCategories = [
      {
        title: "Frontend",
        skills: [
          { name: "JavaScript", icon: "ri-javascript-line" },
          { name: "React", icon: "ri-reactjs-line" },
          { name: "Next.js", icon: "ri-nextjs-line" },
        ]
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js", icon: "ri-nodejs-line" },
          { name: "Express.js", icon: "ri-server-line" },
          { name: "MongoDB", icon: "ri-database-2-line" },
        ]
      },
      {
        title: "DevOps & Cloud",
        skills: [
          { name: "AWS", icon: "ri-cloud-line" },
          { name: "Docker", icon: "ri-docker-line" },
        ]
      },
      {
        title: "Programming Languages",
        skills: [
          { name: "Java", icon: "ri-code-s-slash-line" },
          { name: "C++", icon: "ri-code-s-slash-line" },
        ]
      },
    ];
  
    return (
      <section className="py-20 bg-gray-800" id="skills">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                        <i className={`${skill.icon} mr-2 text-pink-500`}></i>
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;