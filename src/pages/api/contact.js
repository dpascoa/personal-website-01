export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { name, email, business, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    // Basic naive validation
    const emailOk = /.+@.+\..+/.test(email);
    if (!emailOk) return res.status(400).json({ error: 'Invalid email' });

    // In production, integrate email or CRM here (e.g., Nodemailer, Resend, Airtable)
    console.log('[Contact] New enquiry:', { name, email, business, message, at: new Date().toISOString() });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('[Contact] Error:', e);
    return res.status(500).json({ error: 'Server error' });
  }
}

