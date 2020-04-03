const cheerio = require('cheerio');
const getHTMLinfo = require('./handlers/parser.js');
const URL = 'https://www.amazon.com';
const chalk = require('chalk');

let pupp = new getHTMLinfo();

(async function main(){
    try{
        let HTMLcontent = await pupp.getPageContent(URL);
        // let $ = cheerio.load(HTMLcontent);
        // let attrClass = $('#hmenu-content').attr('id');
        console.log(HTMLcontent);
        // console.log(HTMLcontent);
        // console.log($);выф
    }
     catch(e){
         throw new Error(chalk.red(e.message));
     }
})()