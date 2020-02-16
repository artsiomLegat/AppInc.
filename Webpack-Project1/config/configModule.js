const ruleBabel = require('../rules/ruleBabel');
const ruleSass = require('../rules/ruleSass');
const ruleImage = require('../rules/ruleImages');
const ruleSvgInline = require('../rules/ruleSvgInline');
const ruleSassTheme = require('../rules/ruleSassTheme');

module.exports = {
    rules: [ruleBabel,ruleSassTheme,ruleImage,ruleSass,ruleSvgInline],
}