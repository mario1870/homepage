

// next.config.js
module.exports = {
  experimental: {
    appDir: true,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**"
      }
    ]
  }
}
