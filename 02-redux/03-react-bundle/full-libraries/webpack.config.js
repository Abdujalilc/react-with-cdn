const path = require('path');

module.exports = {
    entry: {
        react: 'react',
        reactDom: 'react-dom'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: '[name]',
        libraryTarget: 'umd',
    },
};
//npx webpack --config webpack.config.js