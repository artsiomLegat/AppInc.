const cheerio = require('cheerio');
const getHTMLinfo = require('./handlers/parser.js');
const URL = 'https://www.amazon.com';

let pupp = new getHTMLinfo();
//test
(async function main(){
    try {
        let HTMLcontent = await pupp.getPageContent(URL);
        let $ = cheerio.load(HTMLcontent);
        let attrClass = $('#hmenu-customer-profile').attr('id');
       
        console.log(HTMLcontent);
    } catch (e){
        throw new Error(e.message)
    }
})();

