import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

// const html = await (await fetch('https://www.amazon.in/dp/B09XJ3MBTL')).text();
// const $ = cheerio.load(html);

// const ec = $('#corePriceDisplay_desktop_feature_div .a-price-whole');
// var price = '' + ec?.[0]?.children?.[0]?.data;

// price = parseInt(
//   price
//     .split(',')
//     .map((v) => v.trim())
//     .join('')
// );

var v = await fetch(
  'https://www.amazon.in/gp/twister/ajaxv2?acAsin=B09XJ3MBTL&sid=258-6963697-7541307&ptd=CELLULAR_PHONE&sCac=1&twisterView=glance&pgid=wireless_display_on_website&rid=HS8SVSHRRH5DVV3B2A4V&auiAjax=1&json=1&dpxAjaxFlag=1&isUDPFlag=1&ee=2&originalHttpReferer=https%3A%2F%2Fwww.amazon.in%2Fdp%2FB09XJ3MBTL%3Fth%3D1&parentAsin=B0B1W7RNWJ&enPre=1&dcm=1&storeID=electronics&ppw=&ppl=&isFlushing=2&dpEnvironment=hardlines&asinList=B09XJ3MBTL&id=B09XJ3MBTL&mType=full&psc=1'
).then((v) => v.text());

var str = v
  .matchAll(/<span class=\\"a-offscreen\\">(.*?)<\\\/span>/g)
  .next()
  .value[1].trim();

var price = str.substring(6).replaceAll(',', '');

console.log(price);
if (price) {
  await (await fetch('https://trigger.macrodroid.com/e2228423-89f9-4440-9ceb-7bd4f063325a/amazonalert?price=' + price)).text();
}
