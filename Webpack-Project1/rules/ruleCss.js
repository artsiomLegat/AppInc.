const {styleCssPath} = require('../utils/paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    test: /\.css$/,
    // include: [styleCssPath],
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            hmr: true,
            reloadAll: true,
        },
        "css-loader"
    ],
};