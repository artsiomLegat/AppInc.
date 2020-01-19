const {getParamAsNumber,getParamAsBoolean} = require('../utils/envParams');

module.exports = {
    hot: getParamAsBoolean('HOT_RELOAD'),
    port: getParamAsNumber('DEV_SERVER_PORT'),
    stats: 'errors-only',
    overlay: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Acces-Control-Allow-Credentials': 'true',
    },
    compress: true,
    watchOptions: {
        aggregateTimeout: getParamAsNumber('AGREGATION_TIMEOUT'),
    },
    clientLogLevel: 'none',
    historyApiFallback: true,
}