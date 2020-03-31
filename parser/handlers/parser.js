const poppeteer = require('puppeteer');

const LAUNCH_PUPPETEER_OPTS = {
    args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--disable-gpu',
    '--window-size=1920x1080'
    ],
};

const PAGE_PUPPETEER_OPTS = {
    networkIdle2Timeout: 5000,
    waitUntil: 'networkidle2',
    timeout: 3000000
  };



 module.exports = class getHTMLinfo {
    constructor(){
        this.browser = this.browser.bind(this,async ()=>(await poppeteer.launch(LAUNCH_PUPPETEER_OPTS))); 
    };
   async getPageContent(url) {
       try{
        let page = await this.browser.newPage();
        await page.goto(url,PAGE_PUPPETEER_OPTS);
        let content = await page.content();
        return content;
       } catch(e) {
         throw new Error(e.message);
       }
   }
}; 
// module.exports =  LAUNCH_PUPPETEER_OPTS;
// module.exports =  PAGE_PUPPETEER_OPTS; 