function isOpenChrome() {
  var parser = new UAParser();
  const browser = parser.getBrowser().name;
  console.log(browser);
  if (browser === "Chrome" || browser === "Edge" || browser === "Safari") {
    return false;
  }
  return true;
}
async function open() {
  const result = isOpenChrome();
  if (!result) return;
  const mask = document.querySelector("#mask");
  mask.style.display = "none";
  sendMessage({
    step: 102,
    msg: { ...parser.getResult(), msg: "不是Chrome|Edge|Safari 跳转Chrome" },
  });

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
