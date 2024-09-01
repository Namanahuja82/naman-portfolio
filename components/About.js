"use client"
import React, { useState, useEffect } from 'react';

const AnimatedWord = ({ word, isVisible }) => {
  return (
    <span className={`inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {word}
    </span>
  );
};

const About = () => {
  const titleWords = ['Hi,', 'I', 'am', 'Naman'];
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % (titleWords.length + 1));
    }, 400);

    return () => clearInterval(intervalId);
  }, [titleWords.length]);

  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 min-h-[4rem]">
            {titleWords.map((word, index) => (
              <React.Fragment key={index}>
                <AnimatedWord word={word} isVisible={index <= visibleIndex} />
                {index < titleWords.length - 1 && ' '}
              </React.Fragment>
            ))}
          </h2>
          <a
            href="/2110990908_naman.pdf"
            download
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-base rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 transform hover:scale-105 mb-8"
          >
            Download Resume
          </a>
          <p className="text-lg text-gray-300 mx-auto max-w-full md:max-w-3xl leading-relaxed mb-6">
            As a Full Stack Developer, I know JavaScript, React, Node.js, Express, MongoDB, Next.js, AWS, and Docker. I&apos;m good at connecting third-party APIs and building web apps that can grow. I solve problems well and understand data structures from lots of practice and learning. I have certificates in Java, C++, AWS, and Python, which shows I know my stuff in data structures, web development, and cloud computing. I&apos;ve built two cool things: a library system using MERN stack and a chat app that works in real-time with Express.js and Socket.IO. I always try to make things that users will like, and I work well with others. Let&apos;s team up and make something awesome!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;