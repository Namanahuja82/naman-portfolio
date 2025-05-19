import Head from 'next/head';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import '../app/globals.css';

export default function Home() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Head>
        <title>Naman Ahuja - Portfolio</title>
        <link rel="stylesheet" href="https://unpkg.com/remixicon/fonts/remixicon.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <Header />
      <main className="relative z-10">
        
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}