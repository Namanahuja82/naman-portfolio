"use client"

const Skills = () => {
  const services = [
    {
      title: 'mvp builds',
      outcome: 'ship your first version fast so you can validate demand and get real user feedback.'
    },
    {
      title: 'ai integrations',
      outcome: 'add practical ai workflows that improve speed, product value, or support quality.'
    },
    {
      title: 'automation',
      outcome: 'reduce repetitive manual tasks with reliable workflows across your tools and APIs.'
    },
    {
      title: 'frontend and backend ownership',
      outcome: 'one engineer accountable for delivery across UI, APIs, data, deployment, and fixes.'
    }
  ];

  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900">services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-slate-700">{service.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
