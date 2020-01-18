const paths = require('./utils/paths');
const {isDevelopment,} = require();

module.exports = {
  entry: require('./config/configEntry'),
  output: paths.outputPath,

}