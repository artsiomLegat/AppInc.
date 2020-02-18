const {styleCssPath} = require('../utils/paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loaderExtractCss = require('../loaders/loaderExtractCss');
const loaderCss = require('../loaders/loaderCss');

module.exports = {
    test: /\.css$/,
    // include: [styleCssPath],
    use: [
        "style-loader",
       loaderExtractCss,
       loaderCss,
    ],
};