import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { currentTheme, theme: themeName } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_t3nw2fe',
        'template_xckk9ob',
        {
          from_name: formData.name,
          to_name: 'Ritik',
          from_email: formData.email,
          to_email: 'ritik.kaintura007@gmail.com',
          subject: formData.subject,
          message: formData.message
        },
        'Y5BOFyl-0AAE85x2U'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: themeName === 'light'
              ? 'linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(147,51,234,0.05) 100%)'
              : 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(10,10,30,0.95) 100%)'
          }}
        />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: themeName === 'light'
              ? 'linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)'
              : 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{
            background: themeName === 'light'
              ? 'radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)'
              : 'radial-gradient(circle, rgba(0,255,255,0.2), transparent 70%)'
          }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: themeName === 'light'
              ? 'radial-gradient(circle, rgba(147,51,234,0.25), transparent 70%)'
              : 'radial-gradient(circle, rgba(255,0,255,0.15), transparent 70%)'
          }}
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Get In Touch
          </h2>
          <div className="w-32 h-1.5 mx-auto rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
          <p 
            className="mt-6 text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 
                className="text-3xl font-bold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Let's Connect
              </h3>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: '📧', title: 'Email', value: 'ritik.kaintura007@gmail.com', link: 'mailto:ritik.kaintura007@gmail.com' },
                { icon: '💼', title: 'LinkedIn', value: 'Connect with me', link: '#' },
                { icon: '🐙', title: 'GitHub', value: 'View my work', link: '#' }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="block p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--accent)'
                  }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{item.icon}</span>
                    <div>
                      <h4 
                        className="font-semibold text-lg"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.title}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)' }}>{item.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { label: 'Response Time', value: '24h' },
                { label: 'Projects', value: '50+' },
                { label: 'Satisfaction', value: '100%' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl backdrop-blur-sm border"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--accent)'
                  }}
                >
                  <div 
                    className="text-2xl font-bold mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-xs"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-8 rounded-3xl backdrop-blur-sm border" style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--accent)'
              }}>
                {/* Name Input */}
                <div className="mb-6">
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--bg-surface-secondary)',
                      borderColor: 'var(--accent)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div className="mb-6">
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--bg-surface-secondary)',
                      borderColor: 'var(--accent)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div className="mb-6">
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--bg-surface-secondary)',
                      borderColor: 'var(--accent)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Textarea */}
                <div className="mb-6">
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all duration-300 resize-none"
                    style={{
                      backgroundColor: 'var(--bg-surface-secondary)',
                      borderColor: 'var(--accent)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-xl font-semibold text-lg relative overflow-hidden"
                  style={{
                    backgroundColor: themeName === 'light' ? '#2563EB' : '#0EA5E9',
                    color: '#ffffff'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-xl bg-green-500/20 border border-green-500"
                  >
                    <p className="text-green-400 text-center font-medium">
                      ✓ Message sent successfully!
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-xl bg-red-500/20 border border-red-500"
                  >
                    <p className="text-red-400 text-center font-medium">
                      ✗ Something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
