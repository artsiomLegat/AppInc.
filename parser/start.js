const cheerio = require('cheerio');
const getHTMLinfo = require('./handlers/parser.js');
const URL = 'https://www.amazon.com';

let pupp = new getHTMLinfo();
//test
(async function main(){
 let HTMLcontent = await pupp.getPageContent(URL);
 let $ = cheerio.load(HTMLcontent);
 let attrClass = $('.nav-fill').attr('class');
<<<<<<< HEAD
 console.log(HTMLcontent);
})();
=======
 console.log($('.nav-fill').attr('class'));
})
>>>>>>> 35fab51b82b2c9697c61a1d477b487c7623df172
