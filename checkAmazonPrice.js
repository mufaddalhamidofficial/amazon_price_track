import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const html = await (await fetch('https://www.amazon.in/dp/B09XJ3MBTL')).text();
const $ = cheerio.load(html);

const ec = $('#corePriceDisplay_desktop_feature_div .a-price-whole');
var price = '' + ec?.[0]?.children?.[0]?.data;

price = parseInt(
  price
    .split(',')
    .map((v) => v.trim())
    .join('')
);

console.log(price);
if (price) {
  await (await fetch('https://trigger.macrodroid.com/e2228423-89f9-4440-9ceb-7bd4f063325a/amazonalert?price=' + price + '&date=' + encodeURIComponent(new Date().toISOString()))).text();
}
