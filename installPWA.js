// new VConsole();
var deferredPrompt = null;
var count = 0;
var isEnd = false;

function startProgress() {
  const text = document.querySelector(".VfPpkd-vQzf8d");
  const mask = document.querySelector(".mask");
  mask.style.width = "0%";
  mask.style.background = "#cacacb";

  let currentWidth = 0; // 初始宽度为 0%
  const timer = setInterval(() => {
    mask.style.background = "#01875f";

    // 更新当前宽度
    window.getComputedStyle(mask).width;
    currentWidth += 1;
    // 增加宽度
    mask.style.width = `${currentWidth}%`;
    text.innerText = `${currentWidth}%`;
    // 检查是否达到或超过 100%
    if (currentWidth >= 99) {
      isEnd = true;
      // 考虑到整数递增，可能需要提前停止
      mask.style.width = "100%";
      text.innerText = "Go";
      clearInterval(timer);
    }
  }, 20);
}

// 手动触发PWA安装
function addToDesktop() {
  var ref = document.getElementById("installComponent");
  ref.install();

  Adjust.trackEvent({
    eventToken: "fvu5nh",
  });
  // 监听安装结果
  ref.deferredprompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "accepted") {
      startProgress();
      Adjust.trackEvent({
        eventToken: "3d3a82",
      });
      console.log("install PWA");
    } else {
      console.log("no PWA");
    }

    // 重置事件
    deferredPrompt = null;
  });
}

var downloadBtn = document.querySelector("#download");
// "start_url": "https://fifa-world.s3.ap-southeast-3.amazonaws.com/web-platform-mobile/index.html",
window.addEventListener("load", function () {
  // 浏览器加载完成的操作
  downloadBtn.disabled = false;
  if ("serviceWorker" in navigator) {
    // Register the app's service worker
    // Passing the filename where that worker is defined.
    navigator.serviceWorker.register("./sw.js").then((reg) => {
      console.log(reg, "reg");
    });
  }
});

// // 监听beforeinstallprompt事件，该事件在网站满足PWA安装条件时触发，保存安装事件
window.addEventListener("beforeinstallprompt", (e) => {
  console.log("触发", e);
  e.preventDefault();
  deferredPrompt = e;

  if (count > 0) {
    window.location.href = newUrl;
  }
  count++;
});

// // 监听appinstalled事件，该事件在用户同意安装后触发，清空安装事件
// window.addEventListener("appinstalled", () => {
//   console.log("appinstalled");
//   deferredPrompt = null;
// });
