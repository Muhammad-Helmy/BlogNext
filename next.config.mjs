/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      console.log("Redirects are being set up!"); // Log ini untuk memastikan fungsi dijalankan
      return [
        {
          source: '/admin',
          destination: '/admin/blogList',
          permanent: false,
        },
      ];
    },
  };
  
  export default nextConfig;
  