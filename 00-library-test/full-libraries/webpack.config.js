const path = require('path');

module.exports = {
    mode: 'development', // Set mode to development to disable minification
    entry: {
        /*react: 'react',
        reactDom: 'react-dom'*/
        ReduxToolkit: ['redux', '@reduxjs/toolkit']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: '[name]',
        libraryTarget: 'umd',
    },
    optimization: {
        minimize: false, // Disable minification
    },
    module: {
        rules: [
            // Add babel-loader rule for JSX files
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },
};
//npx webpack --config webpack.config.js