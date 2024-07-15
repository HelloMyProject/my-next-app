/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        console.log("Custom rewrites are being applied");
        return [
            {
                source: '/dashboard',
                destination: '/modules/dashboard/pages/index',
            },
        ];
    },
};

export default nextConfig;
