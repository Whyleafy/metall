const nextConfig = {
  output: 'export',
  // Убрать ./ и использовать только для production
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Добавить для next/font
  experimental: {
    optimizeFonts: true,
  }
};

module.exports = nextConfig;
