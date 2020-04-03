const cheerio = require('cheerio');
const getHTMLinfo = require('./handlers/parser.js');
const URL = 'https://www.amazon.com';

let pupp = new getHTMLinfo();
//test
(async function main(){
 let HTMLcontent = await pupp.getPageContent(URL);
 let $ = cheerio.load(HTMLcontent);
 let attrClass = $('.nav-fill').attr('class');

 console.log(HTMLcontent);
})();

