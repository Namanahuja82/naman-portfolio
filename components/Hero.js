import Image from 'next/image';
// import heroImg from '../public/images/hero.jpg';

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="home">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          I'm Naman Ahuja
        </h1>
        <p className="text-lg md:text-2xl mb-10 text-gray-300">
          Full Stack Developer
        </p>
        <div className="relative w-full max-w-2xl mx-auto group">
          {/* <Image
            src={heroImg}
            alt="Hero Image"
            className="rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-105"
            layout="responsive"
            priority
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-xl"></div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 w-full h-64 bg-gradient-to-b from-transparent to-purple-900 transform -translate-y-1/2 -skew-y-6 -z-10"></div>
    </section>
  );
};

export default Hero;