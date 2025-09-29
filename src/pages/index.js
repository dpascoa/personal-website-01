import { useState, useEffect } from 'react';
import { Code2, Cloud, Brain, ArrowRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            DP
          </a>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Work</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              Get in Touch
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10">
            <div className="flex flex-col gap-4 px-6 py-6">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Work</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">About</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-center">
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <span className="text-sm text-blue-400">✨ Available for Projects</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Daniel Páscoa
            </span>
          </h1>

          <p className="text-2xl md:text-4xl font-bold mb-6 text-gray-300">
            Software Engineer & Digital Solutions Builder
          </p>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            I craft <span className="text-blue-400 font-semibold">fast, bold, and effective</span> digital solutions — from modern websites for local businesses to cloud automation and AI-powered applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#portfolio" className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-2">
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/5 hover:border-white/40 transition-all">
              Work With Me
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-6">
            <a href="https://github.com/dpascoa" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/danielpascoa" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hello@danielpascoa.com" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 relative" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              What I Do
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tailored solutions that drive results for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Websites for Local Businesses</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Mobile-first, lightning-fast websites that turn visitors into customers. SEO-optimized and conversion-focused.
              </p>
              <p className="text-blue-400 font-semibold">Starting from £350</p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cloud size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud & Automation</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Smart integrations, custom workflows, and cloud solutions that save time and reduce costs.
              </p>
              <p className="text-purple-400 font-semibold">Custom pricing</p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI & Data Solutions</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Practical AI-driven applications and data pipelines tailored to solve real business problems.
              </p>
              <p className="text-pink-400 font-semibold">Custom pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900" id="portfolio">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real projects showcasing technical expertise and business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <Code2 size={64} className="text-blue-400 opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Local Café Website</h3>
                <p className="text-gray-400 mb-4">
                  Demo business site with menu, gallery, and WhatsApp booking integration. Built for speed and conversions.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-400 hover:gap-3 transition-all font-semibold">
                  View Demo <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Brain size={64} className="text-purple-400 opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">RAG-Stack AI Search</h3>
                <p className="text-gray-400 mb-4">
                  Retrieval-Augmented Generation system with FastAPI, LangChain, and Streamlit UI for intelligent document search.
                </p>
                <a href="https://github.com/dpascoa/ragstack" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:gap-3 transition-all font-semibold">
                  GitHub Repo <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 overflow-hidden hover:border-pink-500/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center">
                <Cloud size={64} className="text-pink-400 opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">GoWatchdog</h3>
                <p className="text-gray-400 mb-4">
                  Real-time uptime monitoring application written in Go. Track website availability with instant alerts.
                </p>
                <a href="https://github.com/dpascoa/gowatchdog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-pink-400 hover:gap-3 transition-all font-semibold">
                  GitHub Repo <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6" id="about">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/0 p-12 rounded-3xl border border-white/10">
            <h2 className="text-4xl md:text-5xl font-black mb-8">About Me</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I'm Daniel Páscoa, a Software Engineer working at the intersection of cloud, data, and AI. With a passion for building elegant solutions to complex problems, I combine technical expertise with a business-focused mindset.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              I also help small businesses in Portugal & the UK build websites that convert visitors into customers. Every project is an opportunity to create something exceptional that drives real results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Ready to elevate your digital presence? Get in touch and let's make it happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="mailto:hello@danielpascoa.com" className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-2">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://wa.me/351910000000" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold text-lg bg-green-600 hover:bg-green-700 hover:shadow-xl hover:shadow-green-500/50 transition-all">
              WhatsApp
            </a>
            <a href="https://linkedin.com/in/danielpascoa" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/5 hover:border-white/40 transition-all">
              LinkedIn
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            Typically respond within 24 hours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Daniel Páscoa. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/dpascoa" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/danielpascoa" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@danielpascoa.com" className="text-gray-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
