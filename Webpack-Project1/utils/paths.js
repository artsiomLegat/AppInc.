const path = require('path');

module.exports = {
    dist: path.resolve(__dirname,'../../dist'),
    rootPath: path.resolve(__dirname,'../../'),
    outputPath: path.join(__dirname,'../../dist'),
    imagePath: path.resolve(__dirname,'../../frontEnd/src/images'),
    sourcePath: path.resolve(__dirname,'../../frontEnd/src/'),
    inputPath: path.resolve(__dirname,'../../frontEnd/src/index.tsx'),
    HTMLPath: path.resolve(__dirname,'../../frontEnd/src/index.html'),
    templatePath: path.resolve(__dirname,'../../frontEnd/src'),
    styleSassPath: path.resolve(__dirname,'../../frontEnd/src/styled/sassStyle.css.scss'),
    styleCssPath: path.resolve(__dirname,'../../frontEnd/src/styled/style.css'),
    stylePath: path.resolve(__dirname,'../../frontEnd/src/styled/style.scss'),
    themePath: path.resolve(__dirname,'../../frontEnd/src/styled/theme.scss'),
};