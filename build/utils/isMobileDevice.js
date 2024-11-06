(function () {
  const env = document.currentScript.dataset.env;
  //判断是手机还是PC跳转到响应地址
  var userAgentInfo = navigator.userAgent;
  var mobileAgents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];

  var mobile_flag = false;

  //根据userAgent判断是否是手机
  for (var v = 0; v < mobileAgents.length; v++) {
    if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
      mobile_flag = true;
      break;
    }
  }
  var screen_width = window.screen.width;
  var screen_height = window.screen.height;

  const isTablet =
    /Tablet/i.test(userAgentInfo) ||
    (screen_width > 768 && screen_width <= 1024);
  //根据屏幕分辨率判断是否是手机
  if (screen_width > 325 && screen_height < 750) {
    mobile_flag = true;
  }
  if (!mobile_flag && !isTablet) {
    const isDefault = window.getDomainNameMapParams().isDefault;

    const pathname = window.location.pathname;
    const map = {
      development: {
        url: `http://172.1.100.27:3000${
          !isDefault ? `?host=${window.location.host}${pathname}` : ""
        }`,

      },
      production: {
        url: `https://app-version-manage.s3.ap-southeast-3.amazonaws.com/release/web-platform-pc/index.html${!isDefault ? `?host=${window.location.host}${pathname}` : ""}`,
      },

    };
    console.log(map[env], "env");

    window.location.href = map[env].url;
  }
})();

