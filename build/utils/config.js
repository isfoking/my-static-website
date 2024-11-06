(function () {
  const env = document.currentScript.dataset.env;
  const defaultParam = {
    isDefault: true,
    appid: env === "development" ? 102011 : 102020,
    adj: {
      appToken: "nku6h8rzpgcg",
      registerEv: "79x5rs",
      buyEv: "5vxjet",
    },
  };
  const map = {
    "heyo7.com/": {
      appid: 102022,

      adj: {
        appToken: "hvamly5t105c",
        registerEv: "7uwnix",
        buyEv: "p5qj77",
      },
    },

    "hey777.co/": {
      appid: 102022,
      adj: {
        appToken: "hvamly5t105c",
        registerEv: "7uwnix",
        buyEv: "p5qj77",
      },
    },

    "fifa-world.s3.ap-southeast-3.amazonaws.com/web-platform-mobile/index-pwa-9851.html":
      {
        appid: 102024,
        adj: {
          appToken: "nuijp1b9kow0",
          registerEv: "r2063t",
          buyEv: "xl20w0",
        },
      },

    "isfoking.github.io/my-static-website/build/index.html": {
      appid: 102024,
      adj: {
        appToken: "nuijp1b9kow0",
        registerEv: "r2063t",
        buyEv: "xl20w0",
      },
    },
  };
  const allMap = { defaultParam, ...map };
  //根据host映射配置参数
  function getDomainNameMapParams(url) {
    const host = (url || window.location.host).replace("www.", "");
    const pathname = window.location.pathname;
    return map[host] || map[host + pathname] || defaultParam;
  }

  //根据appid查找对应的配置参数
  function getParamsByAppid() {
    let result = defaultParam;
    const host = window.location.host;
    const pathname = window.location.pathname;
    const appid = sessionStorage.getItem("appid");
    for (const key in allMap) {
      if (allMap[key].appid === +appid) {
        result = allMap[key];
      }
    }
    if (map[host + pathname]) {
      result = map[host + pathname];
    }
    return result;
  }
  window.getDomainNameMapParams = getDomainNameMapParams;
  window.getParamsByAppid = getParamsByAppid;
})();
