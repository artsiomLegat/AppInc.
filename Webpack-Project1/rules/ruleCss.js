const {styleCssPath} = require('../utils/paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loaderExtractCss = require('../loaders/loaderExtractCss');

module.exports = {
    test: /\.css$/,
    // include: [styleCssPath],
    use: [
        "style-loader",
       loaderExtractCss,
        {
            loader:"css-loader",
            options: {
                sourceMap:  true,
            }
        }
    ],
};