import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Send, Copy, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const email = "sonu.ic19@nsut.ac.in";

  // Initialize EmailJS
  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast({
      title: "Email Copied!",
      description: "Email address has been copied to clipboard."
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Check if EmailJS is configured
    if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      toast({
        title: "Configuration Missing",
        description: "Email service is not configured. Please contact the site owner.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: email
        }
      );

      if (response.status === 200) {
        toast({
          title: "Message Sent! ✨",
          description: "Thanks for reaching out. I'll get back to you soon!"
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error("Email error:", error);
      toast({
        title: "Failed to Send",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={ref} className="section-spacing bg-theme-bg py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-theme-text">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-theme-muted text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Email Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-2xl p-6 mb-8 flex items-center justify-between flex-wrap gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#00d4ff]/20 p-3 rounded-xl">
              <Mail className="w-6 h-6 text-[#d4af37]" />
            </div>
            <span className="text-lg text-theme-text font-medium">{email}</span>
          </div>
          <Button
            onClick={handleCopyEmail}
            className="bg-[#d4af37] hover:bg-[#d4af37]/90 text-[#1a1a2e] font-semibold"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Email
              </>
            )}
          </Button>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="glass-effect rounded-2xl p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-theme-text mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-theme-bg border border-theme-border rounded-xl text-theme-text placeholder-theme-muted focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-theme-text mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-theme-bg border border-theme-border rounded-xl text-theme-text placeholder-theme-muted focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-theme-text mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-theme-bg border border-theme-border rounded-xl text-theme-text placeholder-theme-muted focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all resize-none"
              placeholder="Tell me about your project or idea..."
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#d4af37] to-[#00d4ff] hover:from-[#d4af37]/90 hover:to-[#00d4ff]/90 text-[#1a1a2e] font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 mr-2 border-2 border-[#1a1a2e]/30 border-t-[#1a1a2e] rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;