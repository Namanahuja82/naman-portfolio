"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profileImg from "../public/images/pic.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-30 bg-gray-900 backdrop-filter backdrop-blur-lg z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Image
            src={profileImg}
            alt="Naman Ahuja"
            className="rounded-full border-2 border-purple-500 hover:border-violet-400 transition-all duration-300"
            width={40}
            height={40}
          />
          <Link href="#" className="text-xl font-bold text-white ml-3 hover:text-purple-400 transition-colors duration-300" id="nav-brand">
            <i className="ri-flashlight-fill text-purple-500"></i> Naman Ahuja
          </Link>
        </div>
        <div className={`md:flex ${menuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full bg-gray-900 md:bg-transparent md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item} className="nav__item" onClick={() => setMenuOpen(false)}>
                <Link href={`#${item.toLowerCase()}`} className="block p-2 text-white hover:text-purple-400 transition-colors duration-300 relative group">
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white hover:text-purple-400 transition-colors duration-300">
            <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;