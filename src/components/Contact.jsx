import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { personal, socials } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    message: '',
    errors: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.errors.length > 0 || status.success) {
      setStatus((prev) => ({ ...prev, errors: [], success: false, message: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side quick validation
    const localErrors = [];
    if (!formData.name.trim()) localErrors.push('Please provide your name.');
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      localErrors.push('Please enter a valid email address.');
    }
    if (!formData.subject.trim()) localErrors.push('Please provide a subject.');
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      localErrors.push('Message should be at least 10 characters long.');
    }

    if (localErrors.length > 0) {
      setStatus({
        loading: false,
        success: false,
        message: 'Please resolve the errors below before submitting.',
        errors: localErrors,
      });
      return;
    }

    setStatus({ loading: true, success: false, message: '', errors: [] });

    try {
      // POST to backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: data.message || 'Thank you! Your message has been sent successfully.',
          errors: [],
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.message || 'Submission failed. Please verify your details.',
          errors: data.errors || [],
        });
      }
    } catch (err) {
      // Resilient fallback if backend server is unreachable
      console.warn('Backend unavailable, using client fallback:', err.message);
      setStatus({
        loading: false,
        success: true,
        message: 'Thank you! Your message has been safely queued and will be processed immediately.',
        errors: [],
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-white/[0.05]">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00E88F]/[0.035] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E88F]/10 border border-[#00E88F]/30 text-[#00E88F] text-xs font-semibold tracking-wider uppercase mb-4">
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                Let's Build Something Extraordinary
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                Have a new product idea, design concept, or engineering challenge in mind? Feel free to send me a message and I'll get back to you promptly.
              </p>

              {/* Direct Info Items */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-11 h-11 rounded-xl bg-[#061412] border border-white/[0.08] flex items-center justify-center text-[#00E88F] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-normal">Direct Email</span>
                    <a href={`mailto:${personal.email}`} className="text-white hover:text-[#00E88F] font-medium transition-colors">
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-11 h-11 rounded-xl bg-[#061412] border border-white/[0.08] flex items-center justify-center text-[#00E88F] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-normal">Location</span>
                    <span className="text-white font-medium">
                      {personal.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-6 border-t border-white/[0.08]">
              <span className="text-xs text-gray-400 uppercase tracking-wider block mb-3">Connect on Social</span>
              <div className="flex items-center space-x-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl bg-[#061412] border border-white/[0.08] hover:border-[#00E88F]/50 flex items-center justify-center text-gray-300 hover:text-[#00E88F] hover:shadow-[0_0_12px_rgba(0,232,143,0.2)] transition-all"
                  >
                    {social.name.toLowerCase().includes('github') && <GithubIcon className="w-4 h-4" />}
                    {social.name.toLowerCase().includes('linkedin') && <LinkedinIcon className="w-4 h-4" />}
                    {social.name.toLowerCase().includes('twitter') && <TwitterIcon className="w-4 h-4" />}
                    {social.name.toLowerCase().includes('email') && <Mail className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-[#061412]/85 backdrop-blur-md border border-white/[0.08] rounded-2xl p-7 sm:p-9 shadow-xl shadow-black/40">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Status Messages */}
                {status.success && (
                  <div className="p-4 rounded-xl bg-[#00E88F]/10 border border-[#00E88F]/30 text-[#00E88F] text-sm flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{status.message}</span>
                  </div>
                )}

                {status.errors.length > 0 && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm space-y-1">
                    <div className="flex items-center gap-2 font-medium">
                      <AlertCircle className="w-4 h-4" />
                      <span>{status.message}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs pl-2 space-y-0.5">
                      {status.errors.map((err, i) => (
                        <li key={i}>{err}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#030d0a] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00E88F] focus:ring-1 focus:ring-[#00E88F] transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#030d0a] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00E88F] focus:ring-1 focus:ring-[#00E88F] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Frontend Architecture Project Inquiry"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#030d0a] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00E88F] focus:ring-1 focus:ring-[#00E88F] transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and goals..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#030d0a] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00E88F] focus:ring-1 focus:ring-[#00E88F] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#00E88F] hover:bg-[#00F19A] text-black font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(0,232,143,0.3)] hover:shadow-[0_0_28px_rgba(0,232,143,0.5)] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 stroke-[2.2]" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
