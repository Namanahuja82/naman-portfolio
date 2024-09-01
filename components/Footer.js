const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
      { icon: 'ri-github-fill', url: 'https://github.com/Namanahuja82' },
      { icon: 'ri-linkedin-box-fill', url: 'https://www.linkedin.com/in/naman-ahuja-3a789b222/' },
      { icon: 'ri-twitter-fill', url: 'https://twitter.com/your-twitter' },
    ];
  
    return (
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">© {currentYear} Naman Ahuja. All rights reserved.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <i className={`${link.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;