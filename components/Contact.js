"use client";
import { useState, useEffect, useRef } from 'react';
import "remixicon/fonts/remixicon.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mzzpedrk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'naman6176@gmail.com',
      link: 'mailto:naman6176@gmail.com'
    },
    
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      value: 'India',
      link: '#'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50" id="contact">
      <div ref={contactRef} className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            <div className={`space-y-8 transition-all duration-1000 animation-delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-6 rounded-2xl bg-white hover:bg-slate-100 transition-all duration-300 hover:scale-105 group shadow-lg shadow-slate-200/50 hover:shadow-xl"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <i className={`${info.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{info.title}</h3>
                      <p className="text-slate-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg shadow-slate-200/50">
                <h3 className="font-semibold text-slate-900 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: 'ri-github-fill', url: 'https://github.com/Namanahuja82', color: 'hover:text-gray-700', label: 'GitHub' },
                    { icon: 'ri-linkedin-fill', url: 'https://www.linkedin.com/in/namanahuja82/', color: 'hover:text-blue-600', label: 'LinkedIn' },
                    { icon: 'ri-twitter-x-fill', url: 'https://x.com/_palindromic', color: 'hover:text-black', label: 'X (Twitter)' },
                   
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    >
                      <i className={`${social.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 animation-delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none shadow-sm"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line"></i>
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </button>

                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <div className="flex items-center space-x-2 text-emerald-700">
                      <i className="ri-check-line"></i>
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <div className="flex items-center space-x-2 text-red-700">
                      <i className="ri-error-warning-line"></i>
                      <span>Failed to send message. Please try again.</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;