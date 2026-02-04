const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/mfe_container/latest/', // TODO: replace with actual URL
    // filename: 'https://your-production-url.com/mfe_container/',
    },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe_container',
      remotes: {
        marketing: 'marketing@https://your-production-url.com/marketing/remoteEntry.js',// TODO: replace with actual URL
        // auth: 'auth@https://your-production-url.com/auth/remoteEntry.js',
        // dashboard: 'dashboard@https://your-production-url.com/dashboard/remoteEntry.js',
      },
      shared: packageJson.dependencies,
      // shared: {
      //   react: { singleton: true, eager: true, requiredVersion: '^18.0.0' },
      //   'react-dom': { singleton: true, eager: true, requiredVersion: '^18.0.0' },
      //   'react-router-dom': { singleton: true, eager: true, requiredVersion: '^6.0.0' },
      // },
    }),

  ],
};

module.exports = merge(commonConfig, prodConfig);   