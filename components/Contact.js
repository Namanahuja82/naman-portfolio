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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50" id="contact">
      <div ref={contactRef} className="container mx-auto px-4 max-w-6xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">ready to ship</h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-lg">
            if you need an engineer who can own product decisions and deliver quickly, let&apos;s talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <a href="mailto:naman6176@gmail.com" className="flex items-center gap-4 p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
              <i className="ri-mail-line text-2xl text-blue-600"></i>
              <div>
                <p className="font-semibold text-slate-900">book a call</p>
                <p className="text-slate-600">naman6176@gmail.com</p>
              </div>
            </a>
            <a href="https://x.com/_palindromic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
              <i className="ri-twitter-x-line text-2xl text-blue-600"></i>
              <div>
                <p className="font-semibold text-slate-900">dm me</p>
                <p className="text-slate-600">x.com/_palindromic</p>
              </div>
            </a>
            <a href="#home" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold">
              hire me
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300" placeholder="your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300" placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">what are you building</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300 resize-none" placeholder="tell me your goal, timeline, and current blocker"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl disabled:opacity-50">
              {isSubmitting ? 'sending...' : 'hire me'}
            </button>

            {status === 'success' && <p className="text-emerald-700">message sent. i will get back to you soon.</p>}
            {status === 'error' && <p className="text-red-700">message failed. email or dm me directly.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
