import Head from "next/head";
import { Check, Phone, MessageCircle, Home } from "lucide-react";

const chimneyWhatsApp = "https://wa.me/message/PLACEHOLDER"; // Replace with real WhatsApp short link

export default function ChimneySweepDemo() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Head>
        <title>A C Taylor Chimney Sweep — Peterborough Demo</title>
        <meta
          name="description"
          content="HETAS-approved chimney sweep in Peterborough. Over 30 years’ experience. Domestic & commercial flues cleaned, CCTV inspection, certification."
        />
      </Head>

      {/* Header */}
      <header className="bg-black/95 border-b border-gray-800 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Home size={28} className="text-yellow-400" />
            <h1 className="text-xl font-bold">A C Taylor Chimney Sweep</h1>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:01733330449"
              className="flex items-center gap-2 text-green-400 font-semibold hover:text-green-300"
            >
              <Phone size={20} /> 01733 330449
            </a>
            <a
              href={chimneyWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-full hover:bg-green-500 transition"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative py-40 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617976207429-8b0d27c9a46b?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6 drop-shadow-lg">
            Keep Your Home Safe & Warm
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Trusted chimney sweep in Peterborough with over 30 years’ experience.
            Guild of Master Sweeps member, HETAS approved, fully insured.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:01733330449"
              className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-full font-semibold flex items-center gap-2"
            >
              <Phone size={18} /> Call Now
            </a>
            <a
              href={chimneyWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-20 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="bg-black/70 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-4xl font-bold text-center text-yellow-400 mb-12">
              Our Services
            </h3>
            <ul className="grid md:grid-cols-2 gap-6 text-gray-200">
              {[
                "Domestic chimney sweeping & cleaning",
                "Commercial & industrial flues",
                "CCTV inspections & smoke testing",
                "Bird nest removal & debris clearance",
                "Stainless liners, pots & cowls fitted",
                "All appliances: open fires, wood burners, stoves, AGAs",
              ].map((svc, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 bg-gray-800/80 p-4 rounded-lg"
                >
                  <Check className="text-green-400 mt-1" /> {svc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section
        className="py-20 relative text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604234502758-6d59f693dc7c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4">
            Why Choose A C Taylor?
          </h3>
          <p className="text-gray-200 mb-8">
            Family-run with over 30 years’ experience. Fully qualified (City &
            Guilds, HETAS, Guild of Master Sweeps) and trusted by major estates
            like Milton Hall, Elton Hall, and Peterborough City Council.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-gray-800 rounded-full">
              30+ Years Experience
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-full">
              Guild & HETAS Accredited
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-full">
              Fully Insured
            </span>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <h4 className="text-2xl font-bold mb-4 text-yellow-400">
          Areas We Cover
        </h4>
        <p className="text-gray-300">
          Peterborough & surrounding: Stamford, Spalding, March, Huntingdon,
          Oundle — plus further on request.
        </p>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1603021330659-bf2b40c8e00a?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-8 px-6 text-center">
          <h4 className="text-3xl font-bold mb-8 text-yellow-400">
            Testimonials
          </h4>
          {[
            {
              quote:
                "Very professional, gave advice on my old chimney and left everything spotless.",
              name: "S. Wright, Peterborough",
            },
            {
              quote:
                "CCTV check found a blockage, safely removed a bird’s nest and issued a certificate.",
              name: "J. Hall, Oundle",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-gray-800/70 p-6 rounded-lg border border-gray-700"
            >
              <p className="text-lg text-gray-200 mb-3">“{t.quote}”</p>
              <div className="text-sm text-gray-400">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} A C Taylor Chimney Sweep — Demo Website
        </p>
        <p className="mt-2 text-gray-400 text-sm">
          Serving Peterborough, Stamford, Oundle, Spalding, Huntingdon & nearby.
        </p>
      </footer>
    </div>
  );
}
