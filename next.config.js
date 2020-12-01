

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.BUNDLE_ANALYZE
})

module.exports = bundleAnalyzer({
  images: {
    domains: ['cdn11.bigcommerce.com'],
  },
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
  rewrites() {
    return [
      {
        source: '/:locale/checkout',
        destination: '/api/bigcommerce/checkout',
        locale: false
      },
      {
        source: '/checkout',
        destination: '/api/bigcommerce/checkout',
        locale: false
      },
      // The logout is also an action so this route is not required, but it's also another way
      // you can allow a logout!
      {
        source: '/:locale/logout',
        destination: '/api/bigcommerce/customers/logout?redirect_to=/',
        locale: false
      },
      {
        source: '/logout',
        destination: '/api/bigcommerce/customers/logout?redirect_to=/',
        locale: false
      },
      // Rewrites for /search
      {
        source: '/:locale/search',
        destination: '/search',
        locale: false
      },
      {
        source: '/:locale/search/:path*',
        destination: '/search',
        locale: false
      },
      {
        source: '/search/designers/:name',
        destination: '/search',
        locale: false
      },
      {
        source: '/search/designers/:name/:category',
        destination: '/search',
        locale: false
      },
      {
        // This rewrite will also handle `/search/designers`
        source: '/search/:category',
        destination: '/search',
        locale: false
      },
    ]
  },
});
