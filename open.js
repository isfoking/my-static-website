// (function (doc, win) {
//   var docEl = doc.documentElement,
//     resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
//     recalc = function () {
//       var clientWidth = docEl.clientWidth;
//       if (!clientWidth) return;
//       if (clientWidth >= 750) {
//         docEl.style.fontSize = "100px";
//       } else {
//         docEl.style.fontSize = 78 * (clientWidth / 750) + "px";
//       }
//     };

//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener("DOMContentLoaded", recalc, false);
// })(document, window);

// let info = browser.parse(navigator.userAgent);

// 获取浏览器详细信息 - 指定字段：'browser','system','device','gpu','network','battery','screen','language','timezone'

async function isOpenChrome() {
  const res = await browser.getInfo(["browser"]);
  alert(res.browser);
  if (
    res.browser === "Chrome" ||
    res.browser === "Edge" ||
    res.browser === "Firefox" ||
    res.browser === "Safari"
  ) {
    return false;
  }
  return true;
}
async function open() {
  const result = await isOpenChrome();
  if (!result) return;

  var url = window.location.href;
  var newUrl = url.replace(/^https:\/\//, "");
  var intentUrl = `intent://${newUrl}#Intent;scheme=https;package=com.android.chrome;end`;
  window.location.href = intentUrl;
}
open();
