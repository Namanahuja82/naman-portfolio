import Head from 'next/head';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import '../app/globals.css';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 min-h-screen text-white">
      <Head>
        <title>Naman Ahuja - Portfolio</title>
        <link rel="stylesheet" href="https://unpkg.com/remixicon/fonts/remixicon.css" />
      </Head>
      <Header />
      <main className="overflow-hidden">
      
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}