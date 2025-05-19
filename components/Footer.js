"use client";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: 'ri-github-fill', 
      url: 'https://github.com/Namanahuja82',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: 'ri-linkedin-fill', 
      url: 'https://www.linkedin.com/in/namanahuja82/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: 'ri-twitter-x-fill', 
      url: 'https://x.com/_palindromic',
      label: 'X (Twitter)',
      color: 'hover:text-gray-300'
    }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="py-12 grid md:grid-cols-3 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Naman Ahuja
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              and bringing ideas to life through code.
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 ${social.color} hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-110`}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 inline-flex items-center space-x-2 group"
                  >
                    <i className="ri-arrow-right-s-line group-hover:translate-x-1 transition-transform duration-300"></i>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:naman6176@gmail.com"
                className="flex items-center space-x-3 text-slate-400 hover:text-blue-400 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <i className="ri-mail-line"></i>
                </div>
                <span>naman6176@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-400">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Naman Ahuja. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-slate-600">•</span>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;