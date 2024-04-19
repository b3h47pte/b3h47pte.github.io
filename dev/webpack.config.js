const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../', 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                        },
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ],
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            '@app':  path.resolve(__dirname, 'src'),
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
        }),
    ],
};