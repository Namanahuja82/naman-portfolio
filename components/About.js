"use client";

const About = () => {
  const points = [
    ['how i think', 'i start with business goals and user behavior, then pick the simplest build path that gets results.'],
    ['how i execute', 'i work in short cycles, ship usable versions early, and keep quality high in production.'],
    ['how i communicate', 'you always know what is done, what is blocked, and what happens next.'],
    ['how i take ownership', 'i handle frontend, backend, deployment, and post-launch fixes until it works.']
  ];

  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900">about</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {points.map(([title, text]) => (
            <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-700">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
