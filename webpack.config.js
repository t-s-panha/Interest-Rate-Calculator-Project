const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'production',
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'favicon.ico' },
                { from: 'index.html' },
            ],
        }),
    ],
};
