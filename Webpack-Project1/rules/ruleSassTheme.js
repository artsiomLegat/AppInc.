const loaderSassTheme = require('../loaders/loaderSassTheme');
const {themePath} = require('../utils/paths');

module.exports = {
    test: /\.sass$/,
    include: [themePath],
    use: [loaderSassTheme]
};