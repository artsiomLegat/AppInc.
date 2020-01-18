const path = require('path');
const {sourcePath} = require('../utils/paths');

module.exports = {
    app: [path.resolve(sourcePath,'app.js').filter(Boolean)],
};