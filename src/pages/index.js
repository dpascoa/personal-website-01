import { useState, useEffect } from 'react';
import { Code2, ArrowRight, Mail, Menu, X, Check, Sparkles, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export const metadata = {
  title: 'Daniel Páscoa | Local Business Websites Delivered in 7 Days',
  description: 'Affordable, mobile-friendly websites for local businesses. Choose from clear packages starting at £399 with WhatsApp-first support and fast delivery.',
  keywords: [
    'local business websites',
    'affordable web design',
    'small business website packages',
    'web designer for small businesses',
    'fast website delivery',
    'daniel pascoa'
  ],
  authors: [{ name: 'Daniel Páscoa' }],
  creator: 'Daniel Páscoa',
  openGraph: {
    title: 'Daniel Páscoa | Affordable Websites for Local Businesses',
    description: 'Affordable, mobile-friendly websites for local businesses. Packages from £399 with WhatsApp-first support.',
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
    title: 'Daniel Páscoa | Local Business Websites Delivered in 7 Days',
    description: 'Affordable, mobile-friendly websites for local businesses. Packages from £399 with WhatsApp-first support.',
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
    addressCountry: 'GB',
  },
  priceRange: '£399-£1,499',
  description: 'Affordable website packages for local businesses with WhatsApp-first support and clear pricing.',
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
            <span className="text-sm text-blue-400">✨ Affordable websites ready in 7 days</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Local Business Websites
            </span>
            <span className="block text-3xl md:text-5xl text-gray-200 mt-2">
              Ready in 7 Days
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-200 uppercase tracking-[0.3em] mb-6"
          >
            Daniel Páscoa - Website Partner for Local Businesses
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Affordable, mobile-first websites with <span className="text-purple-400 font-semibold">clear pricing, no surprises</span>, and easy communication over WhatsApp or email from kickoff to launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#pricing" className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-2">
              Explore Packages
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
            className="mt-16 flex justify-center"
          >
            <a href="mailto:hello@danielpascoa.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-sm uppercase tracking-widest text-gray-200 hover:bg-white/10 transition-all">
              <Mail size={18} />
              Email me directly
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
              <h3 className="text-2xl font-bold mb-4">Built For Local Businesses</h3>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Restaurants, salons, trades, cafés, gyms & shops</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Clear storytelling that highlights your services</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Local SEO foundations to help you show up on Google</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Modern & Mobile-First</h3>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Fast, mobile-friendly layouts that convert</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>WhatsApp click-to-chat and email contact forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Designed to match your branding, colours and tone</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Clear Packages & Support</h3>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>Transparent packages with fixed pricing and clear timelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>Optional hosting, maintenance, and visibility support after launch</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>Stay in touch over WhatsApp, email, or quick calls</span>
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
              Packages & Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Pick the package that matches your business stage. No hidden fees, clear timelines, optional ongoing support.
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
                <h3 className="text-2xl font-bold mb-2">Starter Site</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">£399</span>
                  <span className="text-gray-500 text-sm">one-off</span>
                </div>
                <p className="text-gray-400 mt-2">Launch a modern, mobile-friendly site in just 7 days.</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">1-3 pages (Home, About, Contact)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Modern, mobile-friendly template</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">WhatsApp click-to-chat + email form</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Google Business Profile setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Content support + launch checklist</span>
                </li>
              </ul>

              <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                  <Zap size={16} /> 1 week delivery
                </span>
              </div>

              <a href="#contact" className="block w-full text-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/50">
                Book Starter Site
              </a>
            </motion.div>

            {/* Growth Package - Featured */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-3xl border-2 border-blue-500/50 relative hover:scale-105 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Growth Site</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">£799</span>
                  <span className="text-gray-500 text-sm">one-off</span>
                </div>
                <p className="text-gray-400 mt-2">Tell your full story with a branded, SEO-friendly site.</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Up to 6 pages (Home, Services, Gallery, About, Contact, Blog)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Custom look using your logo, colours, and tone</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">SEO basics: meta tags, Google submission, copy guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Social links, map embed, and enquiry forms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Content collection support + 2 revision rounds</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-200">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                  <Zap size={16} /> 2 week delivery
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full border border-blue-400/30 text-blue-200">
                  <Sparkles size={16} /> 12 months hosting included
                </span>
              </div>

              <a href="#contact" className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
                Book Growth Site
              </a>
            </motion.div>

            {/* Premium Package */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Premium Online Presence</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">£1,499</span>
                  <span className="text-gray-500 text-sm">one-off</span>
                </div>
                <p className="text-gray-400 mt-2">A fully customised digital HQ with advanced features.</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">8-12 bespoke pages shaped around your goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Online booking, menu, or shop integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Advanced local SEO + speed optimisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Monthly traffic report (first 3 months free)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Training session + launch day support</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-200">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                  <Zap size={16} /> 3-4 week delivery
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full border border-purple-400/30 text-purple-200">
                  <Sparkles size={16} /> 12 months hosting included
                </span>
              </div>

              <a href="#contact" className="block w-full text-center bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/50">
                Book Premium Site
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-16 max-w-3xl mx-auto"
          >
            <p className="text-gray-400 mb-4">Every package includes WhatsApp and email support from day one, copy guidance, and launch assistance so you're never left guessing.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Mobile-first design</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Free revisions until launch</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Analytics & SEO basics</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Domain & hosting guidance</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20"
          >
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/5 to-white/0 p-10 rounded-3xl border border-white/10">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-2">Ongoing Options (optional)</h3>
                <p className="text-gray-400">Keep growing after launch with flexible monthly support. Cancel anytime.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-2">Hosting + Maintenance</h4>
                  <p className="text-3xl font-black text-blue-300 mb-4">£25<span className="text-base text-gray-400 font-normal">/month</span></p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-blue-400 mt-0.5" />
                      <span>Domain, hosting & SSL management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-blue-400 mt-0.5" />
                      <span>Monthly updates, backups & security checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-blue-400 mt-0.5" />
                      <span>Minor content tweaks when you need them</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-2">Hosting + Visibility Support</h4>
                  <p className="text-3xl font-black text-purple-300 mb-4">£60<span className="text-base text-gray-400 font-normal">/month</span></p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-purple-400 mt-0.5" />
                      <span>Everything in Hosting + Maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-purple-400 mt-0.5" />
                      <span>Monthly on-page SEO tune-ups and analytics checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-purple-400 mt-0.5" />
                      <span>Quarterly refresh of existing content and offers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-purple-400 mt-0.5" />
                      <span>Performance report with practical next steps</span>
                    </li>
                  </ul>
                </div>
              </div>
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
              <p className="text-gray-400">Starter sites live in 7 days, larger builds within 4 weeks</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile-First</h3>
              <p className="text-gray-400">Optimised for phones, tablets, desktops and Google rankings</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Clear Pricing</h3>
              <p className="text-gray-400">Fixed packages with everything included - no hidden fees</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp-First Support</h3>
              <p className="text-gray-400">Easy communication via WhatsApp or email plus optional maintenance</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black" id="process">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              How Projects Run
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A clear, collaborative workflow that keeps you in the loop and launches on time.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {[{
              number: '01',
              title: 'Discovery Chat',
              description: 'A 30-minute call or WhatsApp chat to understand your business, goals, and budget.'
            }, {
              number: '02',
              title: 'Proposal Same Day',
              description: 'You pick a package, receive a written proposal with timeline, and sign digitally.'
            }, {
              number: '03',
              title: 'Content & Assets',
              description: 'Send over text, photos, and logos - or I source stock imagery and help write copy.'
            }, {
              number: '04',
              title: 'Build & Preview',
              description: 'Design and build your site, then share a live preview link for early feedback.'
            }, {
              number: '05',
              title: 'Feedback & Tweaks',
              description: 'One to two revision rounds to polish layout, messaging, and conversions.'
            }, {
              number: '06',
              title: 'Launch & Support',
              description: 'Connect your domain, go live, and optionally continue with hosting or SEO growth.'
            }].map((step) => (
              <motion.div key={step.number} variants={fadeInUp} className="bg-black/40 border border-white/10 rounded-3xl p-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
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
              I'm Daniel Páscoa, a software engineer who prefers working face-to-face with real businesses - restaurants, salons, tradespeople, cafés, gyms, and shops that deserve better than a dated website template.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I package the whole journey: clear pricing, fast delivery, WhatsApp-first communication, and hosting/SEO options after launch. You always know the cost, the timeline, and what happens next.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Every build blends modern design with a growth mindset, so your site does more than look good - it brings in enquiries, bookings, and repeat customers.
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
              Book a free 30-minute health check - we can chat over WhatsApp or jump on a quick call to map the right package for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="mailto:hello@danielpascoa.com" className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-2">
                <Mail size={20} />
                Email Me
              </a>
              <a href="https://wa.me/351910000000" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold text-lg bg-green-600 hover:bg-green-500/90 shadow-lg shadow-green-950/20 hover:shadow-green-500/30 transition-all border border-green-400/10">
                WhatsApp
              </a>
            </div>

            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <Check size={16} className="text-green-400" />
              <span>Same-day responses Monday to Friday</span>
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
            <a href="mailto:hello@danielpascoa.com" className="text-gray-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
