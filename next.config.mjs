/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://localhost:1337/api/:path*", // Проксіруємо всі запити до Strapi
            },
        ];
    },
};

export default nextConfig;

