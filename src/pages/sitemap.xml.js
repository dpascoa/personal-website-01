export default function handler(req, res) {
  const siteUrl = 'https://danielpascoa.com';
  const pages = ['/', '/thank-you/'];
  const urls = pages
    .map((path) => `  <url><loc>${siteUrl}${path}</loc><changefreq>weekly</changefreq><priority>${path === '/' ? '1.0' : '0.5'}</priority></url>`) 
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
}

