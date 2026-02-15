"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import profileImg from "../public/images/pic.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['about', 'services', 'projects', 'contact'];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8">
        <div className="flex items-center space-x-3">
          <Image src={profileImg} alt="naman ahuja" className="rounded-full border-2 border-blue-500/50" width={42} height={42} />
          <Link href="#home" className="text-lg font-bold text-slate-900">naman ahuja</Link>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          {navItems.map((item) => (
            <Link key={item} href={`#${item}`} className="text-slate-700 hover:text-blue-600 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-blue-50/50">
              {item}
            </Link>
          ))}
          <a href="#contact" className="ml-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold">
            hire me
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-lg hover:bg-blue-50/50 transition-colors duration-300">
            <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-2xl text-slate-700`}></i>
          </button>
        </div>

        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}>
          <ul className="flex flex-col p-4 space-y-2">
            {['home', ...navItems].map((item) => (
              <li key={item}>
                <Link href={`#${item}`} onClick={() => setMenuOpen(false)} className="block p-3 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300">
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <a href="mailto:naman6176@gmail.com" className="block p-3 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300">
                book a call
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
