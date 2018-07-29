'use strict';

const { resolve, join } = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const ENV = process.argv.find(arg => arg.includes('production'))
  ? 'production'
  : 'development';
const OUTPUT_PATH = ENV === 'production' ? resolve('dist') : resolve('src');
const INDEX_TEMPLATE = resolve('./src/index.html');

const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';

const assets = [
  {
    from: resolve('./src/assets/favicon.ico'),
    to: resolve('dist/assets/')
  },
  {
    from: resolve('./src/assets/logo.svg'),
    to: resolve('dist/assets/')
  },
  {
    from: resolve('./src/assets/github.svg'),
    to: resolve('dist/assets/')
  }
];

const polyfills = [
  {
    from: resolve(`${webcomponentsjs}/webcomponents-*.js`),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  },
  {
    from: resolve(`${webcomponentsjs}/bundles/*.js`),
    to: join(OUTPUT_PATH, 'vendor', 'bundles'),
    flatten: true
  },
  {
    from: resolve(`${webcomponentsjs}/custom-elements-es5-adapter.js`),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  },
  {
    from: resolve('./node_modules/whatwg-fetch/fetch.js'),
    to: join(OUTPUT_PATH, 'vendor')
  },
  {
    from: resolve('./node_modules/promise-polyfill/dist/polyfill.min.js'),
    to: join(OUTPUT_PATH, 'vendor')
  }
];

const helpers = [
  {
    from: resolve('./src/vendor/babel-helpers.min.js'),
    to: join(OUTPUT_PATH, 'vendor')
  },
  {
    from: resolve('./src/vendor/regenerator-runtime.min.js'),
    to: join(OUTPUT_PATH, 'vendor')
  }
];

const commonConfig = merge([
  {
    entry: './src/lit-app.js',
    output: {
      path: OUTPUT_PATH,
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          // We need to transpile Polymer, do not exclude node_modules
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: true,
                extends: join(__dirname + '/.babelrc'),
                cacheDirectory: true,
                envName: ENV
              }
            }
          ]
        }
      ]
    }
  }
]);

const developmentConfig = merge([
  {
    devtool: 'cheap-module-source-map',
    plugins: [
      new CopyWebpackPlugin(polyfills),
      new HtmlWebpackPlugin({
        template: INDEX_TEMPLATE
      })
    ],

    devServer: {
      contentBase: OUTPUT_PATH,
      compress: true,
      overlay: true,
      port: 3000,
      historyApiFallback: true,
      host: 'localhost', // Defaults to `localhost`
      proxy: {
        '/api': {
          target: 'http://localhost:8000/',
          secure: false
        },
        '/auth': {
          target: 'http://localhost:8000/',
          secure: false
        }
      }
    }
  }
]);

const productionConfig = merge([
  {
    devtool: 'nosources-source-map',
    plugins: [
      new CleanWebpackPlugin([OUTPUT_PATH], { verbose: true }),
      new CopyWebpackPlugin([...polyfills, ...helpers, ...assets]),
      new HtmlWebpackPlugin({
        template: INDEX_TEMPLATE,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: true
        }
      }),
      new CompressionPlugin({ test: /\.js$/ })
    ]
  }
]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
