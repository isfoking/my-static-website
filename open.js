async function isOpenChrome() {
  const res = await browser.getInfo(["browser"]);
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

// const isInStandaloneMode = () =>
//   window.matchMedia("(display-mode: standalone)").matches ||
//   window.navigator.standalone ||
//   document.referrer.includes("android-app://");

// if (isInStandaloneMode()) {
//   alert("当前为pwa模式");
// } else {
//   alert("当前不是pwa模式");
// }
