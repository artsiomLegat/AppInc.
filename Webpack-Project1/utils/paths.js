const path = require('path');

module.exports = {
    rootPath: path.resolve(__dirname,'../../'),
    outputPath: path.resolve(__dirname,'../../dist'),
    sourcePath: path.resolve(__dirname,'../../frontEnd/src/'),
    inputPath: path.resolve(__dirname,'../../frontEnd/src/index.js'),
    templatePath: path.resolve(__dirname,'../../frontEnd/src/index.html'),
    styleCssPath: path.resolve(__dirname,'../../frontEnd/src/styled/css/style.css'),
    styleSassPath: path.resolve(__dirname,'../../frontEnd/src/styled/sass/sassStyle.css.sass'),
};