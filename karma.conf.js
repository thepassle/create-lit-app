const { join } = require('path');


module.exports = function(config) {
  config.set({
    basePath: '',
    singleRun: true,
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha'],

    files: [
      {
        pattern: 'node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js',
        watched: false
      },
      {
        pattern: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',
        watched: false
      },
      'test/index.js'
    ],

    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      },
      chai: {
        includeStack: true
      }
    },
    webpack: {
      devtool: 'inline-source-map',
      mode: 'development',
      module: {
        rules: [{
            use: [
              {
                loader: 'babel-loader',
                options: {
                  babelrc: true,
                  extends: join(__dirname + '/.babelrc'),
                  cacheDirectory: true,
                  envName: 'develop'
                }
              }
            ]
          }
        ]
      }
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    }
  });
};