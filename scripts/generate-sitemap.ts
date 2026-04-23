import fs from 'fs';
import path from 'path';

const servicesContent = fs.readFileSync(path.resolve('./src/data/services.ts'), 'utf-8');
const blogContent = fs.readFileSync(path.resolve('./src/data/blog.ts'), 'utf-8');

const serviceSlugs = [...servicesContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
const blogSlugs = [...blogContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);

const SITE_URL = 'https://www.midentistabarcelona.com';

const staticRoutes = [
    '/',
    '/tratamientos',
    '/blog',
];

const dynamicServiceRoutes = serviceSlugs.map(slug => `/tratamientos/${slug}`);
const dynamicBlogRoutes = blogSlugs.map(slug => `/blog/${slug}`);

const allRoutes = [...staticRoutes, ...dynamicServiceRoutes, ...dynamicBlogRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap.trim());
console.log('Sitemap generated successfully in public/sitemap.xml');
