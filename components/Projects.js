import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "Real-time Chat Application",
      image: "/images/chat-app.png",
      link: "https://github.com/Namanahuja82/ChatNow"
    },
    {
      title: "Library Management System",
      image: "/images/lib.png",
      link: "https://github.com/Namanahuja82/LibraryManagement"
    },
    {
      title: "Chitragupta AI",
      image: "/images/chitragupta.png",
      link: "https://github.com/Namanahuja82/chat_rag/"
    },
    {
      title: "Portfolio Website",
      image: "/images/portf.png",
      link: "https://github.com/Namanahuja82/portfolio-next"
    }
  ];

  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="responsive"
                  width={700}
                  height={400}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
