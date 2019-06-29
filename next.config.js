const withStylus = require('@zeit/next-stylus');
const webpack = require('webpack');
const { parsed: localEnv } = require('dotenv').config();

module.exports = withStylus({
  distDir: 'build',
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
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
