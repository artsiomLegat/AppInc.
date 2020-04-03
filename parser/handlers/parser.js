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
    waitUntil: {
        waitUntil: ['load','domcontentloaded','networkidle0','networkidle2']
    },
    timeout: 3000000
  };



 module.exports = class getHTMLinfo {
    constructor(){
        // this.init = function(initBrowser){return initBrowser};
        // this.brows =  this.init.bind(this,(async ()=>(await poppeteer.launch(LAUNCH_PUPPETEER_OPTS)))()); 
        // this.browser = async function(){
        //     try {
        //         return await poppeteer.launch(LAUNCH_PUPPETEER_OPTS);
        //     }
        //      catch (e){
        //         throw new Error(chalk.red(e.message));
        //      }
        // };
        this.initBrowser =this.initBrowser.bind(this);
        this.browser = null;
    };
   async initBrowser (){
    this.browser = await poppeteer.launch(LAUNCH_PUPPETEER_OPTS);
    }
   async getPageContent(url) {
       try{
        await this.initBrowser();
        let page = await this.browser.newPage();
        await page.goto(url,PAGE_PUPPETEER_OPTS);
        // await page.evaluate(() => {
        //     document.querySelector('a[id="nav-hamburger-menu"]').click();
        //   });
    
        // await page.setViewport({ width: 1868, height: 978 })
  
        // await page.waitForSelector('#navbar > #nav-belt > .nav-left > #nav-hamburger-menu > .hm-icon');
        // let pageclick =  await page.click('#navbar > #nav-belt > .nav-left > #nav-hamburger-menu > .hm-icon');
        //  await page.waitFor(6000);
        // page.waitForNavigation()
        // let elem = await page.$('#hmenu-content');
        // let selector = await page.$('div["id=hmenu-customer-profile"]');вв
      
        // let elem = selector.asElement();
        // await elem.click()
        let content = await page.content();
        return  content;
       } catch(e) {
         throw new Error(e.message);
       }
   }
}; 
// module.exports =  LAUNCH_PUPPETEER_OPTS;
// module.exports =  PAGE_PUPPETEER_OPTS; 