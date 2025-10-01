export default function SiteMap() {
    // Placeholder component — XML is written in getServerSideProps
    return null;
}

export async function getServerSideProps({ res }) {
    const siteUrl = 'https://danielpascoa.com';
    const pages = ['/', '/thank-you/'];
    const urls = pages
        .map(
            (path) =>
                `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${path === '/' ? '1.0' : '0.5'}</priority>\n  </url>`
        )
        .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

    if (res) {
        res.setHeader('Content-Type', 'application/xml');
        res.statusCode = 200;
        res.write(xml);
        res.end();
    }

    return { props: {} };
}
