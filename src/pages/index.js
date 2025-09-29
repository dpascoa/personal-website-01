import { useState, useEffect } from 'react';
import { Code2, ArrowRight, Github, Linkedin, Mail, Menu, X, Check, Sparkles, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export const metadata = {
  title: 'Daniel Páscoa | Website Developer for Local Businesses in Portugal & UK',
  description: 'Fast, bold, and effective websites for local businesses. Mobile-first designs that convert visitors into customers. Starting from £350. Serving Portugal & UK.',
  keywords: ['web developer Portugal', 'website design UK', 'local business websites', 'freelance web developer', 'affordable websites', 'mobile-first design'],
  authors: [{ name: 'Daniel Páscoa' }],
  creator: 'Daniel Páscoa',
  openGraph: {
    title: 'Daniel Páscoa | Website Developer for Local Businesses',
    description: 'Fast, bold, and effective websites for local businesses. Starting from £350.',
    url: 'https://danielpascoa.com',
    siteName: 'Daniel Páscoa',
    images: [
      {
        url: 'https://danielpascoa.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Páscoa | Website Developer for Local Businesses',
    description: 'Fast, bold, and effective websites that convert. Starting from £350.',
    images: ['https://danielpascoa.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Daniel Páscoa - Web Development',
  image: 'https://danielpascoa.com/og-image.png',
  '@id': 'https://danielpascoa.com',
  url: 'https://danielpascoa.com',
  telephone: '+351910000000',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PT',
  },
  sameAs: [
    'https://linkedin.com/in/danielpascoa',
    'https://github.com/dpascoa',
  ],
  priceRange: '£350-£2000',
  description: 'Professional website development for local businesses in Portugal and UK',
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            DP
          </a>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Work</a>
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
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Work</a>
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
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
          >
            <span className="text-sm text-blue-400">✨ Available for New Projects</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Daniel Páscoa
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold mb-6 text-gray-300"
          >
            Websites That Get You More Customers
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I help local businesses in <span className="text-blue-400 font-semibold">Portugal & UK</span> grow with <span className="text-purple-400 font-semibold">fast, bold, and effective</span> websites that turn visitors into paying customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#pricing" className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-2">
              View Pricing
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#portfolio" className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/5 hover:border-white/40 transition-all">
              See Examples
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex justify-center gap-6"
          >
            <a href="https://github.com/dpascoa" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/danielpascoa" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hello@danielpascoa.com" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 relative" id="services">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              What I Build
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional websites designed to grow your local business
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Restaurant & Café Websites</h3>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Online menus with photos & prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>WhatsApp booking integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Gallery of dishes & atmosphere</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Google Maps integration</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Service Business Sites</h3>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Salons, gyms, beauty clinics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Service listings & pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Online booking calendars</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Before/after galleries</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Trade & Portfolio Sites</h3>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>Plumbers, electricians, builders</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>Project portfolio & testimonials</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>Contact forms & quote requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>Service area maps</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900" id="pricing">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the package that fits your business. All include mobile-first design & free revisions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Starter Package */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">£350</span>
                  <span className="text-gray-500">- £750</span>
                </div>
                <p className="text-gray-400 mt-2">Perfect for getting online fast</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">1-3 pages (Home, About, Contact)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Mobile-first responsive design</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Contact form integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Basic SEO setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">1 week delivery</span>
                </li>
              </ul>

              <a href="#contact" className="block w-full text-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/50">
                Get Started
              </a>
            </motion.div>

            {/* Business Package - Featured */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-3xl border-2 border-blue-500/50 relative hover:scale-105 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Business</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">£1,000</span>
                  <span className="text-gray-500">- £2,000</span>
                </div>
                <p className="text-gray-400 mt-2">Everything you need to grow</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">5-10 pages (all features)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Custom design & animations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Booking/calendar integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">WhatsApp & social integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Advanced SEO & analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">2 weeks delivery</span>
                </li>
              </ul>

              <a href="#contact" className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
                Get Started
              </a>
            </motion.div>

            {/* Custom Package */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Custom</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">£2,500</span>
                  <span className="text-gray-500">+</span>
                </div>
                <p className="text-gray-400 mt-2">For complex requirements</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Unlimited pages & features</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">E-commerce integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Custom functionality</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Third-party API integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Custom timeline</span>
                </li>
              </ul>

              <a href="#contact" className="block w-full text-center bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/50">
                Let's Talk
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-4">✨ All packages include:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Free revisions</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Mobile-first design</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Fast loading speeds</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">SEO optimized</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 px-6 bg-gray-900" id="portfolio">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Recent Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Examples of websites I've built for local businesses
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="group bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <Code2 size={64} className="text-blue-400 opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Café Sunset</h3>
                <p className="text-gray-400 mb-4">
                  Modern café website with menu, gallery, and WhatsApp booking. Mobile-optimized with fast loading.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Menu</span>
                  <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Gallery</span>
                  <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Booking</span>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-blue-400 hover:gap-3 transition-all font-semibold">
                  View Demo <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Sparkles size={64} className="text-purple-400 opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Bella Beauty Salon</h3>
                <p className="text-gray-400 mb-4">
                  Elegant salon website with service listings, online booking calendar, and before/after gallery.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Booking</span>
                  <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Gallery</span>
                  <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Pricing</span>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-purple-400 hover:gap-3 transition-all font-semibold">
                  View Demo <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 overflow-hidden hover:border-pink-500/50 transition-all hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center">
                <Zap size={64} className="text-pink-400 opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Silva Plumbing</h3>
                <p className="text-gray-400 mb-4">
                  Professional tradesman site with project portfolio, testimonials, and instant quote request form.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full">Portfolio</span>
                  <span className="text-xs px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full">Reviews</span>
                  <span className="text-xs px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full">Quote Form</span>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-pink-400 hover:gap-3 transition-all font-semibold">
                  View Demo <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">Want to see your business here?</p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
              Start Your Project <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Why Work With Me?
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-400">Most projects completed in 1-2 weeks</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile-First</h3>
              <p className="text-gray-400">Perfect on all devices, from phones to desktops</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Design</h3>
              <p className="text-gray-400">Bold, professional designs that stand out</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Revisions</h3>
              <p className="text-gray-400">Unlimited changes until you're 100% happy</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black" id="about">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white/5 to-white/0 p-12 rounded-3xl border border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">About Me</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I'm Daniel Páscoa, a Software Engineer with a passion for helping local businesses succeed online. After working with cloud technologies and AI systems, I realized many small businesses struggle to get a professional web presence that actually brings in customers.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              That's why I focus exclusively on building fast, effective websites for local businesses in Portugal & the UK. Every site I build is designed with one goal: turning your visitors into paying customers.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              I combine technical expertise with a business-focused mindset. Your website isn't just about looking good — it's about growing your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-black" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Let's build a website that brings you more customers. Get in touch today for a free consultation.
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

            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <Check size={16} className="text-green-400" />
              <span>Typically respond within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 bg-black">
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