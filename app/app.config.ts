export default defineAppConfig({
  title: 'AAG',
  email: 'xjoylu@gmail.com',
  github: 'https://github.com/xjoylu',
  twitter: 'https://x/xjoylu',
  telegram: 'https://ygo.cc',
  blog: 'https://lcc.cc',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
