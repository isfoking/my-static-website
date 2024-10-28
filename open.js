(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 750) {
        docEl.style.fontSize = "100px";
      } else {
        docEl.style.fontSize = 78 * (clientWidth / 750) + "px";
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);

function open() {
  var url = window.location.href;
  var newUrl = url.replace(/^https:\/\//, "");
  var intentUrl = `intent://${newUrl}#Intent;scheme=https;package=com.android.chrome;end`;
  window.location.href = intentUrl;
}
open();
