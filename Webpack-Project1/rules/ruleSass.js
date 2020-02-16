const loaderCss = require('../loaders/loaderCss');
const loaderStyle = require('../loaders/loaderStyle');
const loaderPostcss = require('../loaders/loaderPostcss');
const loaderExtractCss = require('../loaders/loaderExtractCss');
const loaderSass = require('../loaders/loaderSass');
const {sourcePath,themePath} = require('../utils/paths');
const {getParamAsBoolean} = require('../utils/envParams');

module.exports = {
    test: /\.s[ac]ss$/,
    // include: [sourcePath],
    // exclude: [themePath],
    use: [
        // !getParamAsBoolean('CSS_EXTRACT') && loaderStyle,
        // getParamAsBoolean('CSS_EXTRACT') && loaderExtractCss,
        // loaderStyle,
        loaderExtractCss,
        loaderCss,
        // loaderPostcss,
        loaderSass,
    ],
};
