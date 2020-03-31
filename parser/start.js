const cheerio = require('cheerio');
const getHTMLinfo = require('./handlers/parser.js');
const URL = 'https://www.amazon.com';

let pupp = new getHTMLinfo();

(async function main(){
 let HTMLcontent = pupp.getHtmlInfo(URL);
 let $ = cheerio.load(HTMLcontent);
 let attrClass = $('.nav-fill').attr('class');
 console.log(attrClass);
})