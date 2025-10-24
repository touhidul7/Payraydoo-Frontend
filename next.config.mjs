/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    output: "export",
    images: {
        domains: ['*'],
        unoptimized: true,
    },

    
};

export default nextConfig;
