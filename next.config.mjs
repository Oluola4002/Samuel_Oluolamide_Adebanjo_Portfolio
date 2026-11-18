/** @type {import('next').NextConfig} */
const nextConfig={reactStrictMode:true,poweredByHeader:false,compress:true,images:{formats:["image/avif","image/webp"],deviceSizes:[390,640,828,1080,1440,1920]},experimental:{optimizePackageImports:["@hugeicons/core-free-icons"]}};
export default nextConfig;
