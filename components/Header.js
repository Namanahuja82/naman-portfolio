"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profileImg from "../public/images/pic.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ['About', 'Projects', 'Services', 'Contact'];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex items-center gap-3">
          <Image src={profileImg} alt="Naman Ahuja" className="rounded-full border border-slate-300" width={38} height={38} />
          <Link href="#home" className="text-base font-semibold text-slate-900">Naman Ahuja</Link>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="px-3 py-2 text-sm text-slate-700 hover:text-slate-900">
              {item}
            </Link>
          ))}
          <a href="#contact" className="ml-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            hire me
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-slate-700" aria-label="Toggle menu">
          <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-2xl`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <ul className="container mx-auto px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block py-2 text-slate-700">
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <a href="mailto:naman6176@gmail.com" className="block py-2 text-slate-700">book a call</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
