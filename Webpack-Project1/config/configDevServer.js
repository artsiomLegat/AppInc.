const {getParamAsNumber,getParamAsBoolean} = require('../utils/envParams');
const paths = require('../utils/paths');
const path = require('path');

module.exports = {
    // hot: getParamAsBoolean('HOT_RELOAD'),
    // port: getParamAsNumber('DEV_SERVER_PORT'),
    port: 8083,
    hot: true,
    open: true,
    // publicPath: path.resolve(paths.rootPath,"/frontEnd/src/"),
    // contentBase: path.resolve(paths.rootPath,'dist'),
    // contentBase: "dist",
    // stats: 'errors-only',
    // overlay: true,
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Acces-Control-Allow-Credentials': 'true',
    // },
    // compress: true,
    // watchOptions: {
    //     aggregateTimeout: getParamAsNumber('AGREGATION_TIMEOUT'),
    //     aggregateTimeout: 0,
    // },
    // clientLogLevel: 'none',
    // historyApiFallback: true,
};