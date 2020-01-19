const loaderCss = require('../loaders/loaderCss');
const loaderStyle = require('../loaders/loaderStyle');
const loaderPostcss = require('../loaders/loaderPostcss');
const loaderExtractCss = require('../loaders/loaderExtractCss');

const {sourcePath,themePath} = require('../utils/paths');
const {getParamAsBoolean} = require('../utils/envParams');

module.exports = {
    test: /\.sass$/,
    include: [sourcePath],
    exclude: [themePath],
    use: [
        !getParamAsBoolean('CSS_EXTRACT') && loaderStyle,
        getParamAsBoolean('CSS_EXTRACT') && loaderExtractCss,
        loaderCss,
        loaderPostcss,
    ].filter(Boolean),
};
