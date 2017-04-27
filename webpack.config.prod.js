var webpack = require('webpack');
var path = require("path");


module.exports = {
    context: path.resolve('resources'),
    entry: [
        './assets/js/app.js'
    ],
    output: {
        path: path.resolve('public/js'),
        publicPath: 'http://www.kevinyoukhana.com/js/',
        filename: "app.js"
    },


    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|ttf)$/,
                loader: 'url-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },

            {
                test: /\.vue$/,
                loader: ['vue-loader']
            }

        ]
    }
}

