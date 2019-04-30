const withStylus = require('@zeit/next-stylus');

module.exports = withStylus({
  distDir: 'build',
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });
    config.module.rules.push({
      test: /\.(ttf)$/,
      use: {
        loader: 'file-loader',
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  },
});
