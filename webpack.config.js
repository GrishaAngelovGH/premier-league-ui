const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        alias: {
            'components': path.resolve(__dirname, 'src/components/'),
            'images': path.resolve(__dirname, 'src/images/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            favicon: path.resolve(__dirname, 'public/favicon.ico'),
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        }),
        new InterpolateHtmlPlugin({
            'PUBLIC_URL': '.'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public/manifest.json',
                    to: '.'
                },
                {
                    from: 'public/logo192.png',
                    to: '.'
                },
                {
                    from: 'public/logo512.png',
                    to: '.'
                }
            ]
        })
    ]
}