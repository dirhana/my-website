const targetNode = document.getElementById('root');
const config = {
    attributes: false,
    childList: true,
    subtree: false
};
function custom() {
    if (window.location.hash.indexOf('plan/28') != -1) {        // 钻石专线会员
        var targetNode1 = document.querySelector('#main-container > div').children[0];
        var observer1 = new MutationObserver(function(mutations) {
            updatePrice1();
            observer1.disconnect()
        });
        var config1 = { attributes: true, childList: true, subtree: false };
        observer1.observe(targetNode1, config1);
    } else if (window.location.hash.indexOf('plan/26') != -1) { // 铂金专线会员
        var targetNode1 = document.querySelector('#main-container > div').children[0];
        var observer1 = new MutationObserver(function(mutations) {
            updatePrice2();
            observer1.disconnect()
        });
        var config1 = { attributes: true, childList: true, subtree: false };
        observer1.observe(targetNode1, config1);
    } else if (window.location.hash.indexOf('plan/27') != -1) { // 黄金专线会员
        var targetNode1 = document.querySelector('#main-container > div').children[0];
        var observer1 = new MutationObserver(function(mutations) {
            updatePrice3();
            observer1.disconnect()
        });
        var config1 = { attributes: true, childList: true, subtree: false };
        observer1.observe(targetNode1, config1);
    } else if (window.location.hash.indexOf('plan/34') != -1) { // 企业会员轻量版
        var targetNode1 = document.querySelector('#main-container > div').children[0];
        var observer1 = new MutationObserver(function(mutations) {
            updatePrice4();
            observer1.disconnect()
        });
        var config1 = { attributes: true, childList: true, subtree: false };
        observer1.observe(targetNode1, config1);
    } else if (window.location.hash.indexOf('plan/36') != -1) { // 企业会员畅享版
        var targetNode1 = document.querySelector('#main-container > div').children[0];
        var observer1 = new MutationObserver(function(mutations) {
            updatePrice5();
            observer1.disconnect()
        });
        var config1 = { attributes: true, childList: true, subtree: false };
        observer1.observe(targetNode1, config1);
    }
}
// 钻石专线会员
function updatePrice1() {
    const annual = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(4) > div:nth-child(2) > span')
    let oldPrice = annual.innerHTML
    annual.innerHTML = '<del style="font-size:.7rem">¥264.88</del> <span class="text-danger">' + oldPrice + '</span><span class=\'badge badge-danger\'> 8.8折</span>'
    const annual2 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(5) > div:nth-child(2) > span')
    let oldPrice2 = annual2.innerHTML
    annual2.innerHTML = '<del style="font-size:.7rem">¥528.88</del> <span class="text-danger">' + oldPrice2 + '</span><span class=\'badge badge-danger\'> 8.5折</span>'
    const annual3 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(6) > div:nth-child(2) > span')
    let oldPrice3 = annual3.innerHTML
    annual3.innerHTML = '<del style="font-size:.7rem">¥792.88</del> <span class="text-danger">' + oldPrice3 + '</span><span class=\'badge badge-danger\'> 8折</span>'
}
// 铂金专线会员
function updatePrice2() {
    const annual = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(4) > div:nth-child(2) > span')
    let oldPrice = annual.innerHTML
    annual.innerHTML = '<del style="font-size:.7rem">¥180.88</del> <span class="text-danger">' + oldPrice + '</span><span class=\'badge badge-danger\'> 8.8折</span>'
    const annual2 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(5) > div:nth-child(2) > span')
    let oldPrice2 = annual2.innerHTML
    annual2.innerHTML = '<del style="font-size:.7rem">¥360.88</del> <span class="text-danger">' + oldPrice2 + '</span><span class=\'badge badge-danger\'> 8.5折</span>'
    const annual3 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(6) > div:nth-child(2) > span')
    let oldPrice3 = annual3.innerHTML
    annual3.innerHTML = '<del style="font-size:.7rem">¥720.88</del> <span class="text-danger">' + oldPrice3 + '</span><span class=\'badge badge-danger\'> 8折</span>'
}
// 黄金专线会员
function updatePrice3() {
    const annual = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(4) > div:nth-child(2) > span')
    let oldPrice = annual.innerHTML
    annual.innerHTML = '<del style="font-size:.7rem">¥96.88</del> <span class="text-danger">' + oldPrice + '</span><span class=\'badge badge-danger\'> 9.0折</span>'
    const annual2 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(5) > div:nth-child(2) > span')
    let oldPrice2 = annual2.innerHTML
    annual2.innerHTML = '<del style="font-size:.7rem">¥192.88</del> <span class="text-danger">' + oldPrice2 + '</span><span class=\'badge badge-danger\'> 8.5折</span>'
    const annual3 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(6) > div:nth-child(2) > span')
    let oldPrice3 = annual3.innerHTML
    annual3.innerHTML = '<del style="font-size:.7rem">¥288.88</del> <span class="text-danger">' + oldPrice3 + '</span><span class=\'badge badge-danger\'> 8折</span>'
}
// 企业会员轻量版
function updatePrice4() {
    const annual = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(4) > div:nth-child(2) > span')
    let oldPrice = annual.innerHTML
    annual.innerHTML = '<del style="font-size:.7rem">¥466.56</del> <span class="text-danger">' + oldPrice + '</span><span class=\'badge badge-danger\'> 8.0折</span>'
    const annual2 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(5) > div:nth-child(2) > span')
    let oldPrice2 = annual2.innerHTML
    annual2.innerHTML = '<del style="font-size:.7rem">¥933.12</del> <span class="text-danger">' + oldPrice2 + '</span><span class=\'badge badge-danger\'> 7.8折</span>'
    const annual3 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(6) > div:nth-child(2) > span')
    let oldPrice3 = annual3.innerHTML
    annual3.innerHTML = '<del style="font-size:.7rem">¥1399.68</del> <span class="text-danger">' + oldPrice3 + '</span><span class=\'badge badge-danger\'> 7.5折</span>'
}
// 企业会员畅享版
function updatePrice5() {
    const annual = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(4) > div:nth-child(2) > span')
    let oldPrice = annual.innerHTML
    annual.innerHTML = '<del style="font-size:.7rem">¥1066.56</del> <span class="text-danger">' + oldPrice + '</span><span class=\'badge badge-danger\'> 8.0折</span>'
    const annual2 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(5) > div:nth-child(2) > span')
    let oldPrice2 = annual2.innerHTML
    annual2.innerHTML = '<del style="font-size:.7rem">¥2133.12</del> <span class="text-danger">' + oldPrice2 + '</span><span class=\'badge badge-danger\'> 7.8折</span>'
    const annual3 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(6) > div:nth-child(2) > span')
    let oldPrice3 = annual3.innerHTML
    annual3.innerHTML = '<del style="font-size:.7rem">¥3199.68</del> <span class="text-danger">' + oldPrice3 + '</span><span class=\'badge badge-danger\'> 7.5折</span>'
}

const observer = new MutationObserver(function(mutations) {
    custom();
});
observer.observe(targetNode, config);
document.addEventListener("DOMContentLoaded", function() {
    custom();
});
