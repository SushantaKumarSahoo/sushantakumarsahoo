/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.w3.org",
        // port: '3000',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        // port: '3000',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "www.mysql.com",
        // port: '3000',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "static-00.iconduck.com",
        // port: '3000',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "adware-technologies.s3.amazonaws.com",
        // port: '3000',
        // pathname: '/account123/**',
      },
    ],
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
