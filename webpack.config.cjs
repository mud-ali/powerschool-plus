const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    target: 'web',
    entry: {
        contentScript: './content_src/index.ts',
        // background: './src/background/index.ts',
        react: './src/main.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve('manifest.json'),
                to: path.resolve('dist')
            }]
        })
    ],
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', { 'runtime': 'automatic' }],
                            '@babel/preset-typescript'
                        ]
                    }
                }
            },
            { test: /\.css$/, use: 'css-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx','.js', '.json', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
};