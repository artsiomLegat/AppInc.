const loaderSassTheme = require('../loaders/loaderSassTheme');
const {themePath,stylePath} = require('../utils/paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    test: /\.s[ac]ss$/,
    // include: [themePath,stylePath],
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: true,
                reloadAll: true,
            }
        },
        "css-loader",
        "sass-loader",
    ]
};