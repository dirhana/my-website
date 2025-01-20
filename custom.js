window.$crisp = [];
window.CRISP_WEBSITE_ID = "5d7be2dc-fec3-44a5-a1e9-87919e6d48d6";
(function () {
d = document;
s = d.createElement("script");
s.src = "https://client.crisp.chat/l.js";
s.async = 1;
d.getElementsByTagName("head")[0].appendChild(s);
})();


var downloadBtn = document.createElement('div');
downloadBtn.className = 'kj-download-btn';
downloadBtn.innerText = '下载客户端';
var contactBtn = document.createElement('div');
contactBtn.className = 'kj-contact-btn';
contactBtn.innerText = '购买套餐';
document.body.appendChild(downloadBtn);
document.body.appendChild(contactBtn);
setTimeout(function() {
    downloadBtn.classList.add('show');
    contactBtn.classList.add('show');
},
500);
downloadBtn.addEventListener('click',
function() {
    window.location.href = '/#/knowledge';
});
contactBtn.addEventListener('click',
function() {
    window.location.href = '/#/plan';
});