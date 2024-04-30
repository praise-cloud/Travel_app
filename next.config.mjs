/** @type {import('next').NextConfig} */
const nextConfig = {
    // for deployment
    output: 'export', // this will export all our static pages
    images: {unoptimized: true} // it will help to speed up our website
};

export default nextConfig;
