import { smashingContent } from "./smashing-magazine";

const puppeteer = require('puppeteer');
let ejs = require('ejs');
 
(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // await page.goto('https://aamc.org');
  // await page.pdf({path: 'aamc2.pdf', format: 'A4', printBackground:true});

  // await page.goto('https://www.theconqueror.events/fuji/');
  // await page.pdf({path: 'fuji2.pdf', format: 'A4', printBackground:true, });\
  

  let data = {people: ['geddy', 'neil', 'alex']}; // << document data comes from reqeust.
  const template = `
    <h1 style="color:green">Here are people that are intersting</h1>
    <p style="background:pink;">
      <%= people.join(", "); %>
    </p>
  `; // << template string comes from template meta DB

  let html = ejs.render(template, data);
  

  await page.setContent(html);
  await page.pdf({path: 'ejsoutput.pdf', format: 'A4', printBackground:true, });

  // await page.goto('https://apps.development.aamc.org/component-library/#/style-guide/layout/responsive');
  // await page.pdf({path: 'layout.pdf', format: 'A4', printBackground:true, waitUntil: 'networkidle2'} );

  await browser.close();
})();
