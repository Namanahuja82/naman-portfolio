"use client";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">naman ahuja</h3>
            <p className="text-slate-400">product engineer for founders who need saas and ai systems shipped fast and done right.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">quick actions</h4>
            <div className="space-y-2">
              <a href="#contact" className="block text-slate-400 hover:text-blue-400">hire me</a>
              <a href="mailto:naman6176@gmail.com" className="block text-slate-400 hover:text-blue-400">book a call</a>
              <a href="https://x.com/_palindromic" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-blue-400">dm me</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">links</h4>
            <div className="flex space-x-3">
              <a href="https://github.com/Namanahuja82" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700"><i className="ri-github-fill"></i></a>
              <a href="https://www.linkedin.com/in/namanahuja82/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700"><i className="ri-linkedin-fill"></i></a>
              <a href="https://x.com/_palindromic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700"><i className="ri-twitter-x-fill"></i></a>
            </div>
          </div>
        </div>

        <p className="text-slate-500 text-sm mt-8 border-t border-slate-800 pt-6">© {currentYear} naman ahuja</p>
      </div>
    </footer>
  );
};

export default Footer;
