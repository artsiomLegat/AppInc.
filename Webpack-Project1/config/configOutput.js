const {outputPath} = require('../utils/paths');
const {getParam,isProduction} = require('../utils/envParams');

let publicUrl = getParam('PUBLIC_URL');
publicUrl = publicUrl === 'false'? '': publicUrl;

module.exports = {
    path: outputPath,
    filename: isProduction? '[name].[contenthash].bundle.js':'[name].[chunkhash].bundle.js]',
    pathinfo: false,
    publicPath: `${publicUrl}/`,
};
