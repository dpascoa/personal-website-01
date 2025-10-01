import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Code2, ArrowRight, Mail, Menu, X, Check, Sparkles, Zap, Globe, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const siteUrl = 'https://danielpascoa.com';
const whatsappLink = 'https://wa.me/message/PLACEHOLDER'; // Replace PLACEHOLDER with your WhatsApp Business short link

export const metadata = {
    title: 'Daniel Páscoa | Local Business Websites Delivered in 7 Days',
    description:
        'Affordable, mobile-friendly websites for local businesses. Choose from clear packages starting at £399 with WhatsApp-first support and fast delivery.',
    authors: [{ name: 'Daniel Páscoa' }],
    creator: 'Daniel Páscoa',
    robots: {
        index: false,
        follow: false
    }
};

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    // Simple contact form state
    const [form, setForm] = useState({ name: '', email: '', business: '', message: '', website: '' });
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fadeInUp = {
        hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 30 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: prefersReducedMotion ? 1 : 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.2
            }
        }
    };

    const t = (duration = 0.6, delay = 0) => (prefersReducedMotion ? { duration: 0 } : { duration, delay });

    async function handleSubmit(e) {
        e.preventDefault();
        if (form.website) return; // honeypot
        setSubmitting(true);
        setFormError(null);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: form.name, email: form.email, business: form.business, message: form.message })
            });
            if (!res.ok) throw new Error('Failed to submit');
            window.location.href = '/thank-you/';
        } catch (err) {
            setFormError('Something went wrong. Please try again or email hello@danielpascoa.com.');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="canonical" href={siteUrl} />
            </Head>

            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        DP
                    </a>

                    <div className="hidden md:flex gap-3 items-center">
                        <a href="#services" className="hover:text-blue-400 transition-colors px-2 py-2">
                            Services
                        </a>
                        <a href="#pricing" className="hover:text-blue-400 transition-colors px-2 py-2">
                            Pricing
                        </a>
                        <a href="#portfolio" className="hover:text-blue-400 transition-colors px-2 py-2">
                            Work
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 hover:bg-green-500/90 shadow-lg shadow-green-950/20 hover:shadow-green-500/30 transition-all border border-green-400/10"
                        >
                            <MessageCircle size={18} />
                            WhatsApp
                        </a>
                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                        >
                            Get a Free Quote
                        </a>
                    </div>

                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10">
                        <div className="flex flex-col gap-4 px-6 py-6">
                            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">
                                Services
                            </a>
                            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">
                                Pricing
                            </a>
                            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">
                                Work
                            </a>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-6 py-2 rounded-full text-center bg-green-600 hover:bg-green-500/90 shadow-lg shadow-green-950/20 transition-all"
                            >
                                WhatsApp
                            </a>
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-center"
                            >
                                Get a Free Quote
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-24">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className={`absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl ${prefersReducedMotion ? '' : 'animate-pulse'}`}
                    ></div>
                    <div
                        className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl ${prefersReducedMotion ? '' : 'animate-pulse'}`}
                        style={{ animationDelay: prefersReducedMotion ? undefined : '1s' }}
                    ></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={t(0.5)}
                        className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                    >
                        <span className="text-sm text-blue-300">✨ Ready in 7 days</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-purple-300">From £399</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={t(0.6, 0.1)}
                        className="text-5xl md:text-7xl font-black mb-4 leading-tight"
                    >
                        <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">Local Business Websites</span>
                        <span className="block text-3xl md:text-5xl text-gray-200 mt-2">Built Fast. Priced Fair.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={t(0.6, 0.3)}
                        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        Affordable, mobile-first websites with <span className="text-purple-400 font-semibold">clear pricing, no surprises</span>, and easy
                        communication over WhatsApp or email from kickoff to launch.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={t(0.6, 0.4)}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-green-600 hover:bg-green-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all flex items-center gap-2"
                        >
                            <MessageCircle size={20} />
                            WhatsApp me for a free quote
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                        </a>
                        <a
                            href="#pricing"
                            className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/5 hover:border-white/40 transition-all"
                        >
                            See Packages
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 px-6 bg-black" id="faq">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        transition={t(0.6)}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl font-black mb-6">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-400">Quick answers to common questions.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                q: 'How fast can you launch?',
                                a: 'Starter sites launch in about 7 days once content is confirmed. Growth and Premium take 2–4 weeks depending on scope.'
                            },
                            {
                                q: 'Do you handle domain and hosting?',
                                a: 'Yes. I can register or connect your domain and provide hosting. Growth and Premium include 12 months hosting.'
                            },
                            {
                                q: 'Do I need to provide photos and text?',
                                a: 'If you have them, great. Otherwise I help with copywriting and can use high‑quality stock images.'
                            },
                            {
                                q: 'What are the payment terms?',
                                a: 'Typically 50% to start and 50% on launch. Simple and transparent.'
                            },
                            {
                                q: 'Can I update the website later?',
                                a: 'Yes. You can request updates anytime. Maintenance and support packages are available.'
                            },
                            {
                                q: 'What if I don’t like the first version?',
                                a: 'We include revision rounds to make sure the site fits your brand and goals before launch.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-32 px-6 relative" id="services">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-black mb-6">What I Build</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Professional websites designed to grow your local business</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105"
                        >
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
                                    <span>Clear storytelling to highlight your services</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105"
                        >
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

                        <motion.div
                            variants={fadeInUp}
                            className="group relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all hover:scale-105"
                        >
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
                                    <span>Optional hosting, maintenance, and content support after launch</span>
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
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-black mb-6">Packages & Transparent Pricing</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Pick the package that matches your business stage. No hidden fees, clear timelines, optional ongoing support.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    >
                        {/* Starter Package */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all"
                        >
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

                            <a
                                href="#contact"
                                className="block w-full text-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/50"
                            >
                                Schedule Free Chat for Starter
                            </a>
                        </motion.div>

                        {/* Growth Package - Featured */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-3xl border-2 border-blue-500/50 relative hover:scale-105 transition-all"
                        >
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-sm font-bold">
                                MOST POPULAR
                            </div>

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">Growth Site</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">£799</span>
                                    <span className="text-gray-500 text-sm">one-off</span>
                                </div>
                                <p className="text-gray-400 mt-2">Tell your full story with a branded site.</p>
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

                            <a
                                href="#contact"
                                className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
                            >
                                Schedule Free Chat for Growth
                            </a>
                        </motion.div>

                        {/* Premium Package */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all"
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">Premium Online Presence</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                        £1,499
                                    </span>
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
                                    <span className="text-gray-300">Speed optimisation</span>
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

                            <a
                                href="#contact"
                                className="block w-full text-center bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/50"
                            >
                                Schedule Free Chat for Premium
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center mt-16 max-w-3xl mx-auto"
                    >
                        <p className="text-gray-400 mb-4">
                            Every package includes WhatsApp and email support from day one, copy guidance, and launch assistance so you're never left guessing.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Mobile-first design</span>
                            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Free revisions until launch</span>
                            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Analytics basics</span>
                            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Domain & hosting guidance</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
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
                                    <p className="text-3xl font-black text-blue-300 mb-4">
                                        £25<span className="text-base text-gray-400 font-normal">/month</span>
                                    </p>
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
                                    <h4 className="text-xl font-semibold mb-2">Hosting + Support</h4>
                                    <p className="text-3xl font-black text-purple-300 mb-4">
                                        £60<span className="text-base text-gray-400 font-normal">/month</span>
                                    </p>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li className="flex items-start gap-2">
                                            <Check size={18} className="text-purple-400 mt-0.5" />
                                            <span>Everything in Hosting + Maintenance</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check size={18} className="text-purple-400 mt-0.5" />
                                            <span>Monthly content refreshes</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check size={18} className="text-purple-400 mt-0.5" />
                                            <span>Quarterly refresh of existing content and offers</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-6">These are optional. You can start without them and add later.</p>
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
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-black mb-6">Example Builds</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            As a new service, I'm building my portfolio—your project could be next! See these examples of what I deliver.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="group bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all hover:scale-105"
                        >
                            <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                <Code2 size={64} className="text-blue-400 opacity-50" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">Café Sunset — Example</h3>
                                <p className="text-gray-400 mb-4">
                                    Modern café website with menu, gallery, and WhatsApp booking. Mobile-optimized with fast loading.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Menu</span>
                                    <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Gallery</span>
                                    <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Booking</span>
                                </div>
                                <a href="#contact" className="inline-flex items-center gap-2 text-blue-400 hover:gap-3 transition-all font-semibold">
                                    View Example <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="group bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all hover:scale-105"
                        >
                            <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                                <Sparkles size={64} className="text-purple-400 opacity-50" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">Bella Beauty — Example</h3>
                                <p className="text-gray-400 mb-4">
                                    Elegant salon website with service listings, online booking calendar, and before/after gallery.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Booking</span>
                                    <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Gallery</span>
                                    <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Pricing</span>
                                </div>
                                <a href="#contact" className="inline-flex items-center gap-2 text-purple-400 hover:gap-3 transition-all font-semibold">
                                    View Example <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="group bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 overflow-hidden hover:border-pink-500/50 transition-all hover:scale-105"
                        >
                            <div className="h-48 bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center">
                                <Zap size={64} className="text-pink-400 opacity-50" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">Silva Plumbing — Example</h3>
                                <p className="text-gray-400 mb-4">Professional tradesman site with project portfolio, and instant quote request form.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full">Portfolio</span>
                                    <span className="text-xs px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full">Quote Form</span>
                                </div>
                                <a href="#contact" className="inline-flex items-center gap-2 text-pink-400 hover:gap-3 transition-all font-semibold">
                                    View Example <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="group bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 overflow-hidden hover:border-gray-500/50 transition-all hover:scale-105"
                        >
                            <div className="h-48 bg-gradient-to-br from-gray-700/20 to-gray-900/20 flex items-center justify-center">
                                <Globe size={64} className="text-gray-400 opacity-60" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">A C Taylor Chimney Sweep — Demo</h3>
                                <p className="text-gray-400 mb-4">
                                    A modern facelift for Peterborough’s trusted chimney sweep: clean service list, trust elements, and simple WhatsApp-first
                                    contact.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-3 py-1 bg-gray-600/20 text-gray-300 rounded-full">Chimney</span>
                                    <span className="text-xs px-3 py-1 bg-gray-600/20 text-gray-300 rounded-full">Local</span>
                                    <span className="text-xs px-3 py-1 bg-gray-600/20 text-gray-300 rounded-full">Demo</span>
                                </div>
                                <a
                                    href="/chimney_sweep_website.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white hover:gap-3 transition-all font-semibold"
                                >
                                    View Demo <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-16"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
                        >
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
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-black mb-6">Why Work With Me?</h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
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
                            <p className="text-gray-400">Optimised for phones, tablets, desktops</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Sparkles size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Clear Pricing</h3>
                            <p className="text-gray-400">Fixed packages with everything included — no hidden fees</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageCircle size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">WhatsApp-First Support</h3>
                            <p className="text-gray-400">Easy communication via WhatsApp or email plus optional maintenance</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Process Section (Simplified) */}
            <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black" id="process">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-black mb-6">How It Works</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">A simple 3-step workflow to keep things clear and launch on time.</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid gap-8 md:grid-cols-3"
                    >
                        {[
                            {
                                number: '01',
                                title: 'Chat & Plan',
                                description: 'WhatsApp or call to understand your goals, pick a package, and agree a timeline.'
                            },
                            {
                                number: '02',
                                title: 'Build & Preview',
                                description: 'I design and build your site, then share a live preview for early feedback.'
                            },
                            {
                                number: '03',
                                title: 'Launch & Support',
                                description: 'Connect your domain, go live, and optionally add hosting/support.'
                            }
                        ].map((step) => (
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
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-white/5 to-white/0 p-12 rounded-3xl border border-white/10"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-8">About Me</h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                            I'm Daniel Páscoa, a website specialist for local businesses — restaurants, salons, tradespeople, cafés, gyms, and shops that
                            deserve better than a dated template.
                        </p>
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                            I package the whole journey: clear pricing, fast delivery, WhatsApp-first communication, and hosting/content options after launch.
                            You always know the cost, the timeline, and what happens next.
                        </p>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Every build blends modern design with a growth mindset, so your site does more than look good — it brings in enquiries, bookings,
                            and repeat customers.
                        </p>
                        <p className="text-sm text-gray-500 mt-6">Based in the UK • Serving local businesses nationwide</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-32 px-6 bg-black" id="contact">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp} transition={t(0.6)}>
                        <h2 className="text-5xl md:text-6xl font-black mb-6">Ready to Grow Your Business?</h2>
                        <p className="text-xl text-gray-400 mb-12">
                            Book a free 30-minute health check — we can chat over WhatsApp or jump on a quick call to map the right package for you.
                        </p>

                        {/* Simple contact form */}
                        <form
                            onSubmit={handleSubmit}
                            className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 md:p-8 text-left mx-auto max-w-3xl mb-8"
                        >
                            {formError && <div className="mb-4 text-sm text-red-300">{formError}</div>}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm text-gray-300 mb-1">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="business" className="block text-sm text-gray-300 mb-1">
                                        Business Name
                                    </label>
                                    <input
                                        id="business"
                                        name="business"
                                        value={form.business}
                                        onChange={(e) => setForm({ ...form, business: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="message" className="block text-sm text-gray-300 mb-1">
                                        What do you need?
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        required
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>
                                {/* Honeypot */}
                                <div className="hidden" aria-hidden="true">
                                    <label htmlFor="website">Website</label>
                                    <input id="website" name="website" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold disabled:opacity-60"
                                >
                                    {submitting ? 'Sending…' : 'Send Message'}
                                </button>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-500 font-semibold"
                                >
                                    <MessageCircle size={18} className="mr-2" /> WhatsApp
                                </a>
                                <p className="text-xs text-gray-500">By submitting, you agree to be contacted about your enquiry.</p>
                            </div>
                        </form>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <a
                                href="mailto:hello@danielpascoa.com"
                                className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-2"
                            >
                                <Mail size={20} />
                                Email Me
                            </a>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-full font-semibold text-lg bg-green-600 hover:bg-green-500/90 shadow-lg shadow-green-950/20 hover:shadow-green-500/30 transition-all border border-green-400/10"
                            >
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
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Daniel Páscoa. All rights reserved.</p>
                    <div className="flex gap-6 items-center">
                        <span className="text-gray-500 text-sm hidden sm:inline">Based in the UK • Serving nationwide</span>
                        <a href="mailto:hello@danielpascoa.com" className="text-gray-500 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm">Privacy: Your info stays private—no sharing or tracking.</p>
                </div>
            </footer>

            {/* Floating WhatsApp Button (Persistent) */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-lg shadow-green-900/30 z-50 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
            >
                <MessageCircle size={28} />
            </a>
        </div>
    );
}
