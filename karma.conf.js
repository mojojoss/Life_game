// karma.conf.js
var webpack = require('webpack');
module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
        './node_modules/phantomjs-polyfill/bind-polyfill.js',
        './main/**/*.spec.js'
    ],

        preprocessors: {
            'main/**/*.js': ['babel'],
            'testing.webpack.js': ['webpack']
        },
        babelPreprocessor: {
            options: {
                presets: ['env'],
                sourceMap: 'inline'
            },
        },
        plugins: [
        'karma-mocha',
        'karma-chai',
        'karma-webpack', 'karma-phantomjs-launcher',
        'karma-mocha-reporter','karma-babel-preprocessor'
    ],
        // передаем конфигурацию webpack
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                }]

            }
        },
        resolve: {
            modulesDirectories: [
          'main',
          'node_modules'
        ],
            extensions: ['', '.json', '.js']
        },
        reporters: ['mocha'],

        mochaReporter: {
            colors: {
                error: 'bgRed'
            }
        },

        port: 9876,
        colors: true,
        autoWatch: true,
        singleRun: false,

        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS'],
        webpackMiddleware: {
            noInfo: true
        }
    });
};
