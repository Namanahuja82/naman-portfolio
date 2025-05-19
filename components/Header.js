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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image
              src={profileImg}
              alt="Naman Ahuja"
              className="rounded-full border-2 border-blue-500/50 hover:border-blue-500 transition-all duration-300 hover:scale-110"
              width={45}
              height={45}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <Link href="#" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
            Naman Ahuja
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {['Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="relative text-slate-700 hover:text-blue-600 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-blue-50/50"
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-blue-50/50 transition-colors duration-300"
          >
            <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-2xl text-slate-700`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}>
          <ul className="flex flex-col p-4 space-y-2">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block p-3 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;