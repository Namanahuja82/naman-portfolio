"use client";
import { useState } from 'react';
import "remixicon/fonts/remixicon.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section className="py-16" id="contact">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">contact</h2>
          <p className="mt-2 text-slate-700">hire me for your next build. book a call or dm me.</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:naman6176@gmail.com" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">book a call</a>
            <a href="https://x.com/_palindromic" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800">dm me</a>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full rounded-lg border border-slate-300 px-4 py-3" placeholder="name" />
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-lg border border-slate-300 px-4 py-3" placeholder="email" />
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full rounded-lg border border-slate-300 px-4 py-3 resize-none" placeholder="your product, timeline, and current blocker" />
            <button type="submit" disabled={isSubmitting} className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white disabled:opacity-50">
              {isSubmitting ? 'sending...' : 'hire me'}
            </button>
          </form>

          {status === 'success' && <p className="mt-3 text-sm text-emerald-700">message sent.</p>}
          {status === 'error' && <p className="mt-3 text-sm text-red-700">message failed, please email or dm me directly.</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
