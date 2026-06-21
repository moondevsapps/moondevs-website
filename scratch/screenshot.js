const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080 });
  await page.goto('https://pagecoder.ai/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  await browser.close();
})();
