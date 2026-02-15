"use client"

const Projects = () => {
  const projects = [
    {
      title: 'CalorieSense',
      link: 'https://caloriesense-rust.vercel.app/',
      problem: 'manual food tracking is slow and users drop off quickly.',
      built: 'receipt upload plus ai parsing to auto-create nutrition entries.',
      impact: 'faster onboarding and better user retention for a health product.'
    },
    {
      title: 'GetYoLogo',
      link: 'https://getyologo.vercel.app/',
      problem: 'founders need branding fast to launch.',
      built: 'ai-powered logo generation flow with instant outputs.',
      impact: 'faster go-to-market without design bottlenecks.'
    },
    {
      title: 'Auto Meme Poster',
      link: 'https://github.com/Namanahuja82/auto-meme-poster',
      problem: 'consistent social posting consumes founder time.',
      built: 'automated meme generation and scheduled posting pipeline.',
      impact: 'more consistent content with less manual work.'
    }
  ];

  return (
    <section className="py-16" id="projects">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-slate-900">projects</h2>
          <a href="#contact" className="text-sm font-semibold text-slate-700">hire me</a>
        </div>

        <div className="mt-6 space-y-4">
          {projects.map((project) => (
            <article key={project.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-700">view project</a>
              </div>
              <p className="mt-3 text-slate-700"><span className="font-semibold text-slate-900">problem:</span> {project.problem}</p>
              <p className="mt-1 text-slate-700"><span className="font-semibold text-slate-900">what i built:</span> {project.built}</p>
              <p className="mt-1 text-slate-700"><span className="font-semibold text-slate-900">business outcome:</span> {project.impact}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
