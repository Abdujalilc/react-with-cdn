const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        reactLibs: ['react', 'react-dom'],
        reduxLibs: ['redux', 'react-redux', '@reduxjs/toolkit']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: '[name]', // Export the libraries under a global variable
        libraryTarget: 'umd', // Universal Module Definition
        umdNamedDefine: true,
    },
};
