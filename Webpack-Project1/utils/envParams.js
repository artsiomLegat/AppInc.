const DotEnv = require('dotenv-webpack');
const path = require('path');
const {rootPath}= require('./paths');
let envParams = null;
const someEnvCovert = () => {
    if (!envParams) {
        envParams = new DotEnv({
            path: path.resolve(rootPath,'.frontend.env.dev.example'),
            safe: path.resolve(rootPath,'.frontend.env.prod.example'),
            defaults: false,
            systemvars: false,
        });
    }
};
const getParam = (param)=>{
    someEnvCovert();
    return process.env[param] || false;
};

const getParamAsNumber = (param)=>(Number(getParam(param)));
const getParamAsBoolean = (param)=>(getParam(param)==='true');

module.exports = {
    getParam,
    getParamAsBoolean,
    getParamAsNumber,
    isProduction: getParam('NODE_ENV') === 'production',
};