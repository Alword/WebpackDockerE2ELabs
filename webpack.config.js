const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
    },
    module: {

        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};