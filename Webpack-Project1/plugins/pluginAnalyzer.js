const {BundleAnalyzer} =  require('webpack-bundle-analyzer');
const {getParamAsNumber} = require('../utils/envParams');

module.exports = new BundleAnalyzer({
    analyzerMode: 'server',
    analyzerHost: '127.0.0.1',
    analyzerPort: getParamAsNumber('BUNDLE_ANALYZER_PORT'),
    reportFilename: 'report.html',
    defaultSizes: 'parsed',
    openAnalyzer: false,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    statsOptions: null,
    logLevel: 'silent',
});



