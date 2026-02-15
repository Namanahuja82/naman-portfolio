"use client";

const Hero = () => {
  return (
    <section className="pt-20 pb-16" id="home">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">for startup founders</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            i build production saas and ai products quickly and reliably
          </h1>
          <p className="mt-5 text-lg text-slate-700">
            you get fast execution, full-stack ownership, and clear communication from idea to live product.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white">hire me</a>
            <a href="mailto:naman6176@gmail.com" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800">book a call</a>
            <a href="https://x.com/_palindromic" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800">dm me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
