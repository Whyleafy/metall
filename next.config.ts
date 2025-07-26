const nextConfig = {
  output: 'export',
  // Уберите assetPrefix полностью для статики
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Важно для статических серверов
};

module.exports = nextConfig;

