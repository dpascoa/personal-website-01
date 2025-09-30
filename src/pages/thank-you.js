import Head from 'next/head';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <Head>
        <title>Thank You | Daniel Páscoa</title>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-black mb-4">Thanks for reaching out!</h1>
        <p className="text-gray-400 mb-8">I received your message and will get back to you the same day (Mon–Fri). If it’s urgent, feel free to email hello@danielpascoa.com.</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold">
          Return to homepage
        </Link>
      </div>
    </div>
  );
}

