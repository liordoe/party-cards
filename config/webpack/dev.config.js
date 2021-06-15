const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const rootPath = process.env.PWD;

module.exports = {
    target: 'web',
    mode: 'development',
    devtool: 'eval-source-map',
    entry: path.resolve(rootPath, 'src', 'index.tsx'),
    output: {
        filename: 'app.js',
        path: path.resolve(rootPath, 'build'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
        alias: {
            '~': path.resolve(rootPath, 'src'),
            assets: path.resolve(rootPath, 'assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html'),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'assets',
                    to: path.resolve('build', 'assets'),
                    noErrorOnMissing: true
                },
            ],
        }),
    ],
    devServer: {
        contentBase: path.join(rootPath, 'build'),
        compress: false,
        port: 3000,
    },
};
