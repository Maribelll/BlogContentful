module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "utils"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images: {
    domains: ["images.ctfassets.net"],
    loader: "akamai",
    path: "",
  },
  assetPrefix: "/",
  trailingSlash: true,
};
