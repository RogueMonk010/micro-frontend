const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederatoinPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common.js')
const PackageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederatoinPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: PackageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)