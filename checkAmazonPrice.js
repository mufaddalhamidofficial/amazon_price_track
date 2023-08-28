import fetch from 'node-fetch';

var v = await fetch('https://www.amazon.in/dp/B0BS14WM4X').then((v) => v.text());

var str = v
  .matchAll(/<span class=\"a-offscreen\">(.*?)<\/span>/g)
  .next()
  .value[1].trim();
console.log(str);
//v.matchAll(/<span class=\"a-offscreen\">(.*?)<\/span>/g).next()
var price = str.substring(1);

console.log(price);
if (price) {
  await (await fetch('https://trigger.macrodroid.com/dc64ec61-d98f-4ea9-9de2-c1b72da8ef7b/amazonalert?price=' + price)).text();
}
