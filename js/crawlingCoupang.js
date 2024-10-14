// const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const coupangUrl = "https://www.coupang.com/np/search?page=1&filterSetByUser=true&channel=user&sorter=scoreDesc&listSize=200&q=선풍기";
// const coupangUrl = "https://www.coupang.com/np/search?component=&q=%EC%84%A0%ED%92%8D%EA%B8%B0&channel=user";

const crawler = async () => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
        });
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36')
        await page.goto(coupangUrl);

        const contents = await page.content();
        let temp = await page.evaluate(() => {
            let list = document.querySelector('.search-product-list');
            let a = list.querySelectorAll('.search-product')
            let result = [];
            a.forEach(e => {
                if (e.getAttribute('class') !== 'search-product  search-product__ad-badge') {
                    result.push({
                        product_no: e.getAttribute('data-product-id'),
                        product_name: e.querySelector('.name').textContent
                    })
                }
            })
            return result;
        })
        console.log(temp);
        console.log(temp.length);

        // const $ = cheerio.load(contents);
        // const $bodyList = $('ul.search-product-list li.search-product');
        // let productList = [];
        // $bodyList.each(function (i, elem) {
        //     productList.push({
        //         product_name: $(this).attr("data-product-id"),
        //         product_no: $(this).find('.name').text().split("\n")[0]
        //     })
        // });
        await browser.close();

    }
    catch (e) {
        console.error(e)
    }
}

crawler();

/*
wget https://dl.google.com/linux/chrome/rpm/stable/x86_64/google-chrome-stable-123.0.6312.105-1.x86_64.rpm
sudo yum -y localinstall google-chrome-stable-123.0.6312.105-1.x86_64.rpm
rm -rf google-chrome-stable-123.0.6312.105-1.x86_64.rpm

리눅스 필수 라이브러리 (puppeteer)
alsa-lib.x86_64
atk.x86_64
cups-libs.x86_64
GConf2.x86_64
gtk3.x86_64
ipa-gothic-fonts
libXcomposite.x86_64
libXcursor.x86_64
libXdamage.x86_64
libXext.x86_64
libXi.x86_64
libXrandr.x86_64
libXScrnSaver.x86_64
libXtst.x86_64
pango.x86_64
xorg-x11-fonts-100dpi
xorg-x11-fonts-75dpi
xorg-x11-fonts-cyrillic
xorg-x11-fonts-misc
xorg-x11-fonts-Type1
xorg-x11-utils
 */