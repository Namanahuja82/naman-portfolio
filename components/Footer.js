"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-slate-900">Naman Ahuja</p>
          <p className="text-sm text-slate-600">product engineer for startup founders</p>
        </div>
        <div className="flex gap-4 text-sm">
          <a href="#contact" className="text-slate-700">hire me</a>
          <a href="mailto:naman6176@gmail.com" className="text-slate-700">book a call</a>
          <a href="https://x.com/_palindromic" target="_blank" rel="noopener noreferrer" className="text-slate-700">dm me</a>
        </div>
        <p className="text-sm text-slate-500">© {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
