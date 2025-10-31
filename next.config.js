/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    images: {
        domains: ['i.scdn.co', 'mosaic.scdn.co', 'wrapped-images.spotifycdn.com', 'lineup-images.scdn.co', 'newjams-images.scdn.co', 'scontent-ams4-1.xx.fbcdn.net'],
    },
    rewrites: () => {
        return [
            {
                source: "/healthz",
                destination: "/api/health"
            }
        ]
    },
};

module.exports = nextConfig;
