

// next.config.js
module.exports = {
  experimental: {
    appDir: true,
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*', // hier wird der Ziel-URL definiert
      },
    ]
  },
}
