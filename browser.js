/*!
 * browser-tool v1.3.2
 * Useragent analysis tool.
 * https://passer-by.com/browser/
 *
 * Copyright (c) 2017-present, HaoLe Zheng
 *
 * Released under the MIT License
 * https://github.com/mumuy/browser
 *
 * Created on: 2024-10-13
 */
!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).browser =
        n());
})(this, function () {
  "use strict";
  let e = {};
  "undefined" != typeof globalThis
    ? (e = globalThis)
    : "undefined" != typeof self
    ? (e = self)
    : "undefined" != typeof window
    ? (e = window)
    : "undefined" != typeof global && (e = global);
  var n,
    i = e,
    r =
      null == i || null === (n = i.navigator) || void 0 === n
        ? void 0
        : n.userAgent,
    a = {
      name: "Safari",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Safari"),
          version:
            (null === (n = e.match(/Version\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    o = {
      name: "Chrome",
      parse(e = r) {
        var n, i;
        return {
          is: e.includes("Chrome") || e.includes("CriOS"),
          version:
            (null === (n = e.match(/Chrome\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/CriOS\/([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            "",
        };
      },
    },
    t = {
      name: "Edge",
      parse(e = r) {
        var n, i, a, o;
        return {
          is:
            e.includes("Edge") ||
            e.includes("Edg/") ||
            e.includes("EdgA") ||
            e.includes("EdgiOS"),
          version:
            (null === (n = e.match(/Edge\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/Edg\/([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            (null === (a = e.match(/EdgA\/([\d.]+)/)) || void 0 === a
              ? void 0
              : a[1]) ||
            (null === (o = e.match(/EdgiOS\/([\d.]+)/)) || void 0 === o
              ? void 0
              : o[1]) ||
            "",
        };
      },
    },
    s = {
      name: "IE",
      parse(e = r) {
        var n, i;
        return {
          is: e.includes("MSIE") || e.includes("Trident"),
          version:
            (null === (n = e.match(/MSIE ([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/rv:([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            "",
        };
      },
    },
    l = {
      name: "Firefox",
      parse(e = r) {
        var n, i;
        return {
          is: e.includes("Firefox") || e.includes("FxiOS"),
          version:
            (null === (n = e.match(/Firefox\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/FxiOS\/([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            "",
        };
      },
    },
    d = {
      name: "Firefox Focus",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Focus"),
          version:
            (null === (n = e.match(/Focus\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    u = {
      name: "Chromium",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Chromium"),
          version:
            (null === (n = e.match(/Chromium\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    c = {
      name: "Opera",
      parse(e = r) {
        var n, i;
        return {
          is: e.includes("Opera") || e.includes("OPR"),
          version:
            (null === (n = e.match(/Opera\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/OPR\/([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            "",
        };
      },
    },
    v = {
      name: "Opera GX",
      parse(e = r) {
        let n = !1;
        return (
          c.parse(e).is && (n = e.includes("Edition GX")),
          { is: n, version: c.parse(e).version }
        );
      },
    },
    m = {
      name: "Vivaldi",
      parse(e = r) {
        var n, i;
        return {
          is: e.includes("Vivaldi"),
          version:
            (null === (n = e.match(/Vivaldi\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/Chrome\/([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            "",
        };
      },
      async is() {
        let e = this.parse().is;
        return new Promise(function (n) {
          e
            ? n(!1)
            : fetch(
                "chrome-extension://jffbochibkahlbbmanpmndnhmeliecah/config.json"
              )
                .then(function () {
                  n(!0);
                })
                .catch(function () {
                  n(!1);
                });
        });
      },
    },
    p = {
      name: "Yandex",
      parse(e = r) {
        var n;
        return {
          is: e.includes("YaBrowser"),
          version:
            (null === (n = e.match(/YaBrowser\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    h = {
      name: "Brave",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Brave"),
          version:
            (null === (n = e.match(/Chrome\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
      is: async function () {
        var e;
        return !!(
          this.parse().is ||
          (null != i && null !== (e = i.navigator) && void 0 !== e && e.brave)
        );
      },
    },
    g = {
      name: "Arora",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Arora"),
          version:
            (null === (n = e.match(/Arora\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    f = {
      name: "Lunascape",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Lunascape"),
          version:
            (null === (n = e.match(/Lunascape[\/\s]([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    b = {
      name: "QupZilla",
      parse(e = r) {
        var n;
        return {
          is: e.includes("QupZilla"),
          version:
            (null === (n = e.match(/QupZilla[\/\s]([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    w = {
      name: "Coc Coc",
      parse(e = r) {
        var n;
        return {
          is: e.includes("coc_coc_browser"),
          version:
            (null === (n = e.match(/coc_coc_browser\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    S = {
      name: "Kindle",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Kindle") || e.includes("Silk/"),
          version:
            (null === (n = e.match(/Version\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    y = {
      name: "Iceweasel",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Iceweasel"),
          version:
            (null === (n = e.match(/Iceweasel\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    B = {
      name: "Konqueror",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Konqueror"),
          version:
            (null === (n = e.match(/Konqueror\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    A = {
      name: "SeaMonkey",
      parse(e = r) {
        var n;
        return {
          is: e.includes("SeaMonkey"),
          version:
            (null === (n = e.match(/SeaMonkey\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    C = {
      name: "Epiphany",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Epiphany"),
          version:
            (null === (n = e.match(/Epiphany\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    E = {
      name: "Huawei",
      parse(e = r) {
        var n, i, a;
        return {
          is: e.includes("HuaweiBrowser") || e.includes("HBPC/"),
          version:
            (null === (n = e.match(/HuaweiBrowser\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/HBPC\/([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            (null === (a = e.match(/Version\/([\d.]+)/)) || void 0 === a
              ? void 0
              : a[1]) ||
            "",
        };
      },
    },
    T = {
      name: "OPPO",
      parse(e = r) {
        var n;
        return {
          is: e.includes("HeyTapBrowser") || e.includes("OPPO"),
          version:
            (null === (n = e.match(/HeyTapBrowser\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    x = {
      name: "Vivo",
      parse(e = r) {
        var n;
        return {
          is: e.includes("VivoBrowser"),
          version:
            (null === (n = e.match(/VivoBrowser\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    P = {
      name: "Xiaomi",
      parse(e = r) {
        var n;
        return {
          is: e.includes("MiuiBrowser"),
          version:
            (null === (n = e.match(/115Browser\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    M = {
      name: "Meizu",
      parse(e = r) {
        var n;
        return {
          is: e.includes("MZBrowser"),
          version:
            (null === (n = e.match(/MZBrowser\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    I = {
      name: "OnePlus",
      parse: (e = r) => ({ is: e.includes("ONEPLUS"), version: "" }),
    },
    O = {
      name: "Samsung",
      parse(e = r) {
        var n;
        return {
          is: e.includes("SamsungBrowser"),
          version:
            (null === (n = e.match(/SamsungBrowser\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    };
  function D(e, n) {
    var i;
    let r =
      null === globalThis ||
      void 0 === globalThis ||
      null === (i = globalThis.navigator) ||
      void 0 === i
        ? void 0
        : i.mimeTypes;
    for (let i in r) if (r[i][e] && r[i][e] == n) return r[i];
    return null;
  }
  var k = {
      name: "360",
      parse(e = r) {
        var n, i;
        return {
          is:
            e.includes("QihooBrowser") ||
            e.includes("QHBrowser") ||
            e.includes(" 360 "),
          version:
            (null === (n = e.match(/QihooBrowser(HD)?\/([\d.]+)/)) ||
            void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/Browser \(v([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            "",
        };
      },
      async is() {
        let e = this.parse().is;
        if (null != i && i.chrome) {
          let n = parseInt(o.parse().version);
          D("type", "application/360softmgrplugin") ||
          D("type", "application/mozilla-npqihooquicklogin") ||
          D("type", "application/npjlgplayer3-chrome-jlp") ||
          (n > 36 && null != i && i.showModalDialog)
            ? (e = !0)
            : n > 45 &&
              ((e = D("type", "application/vnd.chromium.remoting-viewer")),
              !e && n >= 69 && (e = D("type", "application/asx")));
        }
        return e;
      },
    },
    R = {
      name: "360SE",
      parse(e = r) {
        let n = parseInt(o.parse(e).version);
        return {
          is: e.includes("360SE"),
          version:
            {
              122: "15.3",
              114: "15.0",
              108: "14.0",
              86: "13.0",
              78: "12.0",
              69: "11.0",
              63: "10.0",
              55: "9.1",
              45: "8.1",
              42: "8.0",
              31: "7.0",
              21: "6.3",
            }[n] || "",
        };
      },
      async is() {
        let e = !1;
        var n;
        (await k.is()) &&
          (D("type", "application/gameplugin") ||
            (null != i &&
              null !== (n = i.navigator) &&
              void 0 !== n &&
              null !== (n = n.userAgentData) &&
              void 0 !== n &&
              n.brands.filter((e) => "Not.A/Brand" == e.brand).length)) &&
          (e = !0);
        return (
          e ||
          new Promise(function (e) {
            fetch(
              "chrome-extension://fjbbmgamncjadhlpmffehlmmkdnkiadk/css/content.css"
            )
              .then(function () {
                e(!0);
              })
              .catch(function () {
                e(!1);
              });
          })
        );
      },
    },
    W = {
      name: "360EE",
      parse(e = r) {
        var n;
        let i = parseInt(o.parse(e).version);
        return {
          is: e.includes("360EE"),
          version:
            (null === (n = e.match(/Browser \(v([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            {
              122: "22.3",
              119: "22.0",
              108: "14.0",
              95: "21.0",
              86: "13.0",
              78: "12.0",
              69: "11.0",
              63: "9.5",
              55: "9.0",
              50: "8.7",
              30: "7.5",
            }[i] ||
            "",
        };
      },
      async is() {
        let e = this.parse().is;
        if (
          D("type", "application/cenroll.cenroll.version.1") ||
          D("type", "application/hwepass2001.installepass2001")
        )
          e = !0;
        else if (await k.is()) {
          var n;
          null !== globalThis &&
            void 0 !== globalThis &&
            null !== (n = globalThis.navigator) &&
            void 0 !== n &&
            null !== (n = n.userAgentData) &&
            void 0 !== n &&
            n.brands.find(
              (e) => "Not A(Brand" == e.brand || "Not?A_Brand" == e.brand
            ) &&
            (e = !0);
        }
        return e;
      },
    },
    L = {
      name: "360AI",
      parse(e = r) {
        let n = parseInt(o.parse(e).version);
        return { is: e.includes("360SEAI"), version: { 114: "1.0" }[n] || "" };
      },
      async is() {
        let e = this.parse().is;
        var n;
        (await k.is()) &&
          null != i &&
          null !== (n = i.navigator) &&
          void 0 !== n &&
          null !== (n = n.userAgentData) &&
          void 0 !== n &&
          n.brands.filter((e) => "Not.A/Brand" == e.brand).length &&
          !D("type", "application/gameplugin") &&
          (e = !0);
        return e;
      },
    },
    H = {
      name: "360AI",
      parse(e = r) {
        var n;
        return {
          is: e.includes("360EEAI"),
          version:
            (null === (n = e.match(/360EE\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    };
  const V = () =>
    new Promise((e) => {
      var n;
      if (
        null == i ||
        null === (n = i.webkit) ||
        void 0 === n ||
        null === (n = n.messageHandlers) ||
        void 0 === n ||
        !n.excuteCmd
      )
        return e({});
      {
        const n = `cv_${Date.now() % 1e5}${100 * Math.floor(Math.random())}`,
          r = { key: "GetDeviceInfo", data: {}, callback: n },
          a = JSON.stringify(r);
        i.webkit.messageHandlers.excuteCmd.postMessage(a),
          (i[n] = function (r) {
            delete i[n], e(JSON.parse(r || "{}"));
          });
      }
    });
  var U = {
      name: "360EE",
      parse: () => ({ is: !1, version: "" }),
      is: async () =>
        V().then(function (e) {
          return "360csexm" == (null == e ? void 0 : e.pid) || !1;
        }),
      version: async () =>
        V().then(function (e) {
          return (null == e ? void 0 : e.module_version) || "";
        }),
    },
    _ = {
      name: "360ENT",
      parse(e = r) {
        var n;
        let i = parseInt(o.parse(e).version);
        return {
          is: e.includes("360ENT"),
          version:
            (null === (n = e.match(/Browser \(v([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            {
              86: "13.0",
              78: "12.0",
              69: "11.0",
              63: "9.5",
              55: "9.0",
              50: "8.7",
              30: "7.5",
            }[i] ||
            "",
        };
      },
    },
    F = {
      name: "UC",
      parse(e = r) {
        var n;
        return {
          is:
            e.includes("UCBrowser") ||
            e.includes(" UBrowser") ||
            e.includes("UCWEB"),
          version:
            (null === (n = e.match(/UC?Browser\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    N = {
      name: "QQBrowser",
      parse(e = r) {
        var n;
        return {
          is: e.includes("QQBrowser"),
          version:
            (null === (n = e.match(/QQBrowser\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    Q = {
      name: "QQ",
      parse(e = r) {
        var n;
        return {
          is: e.includes("QQ/"),
          version:
            (null === (n = e.match(/QQ\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    G = {
      name: "Baidu",
      parse(e = r) {
        var n, i;
        return {
          is:
            e.includes("Baidu") ||
            e.includes("BIDUBrowser") ||
            e.includes("baidubrowser") ||
            e.includes("baiduboxapp") ||
            e.includes("BaiduD"),
          version:
            (null === (n = e.match(/BIDUBrowser[\s\/]([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/baiduboxapp\/([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            "",
        };
      },
    },
    Y = {
      name: "Maxthon",
      parse(e = r) {
        var n, i;
        let a = parseInt(o.parse(e).version);
        return {
          is: e.includes("Maxthon"),
          version:
            (null === (n = e.match(/Maxthon\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/Version\/([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            { 109: "7.0", 78: "6.0" }[a] ||
            "",
        };
      },
      is() {
        return this.parse().is || (null == i ? void 0 : i.maxthon);
      },
    },
    j = {
      name: "Sogou",
      parse(e = r) {
        var n,
          i,
          a = parseInt(o.parse(e).version);
        return {
          is: e.includes("MetaSr") || e.includes("Sogou"),
          version:
            (null === (n = e.match(/SogouMobileBrowser\/([\d.]+)/)) ||
            void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/SogouMSE\/([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            { 94: "12.0", 80: "11.0" }[a] ||
            "",
        };
      },
    },
    q = {
      name: "Liebao",
      parse(e = r) {
        var n;
        let i = parseInt(o.parse(e).version);
        return {
          is: e.includes("LBBROWSER") || e.includes("LieBaoFast"),
          version:
            (null === (n = e.match(/LieBaoFast\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            {
              112: "9.0",
              79: "8.0",
              57: "6.5",
              49: "6.0",
              46: "5.9",
              42: "5.3",
              39: "5.2",
              34: "5.0",
              29: "4.5",
              21: "4.0",
            }[i] ||
            "",
        };
      },
      is() {
        return this.parse().is || (null == i ? void 0 : i.liebao);
      },
    },
    z = {
      name: "2345Explorer",
      parse(e = r) {
        var n, i;
        let a = parseInt(o.parse(e).version);
        return {
          is:
            e.includes("2345Explorer") ||
            e.includes("Mb2345Browser") ||
            e.includes("2345chrome"),
          version:
            (null === (n = e.match(/2345Explorer\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/Mb2345Browser\/([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            { 109: "13.0", 69: "10.0", 55: "9.9" }[a] ||
            "",
        };
      },
      async is() {
        let e = this.parse().is;
        var n, r;
        e ||
          (e =
            (null == i ? void 0 : i.chrome) &&
            ((null == i || null === (n = i.chrome) || void 0 === n
              ? void 0
              : n.adblock2345) ||
              (null == i || null === (r = i.chrome) || void 0 === r
                ? void 0
                : r.common2345)));
        return e;
      },
    },
    K = {
      name: "115Browser",
      parse(e = r) {
        var n;
        return {
          is: e.includes("115Browser"),
          version:
            (null === (n = e.match(/115Browser\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    X = {
      name: "TheWorld",
      parse(e = r) {
        var n;
        return {
          is: e.includes("TheWorld"),
          version:
            (null === (n = e.match(/TheWorld ([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    $ = {
      name: "Quark",
      parse(e = r) {
        var n, i;
        return {
          is: e.includes("Quark"),
          version:
            (null === (n = e.match(/Quark\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/QuarkPC\/([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            "",
        };
      },
    },
    Z = {
      name: "Qiyu",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Qiyu"),
          version:
            (null === (n = e.match(/Qiyu\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    J = {
      name: "Lenovo",
      parse(e = r) {
        var n;
        return {
          is: e.includes("SLBrowser"),
          version:
            (null === (n = e.match(/SLBrowser\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    ee = {
      name: "Wechat",
      parse(e = r) {
        var n;
        return {
          is: e.includes("MicroMessenger"),
          version:
            (null === (n = e.match(/MicroMessenger\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    ne = {
      name: "WechatWork",
      parse(e = r) {
        var n;
        return {
          is: e.includes("wxwork"),
          version:
            (null === (n = e.match(/wxwork\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    ie = {
      name: "Taobao",
      parse(e = r) {
        var n;
        return {
          is: e.includes("AliApp(TB"),
          version:
            (null === (n = e.match(/AliApp\(TB\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    re = {
      name: "Alipay",
      parse(e = r) {
        var n;
        return {
          is: e.includes("AliApp(AP"),
          version:
            (null === (n = e.match(/AliApp\(AP\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    ae = {
      name: "Weibo",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Weibo"),
          version:
            (null === (n = e.match(/weibo__([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    oe = {
      name: "Douban",
      parse(e = r) {
        var n;
        return {
          is: e.includes("com.douban.frodo"),
          version:
            (null === (n = e.match(/com.douban.frodo\/([\d.]+)/)) ||
            void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    te = {
      name: "Toutiao",
      parse(e = r) {
        var n;
        return {
          is: e.includes("NewsArticle"),
          version:
            (null === (n = e.match(/NewsArticle\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    se = {
      name: "WebKit",
      parse: (e = r) => ({ is: e.includes("AppleWebKit") }),
    },
    le = {
      name: "Trident",
      parse: (e = r) => ({
        is: e.includes("Trident") || e.includes("NET CLR"),
      }),
    },
    de = { name: "Gecko", parse: (e = r) => ({ is: e.includes("Gecko/") }) },
    ue = { name: "Servo", parse: (e = r) => ({ is: e.includes("Servo/") }) },
    ce = { name: "Presto", parse: (e = r) => ({ is: e.includes("Presto") }) },
    ve = { name: "KHTML", parse: (e = r) => ({ is: e.includes("KHTML/") }) };
  let me = [
    a,
    o,
    t,
    s,
    l,
    d,
    u,
    c,
    v,
    m,
    p,
    h,
    g,
    f,
    b,
    w,
    S,
    y,
    B,
    A,
    C,
    E,
    T,
    x,
    P,
    M,
    I,
    O,
    k,
    W,
    R,
    U,
    L,
    H,
    _,
    F,
    N,
    Q,
    G,
    Y,
    j,
    q,
    z,
    K,
    X,
    $,
    Z,
    J,
    ee,
    ne,
    ie,
    re,
    ae,
    oe,
    {
      name: "Suning",
      parse(e = r) {
        var n;
        return {
          is: e.includes("SNEBUY-APP"),
          version:
            (null === (n = e.match(/SNEBUY-APP([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "iQIYI",
      parse(e = r) {
        var n;
        return {
          is: e.includes("IqiyiApp"),
          version:
            (null === (n = e.match(/IqiyiVersion\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "DingTalk",
      parse(e = r) {
        var n;
        return {
          is: e.includes("DingTalk"),
          version:
            (null === (n = e.match(/DingTalk\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "Douyin",
      parse(e = r) {
        var n;
        return {
          is: e.includes("aweme"),
          version:
            (null === (n = e.match(/app_version\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    te,
    {
      name: "Googlebot",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Googlebot"),
          version:
            (null === (n = e.match(/Googlebot\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "Baiduspider",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Baiduspider"),
          version:
            (null === (n = e.match(/Baiduspider(-render)?\/([\d.]+)/)) ||
            void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "Sogouspider",
      parse(e = r) {
        var n;
        return {
          is: e.match(/Sogou (\S+) Spider\/([\d.]+)/i),
          version:
            (null === (n = e.match(/Sogou (\S+) Spider\/([\d.]+)/i)) ||
            void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "Bingbot",
      parse(e = r) {
        var n;
        return {
          is: e.includes("bingbot"),
          version:
            (null === (n = e.match(/bingbot\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "360Spider",
      parse: (e = r) => ({
        is: e.includes("360Spider") || e.includes("HaosouSpider"),
        version: "",
      }),
    },
    {
      name: "Bytespider",
      parse: (e = r) => ({ is: e.includes("Bytespider"), version: "" }),
    },
    {
      name: "YisouSpider",
      parse(e = r) {
        var n;
        return {
          is: e.includes("YisouSpider"),
          version:
            (null === (n = e.match(/YisouSpider\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "YodaoBot",
      parse(e = r) {
        var n;
        return {
          is: e.includes("YodaoBot"),
          version:
            (null === (n = e.match(/YodaoBot\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "YandexBot",
      parse(e = r) {
        var n;
        return {
          is: e.includes("YandexBot"),
          version:
            (null === (n = e.match(/YandexBot\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "Headless",
      parse(e = r) {
        var n;
        return {
          is: e.includes("HeadlessChrome/"),
          version:
            (null === (n = e.match(/HeadlessChrome\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
      async is() {
        return this.parse().is ?? "" == (null == i ? void 0 : i.navigator);
      },
    },
  ];
  me.forEach((e) => {
    e.is ||
      (e.is = async function () {
        return e.parse().is;
      }),
      e.version ||
        (e.version = async function () {
          return e.parse().version;
        });
  });
  let pe = [se, le, de, ue, ce, ve];
  pe.forEach((e) => {
    e.is ||
      (e.is = async function () {
        return e.parse().is;
      });
  });
  var he = {
      name: "browser",
      parse(e = r) {
        let n = "",
          i = "";
        me.forEach(function (r) {
          r.parse(e).is && ((n = r.name), (i = r.parse(e).version));
        });
        let a = "";
        var s, l;
        (pe.forEach(function (n) {
          n.parse(e).is && (a = n.name);
        }),
        "Chrome" == n &&
          e.match(/\S+Browser/) &&
          (n = e.match(/\S+Browser/)[0]),
        "Chrome" == n && e.match(/\S+Browser/)) &&
          (i =
            (null === (s = e.replace(/^.*Browser\/([\d.]+).*$/)) || void 0 === s
              ? void 0
              : s[1]) || "");
        i ||
          (i =
            (null === (l = e.match(/Version\/([\d.]+)/)) || void 0 === l
              ? void 0
              : l[1]) || "");
        t.parse(e).is
          ? (a = parseInt(t.parse(e).version) > 75 ? "Blink" : "EdgeHTML")
          : o.parse(e).is && parseInt(o.parse(e).version) > 27 && (a = "Blink");
        let d = e.includes("; wv)"),
          u = [
            "Googlebot",
            "Baiduspider",
            "Sogouspider",
            "Bingbot",
            "360Spider",
            "Bytespider",
            "YandexBot",
          ].includes(n);
        return {
          browser: n,
          browserVersion: i,
          engine: a,
          isWebview: d,
          isRobot: u,
        };
      },
      async getInfo() {
        var e;
        let {
          browser: n,
          browserVersion: i,
          engine: a,
          isWebview: o,
          isRobot: t,
        } = this.parse();
        for (let e of me)
          (await e.is()) && ((n = e.name), (i = await e.version()));
        let s = r;
        var l, d;
        ("Chrome" == n &&
          s.match(/\S+Browser/) &&
          (n = s.match(/\S+Browser/)[0]),
        "Chrome" == n && s.match(/\S+Browser/)) &&
          (i =
            (null === (l = s.replace(/^.*Browser\/([\d.]+).*$/)) || void 0 === l
              ? void 0
              : l[1]) || "");
        i ||
          (i =
            (null === (d = s.match(/Version\/([\d.]+)/)) || void 0 === d
              ? void 0
              : d[1]) || "");
        return {
          browser: n,
          browserVersion: i,
          engine: a,
          isWebview: o,
          isRobot: t,
          cookieEnabled:
            null === globalThis ||
            void 0 === globalThis ||
            null === (e = globalThis.navigator) ||
            void 0 === e
              ? void 0
              : e.cookieEnabled,
          userAgent: s,
        };
      },
    },
    ge = {
      name: "Windows",
      parse(e = r) {
        var n;
        let i =
          (null ===
            (n = e.match(/^Mozilla\/\d.0 \(Windows NT ([\d.]+)[;)].*$/)) ||
          void 0 === n
            ? void 0
            : n[1]) || "";
        return {
          is: e.includes("Windows"),
          version:
            {
              "10.0": "10",
              6.4: "10 Technical Preview",
              6.3: "8.1",
              6.2: "8",
              6.1: "7",
              "6.0": "Vista",
              5.2: "XP 64-bit",
              5.1: "XP",
              5.01: "2000 SP1",
              "5.0": "2000",
              "4.0": "NT",
              "4.90": "ME",
            }[i] || i,
        };
      },
      async version() {
        let e = this.parse().version;
        return new Promise(function (n) {
          var r;
          null != i &&
          null !== (r = i.navigator) &&
          void 0 !== r &&
          r.userAgentData
            ? i.navigator.userAgentData
                .getHighEntropyValues(["platformVersion"])
                .then(function (e) {
                  let r = "";
                  if ("Windows" === i.navigator.userAgentData.platform) {
                    r =
                      parseInt(e.platformVersion.split(".")[0]) >= 13
                        ? "11"
                        : "10";
                  }
                  n(r);
                })
            : n(e);
        });
      },
    };
  let fe = [
    ge,
    {
      name: "Linux",
      parse: (e = r) => ({
        is: e.includes("Linux") || e.includes("X11"),
        version: "",
      }),
    },
    {
      name: "macOS",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Macintosh"),
          version:
            (null === (n = e.match(/Mac OS X -?([\d_]+)/)) || void 0 === n
              ? void 0
              : n[1].replace(/_/g, ".")) || "",
        };
      },
    },
    {
      name: "Android",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Android") || e.includes("Adr"),
          version:
            (null === (n = e.match(/Android ([\d.]+);/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "HarmonyOS",
      parse(e = r) {
        var n, i;
        let a =
          (null === (n = e.match(/HarmonyOS (\d+.\d+)/)) || void 0 === n
            ? void 0
            : n[1]) ||
          (null === (i = e.match(/OpenHarmony(\d+.\d+)/)) || void 0 === i
            ? void 0
            : i[1]) ||
          "";
        if (!a) {
          var o, t;
          let n =
            +(null === (o = e.match(/HMSCore (\d+.\d+)/)) || void 0 === o
              ? void 0
              : o[1]) || 0;
          n >= 6.1
            ? (a = "4.0")
            : n >= 6
            ? (a = "3.0")
            : n >= 5
            ? (a = "2.0")
            : n >= 4 && (a = "1.0"),
            (a =
              { 10: "3.0", 12: "4.0" }[
                (null === (t = e.match(/Android (\d+);/)) || void 0 === t
                  ? void 0
                  : t[1]) || 0
              ] ?? a);
        }
        return {
          is:
            e.includes("HarmonyOS") ||
            e.includes("OpenHarmony") ||
            e.includes("ArkWeb"),
          version: a,
        };
      },
    },
    {
      name: "Ubuntu",
      parse: (e = r) => ({ is: e.includes("Ubuntu"), version: "" }),
    },
    {
      name: "FreeBSD",
      parse: (e = r) => ({ is: e.includes("FreeBSD"), version: "" }),
    },
    {
      name: "Debian",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Debian"),
          version:
            (null === (n = e.match(/Debian\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "iOS",
      parse(e = r) {
        var n;
        return {
          is: e.includes("like Mac OS X"),
          version:
            (null === (n = e.match(/OS ([\d_]+) like/)) || void 0 === n
              ? void 0
              : n[1].replace(/_/g, ".")) || "",
        };
      },
    },
    {
      name: "Windows Phone",
      parse(e = r) {
        var n;
        return {
          is: e.includes("IEMobile") || e.includes("Windows Phone"),
          version:
            (null === (n = e.match(/Windows Phone( OS)? ([\d.]+);/)) ||
            void 0 === n
              ? void 0
              : n[2]) || "",
        };
      },
    },
    {
      name: "BlackBerry",
      parse: (e = r) => ({
        is: e.includes("BlackBerry") || e.includes("RIM"),
        version: "",
      }),
    },
    {
      name: "MeeGo",
      parse: (e = r) => ({ is: e.includes("MeeGo"), version: "" }),
    },
    {
      name: "Symbian",
      parse(e = r) {
        var n;
        return {
          is: e.includes("Symbian"),
          version:
            (null === (n = e.match(/Series60\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "Chrome OS",
      parse(e = r) {
        var n, i;
        return {
          is: e.includes("CrOS"),
          version:
            (null === (n = e.match(/MSIE ([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) ||
            (null === (i = e.match(/rv:([\d.]+)/)) || void 0 === i
              ? void 0
              : i[1]) ||
            "",
        };
      },
    },
    {
      name: "WebOS",
      parse(e = r) {
        var n;
        return {
          is: e.includes("hpwOS"),
          version:
            (null === (n = e.match(/hpwOS\/([\d.]+);/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
    {
      name: "UOS",
      parse(e = r) {
        var n;
        return {
          is: e.includes("UOS"),
          version:
            (null === (n = e.match(/UOS\/([\d.]+)/)) || void 0 === n
              ? void 0
              : n[1]) || "",
        };
      },
    },
  ];
  fe.forEach((e) => {
    e.is ||
      (e.is = async function () {
        return e.parse().is;
      }),
      e.version ||
        (e.version = async function () {
          return e.parse().version;
        });
  });
  var be = {
    name: "system",
    parse(e = r) {
      let n = "",
        i = "";
      fe.forEach(function (r) {
        r.parse(e).is && ((n = r.name), (i = r.parse(e).version));
      });
      let a = "";
      e.match(/(Win64|x64|WOW64|x86_64)/i)
        ? (a = "Win64")
        : e.match(/(Win32|x86|WOW32)/i)
        ? (a = "Win32")
        : e.match(/aarch64|arm64/)
        ? (a = "ARM64")
        : e.match(/arm32/)
        ? (a = "ARM32")
        : e.match(/iPhone/)
        ? (a = "iPhone")
        : e.match(/iPad/)
        ? (a = "iPad")
        : e.match(/iPod/)
        ? (a = "iPod")
        : e.match(/Android/) && (a = "Android");
      let o = "",
        t = e + "|" + a;
      o =
        t.match(/armv?\d+/i) || t.match(/aarch64/)
          ? "arm"
          : t.match(/loongarch64/)
          ? "loongarch"
          : "x86";
      let s = e.match(/Win64|x64|WOW64|x86_64|aarch64|arm64|loongarch64/i)
        ? 64
        : 32;
      return {
        system: n,
        systemVersion: i,
        platform: a,
        architecture: o,
        bitness: s,
      };
    },
    async getInfo() {
      var e, n;
      let {
        system: r,
        systemVersion: a,
        platform: o,
        architecture: t,
        bitness: s,
      } = this.parse();
      for (let e of fe)
        (await e.is()) && ((r = e.name), (a = await e.version()));
      var l, d;
      (null != i &&
        null !== (e = i.navigator) &&
        void 0 !== e &&
        e.platform &&
        (o = i.navigator.platform),
      null != i &&
        null !== (n = i.navigator) &&
        void 0 !== n &&
        n.userAgentData) &&
        ((t = await (null === (l = i.navigator.userAgentData) || void 0 === l
          ? void 0
          : l
              .getHighEntropyValues(["architecture"])
              .then((e) => e.architecture || t))),
        (s = await (null === (d = i.navigator.userAgentData) || void 0 === d
          ? void 0
          : d.getHighEntropyValues(["bitness"]).then((e) => +e.bitness || s))));
      return {
        system: r,
        systemVersion: a,
        platform: o,
        architecture: t,
        bitness: s,
      };
    },
  };
  let we = [
    {
      name: "Mobile",
      parse: (e = r) => ({
        is: e.includes("Mobi") || e.includes("iPh") || e.includes("480"),
      }),
    },
    {
      name: "Tablet",
      parse: (e = r) => ({
        is: e.includes("Tablet") || e.includes("Pad") || e.includes("Nexus 7"),
      }),
      async is() {
        return (
          this.parse().is ||
          ("MacIntel" === (null == i ? void 0 : i.navigator.platform) &&
            (null == i ? void 0 : i.navigator.maxTouchPoints) > 1)
        );
      },
    },
  ];
  we.forEach((e) => {
    e.is ||
      (e.is = async function () {
        return e.parse().is;
      });
  });
  var Se = {
      name: "device",
      parse(e = r) {
        let n = "Desktop";
        return (
          we.forEach(function (i) {
            i.parse(e).is && (n = i.name);
          }),
          { device: n }
        );
      },
      async getInfo() {
        var e;
        let n =
            (null === globalThis || void 0 === globalThis
              ? void 0
              : globalThis.devicePixelRatio) || 1,
          i =
            (null === globalThis ||
            void 0 === globalThis ||
            null === (e = globalThis.navigator) ||
            void 0 === e
              ? void 0
              : e.deviceMemory) || 4;
        return Object.assign(
          { devicePixelRatio: n, deviceMemory: i },
          this.parse()
        );
      },
    },
    ye = {
      name: "gpu",
      parse: () => ({}),
      async getInfo() {
        let e = "",
          n = "";
        if (null != i && i.document) {
          let o = i.document
            .createElement("canvas")
            .getContext("experimental-webgl");
          if (o) {
            var r, a;
            let i = o.getExtension("WEBGL_debug_renderer_info"),
              t = o.getParameter(i.UNMASKED_RENDERER_WEBGL);
            (e =
              (null === (r = t.match(/ANGLE \((.+?),/)) || void 0 === r
                ? void 0
                : r[1]) || ""),
              (n =
                (null === (a = t.match(/, (.+?) (\(|vs_)/)) || void 0 === a
                  ? void 0
                  : a[1]) || "");
          }
        }
        return { gpu: e, gpuModel: n };
      },
    };
  const Be =
      /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,
    Ae = /\b(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}\b/i;
  let Ce =
    globalThis.RTCPeerConnection ||
    globalThis.mozRTCPeerConnection ||
    globalThis.webkitRTCPeerConnection;
  var Ee = {
      name: "network",
      parse: () => ({}),
      async getInfo() {
        var e, n;
        let r = "unknown",
          a =
            null == i || null === (e = i.navigator) || void 0 === e
              ? void 0
              : e.connection;
        return (
          a &&
            ((r = a.type || a.effectiveType),
            ("2" != r && "unknown" != r) || (r = "wifi")),
          {
            network: r,
            isOnline:
              (null == i || null === (n = i.navigator) || void 0 === n
                ? void 0
                : n.onLine) || !1,
            ip: await (async function () {
              const e = new Set(),
                n = (n) => {
                  var i;
                  const r =
                    null == n || null === (i = n.candidate) || void 0 === i
                      ? void 0
                      : i.candidate;
                  if (r)
                    for (const n of [Be, Ae]) {
                      const i = r.match(n);
                      i && e.add(i[0]);
                    }
                };
              return new Promise(function (i, r) {
                const a = new Ce({
                  iceServers: [
                    { urls: "stun:stun.l.google.com:19302" },
                    { urls: "stun:stun.services.mozilla.com" },
                  ],
                });
                a.addEventListener("icecandidate", n),
                  a.createDataChannel(""),
                  a.createOffer().then((e) => a.setLocalDescription(e), r);
                let o = 20,
                  t = null,
                  s = function () {
                    try {
                      a.removeEventListener("icecandidate", n), a.close();
                    } catch {}
                    t && clearInterval(t);
                  };
                t = setInterval(function () {
                  let n = [...e];
                  n.length ? (s(), i(n[0])) : o ? o-- : (s(), i(""));
                }, 100);
              });
            })(),
          }
        );
      },
    },
    Te = {
      name: "battery",
      parse: () => ({}),
      async getInfo() {
        var e;
        let n = !0,
          r = 1;
        return (
          null != i &&
            null !== (e = i.navigator) &&
            void 0 !== e &&
            e.getBattery &&
            ((n = await i.navigator
              .getBattery()
              .then((e) => (null == e ? void 0 : e.charging))),
            (r = await i.navigator
              .getBattery()
              .then((e) => +(null == e ? void 0 : e.level) || -1))),
          { isCharging: n, battery: r }
        );
      },
    };
  var xe = {
      name: "screen",
      parse: () => ({}),
      async getInfo() {
        var e, n, r, a, o, t, s;
        return {
          screenWidth:
            (null == i || null === (e = i.screen) || void 0 === e
              ? void 0
              : e.width) || 0,
          screenHeight:
            (null == i || null === (n = i.screen) || void 0 === n
              ? void 0
              : n.height) || 0,
          clientWidth:
            (null == i ||
            null === (r = i.document) ||
            void 0 === r ||
            null === (r = r.documentElement) ||
            void 0 === r
              ? void 0
              : r.clientWidth) ||
            (null == i ||
            null === (a = i.document) ||
            void 0 === a ||
            null === (a = a.body) ||
            void 0 === a
              ? void 0
              : a.clientWidth) ||
            0,
          clientHeight:
            (null == i ||
            null === (o = i.document) ||
            void 0 === o ||
            null === (o = o.documentElement) ||
            void 0 === o
              ? void 0
              : o.clientHeight) ||
            (null == i ||
            null === (t = i.document) ||
            void 0 === t ||
            null === (t = t.body) ||
            void 0 === t
              ? void 0
              : t.clientHeight) ||
            0,
          screenFPS: await (async function () {
            return new Promise(function (e) {
              let n = 0,
                i = 1,
                r = [],
                a = function (o) {
                  if (n > 0)
                    if (i < 12)
                      r.push(o - n), (n = o), i++, requestAnimationFrame(a);
                    else {
                      r.sort(), (r = r.slice(1, 11));
                      let n = r.reduce((e, n) => e + n);
                      const i = 10 * Math.round(1e4 / n / 10);
                      e(i);
                    }
                  else (n = o), requestAnimationFrame(a);
                };
              requestAnimationFrame(a);
            });
          })(),
          screenColorDepth: null == i ? void 0 : i.screen.colorDepth,
          screenPixelDepth: null == i ? void 0 : i.screen.pixelDepth,
          isTouch:
            (null == i || null === (s = i.navigator) || void 0 === s
              ? void 0
              : s.maxTouchPoints) > 0 || !1,
        };
      },
    },
    Pe = {
      name: "language",
      parse: () => ({}),
      async getInfo() {
        var e, n, r;
        let a =
          (null == i || null === (e = i.navigator) || void 0 === e
            ? void 0
            : e.language) ||
          (null == i || null === (n = i.navigator) || void 0 === n
            ? void 0
            : n.browserLanguage) ||
          (null == i || null === (r = i.navigator) || void 0 === r
            ? void 0
            : r.systemLanguage);
        if ("string" != typeof a) return "Unknown language";
        let o = a.split("-");
        return o[1] && (o[1] = o[1].toUpperCase()), { language: o.join("_") };
      },
    },
    Me = {
      name: "timezone",
      parse: () => ({}),
      async getInfo() {
        var e;
        return {
          timezone:
            null === (e = Intl) ||
            void 0 === e ||
            null === (e = e.DateTimeFormat()) ||
            void 0 === e ||
            null === (e = e.resolvedOptions()) ||
            void 0 === e
              ? void 0
              : e.timeZone,
        };
      },
    };
  let Ie = function (e, n) {
      return (e << n) | (e >>> (32 - n));
    },
    Oe = function (e, n) {
      let i, r, a, o, t;
      return (
        (a = 2147483648 & e),
        (o = 2147483648 & n),
        (i = 1073741824 & e),
        (r = 1073741824 & n),
        (t = (1073741823 & e) + (1073741823 & n)),
        i & r
          ? 2147483648 ^ t ^ a ^ o
          : i | r
          ? 1073741824 & t
            ? 3221225472 ^ t ^ a ^ o
            : 1073741824 ^ t ^ a ^ o
          : t ^ a ^ o
      );
    },
    De = function (e, n, i, r, a, o, t) {
      return (
        (e = Oe(
          e,
          Oe(
            Oe(
              (function (e, n, i) {
                return (e & n) | (~e & i);
              })(n, i, r),
              a
            ),
            t
          )
        )),
        Oe(Ie(e, o), n)
      );
    },
    ke = function (e, n, i, r, a, o, t) {
      return (
        (e = Oe(
          e,
          Oe(
            Oe(
              (function (e, n, i) {
                return (e & i) | (n & ~i);
              })(n, i, r),
              a
            ),
            t
          )
        )),
        Oe(Ie(e, o), n)
      );
    },
    Re = function (e, n, i, r, a, o, t) {
      return (
        (e = Oe(
          e,
          Oe(
            Oe(
              (function (e, n, i) {
                return e ^ n ^ i;
              })(n, i, r),
              a
            ),
            t
          )
        )),
        Oe(Ie(e, o), n)
      );
    },
    We = function (e, n, i, r, a, o, t) {
      return (
        (e = Oe(
          e,
          Oe(
            Oe(
              (function (e, n, i) {
                return n ^ (e | ~i);
              })(n, i, r),
              a
            ),
            t
          )
        )),
        Oe(Ie(e, o), n)
      );
    },
    Le = function (e) {
      let n,
        i,
        r = "",
        a = "";
      for (i = 0; i <= 3; i++)
        (n = (e >>> (8 * i)) & 255),
          (a = "0" + n.toString(16)),
          (r += a.substr(a.length - 2, 2));
      return r;
    };
  function He(e) {
    let n,
      i,
      r,
      a,
      o,
      t,
      s,
      l,
      d,
      u = Array();
    for (
      e = (function (e) {
        e = e.replace(/\x0d\x0a/g, "\n");
        let n = "";
        for (let i = 0; i < e.length; i++) {
          let r = e.charCodeAt(i);
          r < 128
            ? (n += String.fromCharCode(r))
            : r > 127 && r < 2048
            ? ((n += String.fromCharCode((r >> 6) | 192)),
              (n += String.fromCharCode((63 & r) | 128)))
            : ((n += String.fromCharCode((r >> 12) | 224)),
              (n += String.fromCharCode(((r >> 6) & 63) | 128)),
              (n += String.fromCharCode((63 & r) | 128)));
        }
        return n;
      })(e),
        u = (function (e) {
          let n,
            i = e.length,
            r = i + 8,
            a = 16 * ((r - (r % 64)) / 64 + 1),
            o = Array(a - 1),
            t = 0,
            s = 0;
          for (; s < i; )
            (n = (s - (s % 4)) / 4),
              (t = (s % 4) * 8),
              (o[n] = o[n] | (e.charCodeAt(s) << t)),
              s++;
          return (
            (n = (s - (s % 4)) / 4),
            (t = (s % 4) * 8),
            (o[n] = o[n] | (128 << t)),
            (o[a - 2] = i << 3),
            (o[a - 1] = i >>> 29),
            o
          );
        })(e),
        t = 1732584193,
        s = 4023233417,
        l = 2562383102,
        d = 271733878,
        n = 0;
      n < u.length;
      n += 16
    )
      (i = t),
        (r = s),
        (a = l),
        (o = d),
        (t = De(t, s, l, d, u[n + 0], 7, 3614090360)),
        (d = De(d, t, s, l, u[n + 1], 12, 3905402710)),
        (l = De(l, d, t, s, u[n + 2], 17, 606105819)),
        (s = De(s, l, d, t, u[n + 3], 22, 3250441966)),
        (t = De(t, s, l, d, u[n + 4], 7, 4118548399)),
        (d = De(d, t, s, l, u[n + 5], 12, 1200080426)),
        (l = De(l, d, t, s, u[n + 6], 17, 2821735955)),
        (s = De(s, l, d, t, u[n + 7], 22, 4249261313)),
        (t = De(t, s, l, d, u[n + 8], 7, 1770035416)),
        (d = De(d, t, s, l, u[n + 9], 12, 2336552879)),
        (l = De(l, d, t, s, u[n + 10], 17, 4294925233)),
        (s = De(s, l, d, t, u[n + 11], 22, 2304563134)),
        (t = De(t, s, l, d, u[n + 12], 7, 1804603682)),
        (d = De(d, t, s, l, u[n + 13], 12, 4254626195)),
        (l = De(l, d, t, s, u[n + 14], 17, 2792965006)),
        (s = De(s, l, d, t, u[n + 15], 22, 1236535329)),
        (t = ke(t, s, l, d, u[n + 1], 5, 4129170786)),
        (d = ke(d, t, s, l, u[n + 6], 9, 3225465664)),
        (l = ke(l, d, t, s, u[n + 11], 14, 643717713)),
        (s = ke(s, l, d, t, u[n + 0], 20, 3921069994)),
        (t = ke(t, s, l, d, u[n + 5], 5, 3593408605)),
        (d = ke(d, t, s, l, u[n + 10], 9, 38016083)),
        (l = ke(l, d, t, s, u[n + 15], 14, 3634488961)),
        (s = ke(s, l, d, t, u[n + 4], 20, 3889429448)),
        (t = ke(t, s, l, d, u[n + 9], 5, 568446438)),
        (d = ke(d, t, s, l, u[n + 14], 9, 3275163606)),
        (l = ke(l, d, t, s, u[n + 3], 14, 4107603335)),
        (s = ke(s, l, d, t, u[n + 8], 20, 1163531501)),
        (t = ke(t, s, l, d, u[n + 13], 5, 2850285829)),
        (d = ke(d, t, s, l, u[n + 2], 9, 4243563512)),
        (l = ke(l, d, t, s, u[n + 7], 14, 1735328473)),
        (s = ke(s, l, d, t, u[n + 12], 20, 2368359562)),
        (t = Re(t, s, l, d, u[n + 5], 4, 4294588738)),
        (d = Re(d, t, s, l, u[n + 8], 11, 2272392833)),
        (l = Re(l, d, t, s, u[n + 11], 16, 1839030562)),
        (s = Re(s, l, d, t, u[n + 14], 23, 4259657740)),
        (t = Re(t, s, l, d, u[n + 1], 4, 2763975236)),
        (d = Re(d, t, s, l, u[n + 4], 11, 1272893353)),
        (l = Re(l, d, t, s, u[n + 7], 16, 4139469664)),
        (s = Re(s, l, d, t, u[n + 10], 23, 3200236656)),
        (t = Re(t, s, l, d, u[n + 13], 4, 681279174)),
        (d = Re(d, t, s, l, u[n + 0], 11, 3936430074)),
        (l = Re(l, d, t, s, u[n + 3], 16, 3572445317)),
        (s = Re(s, l, d, t, u[n + 6], 23, 76029189)),
        (t = Re(t, s, l, d, u[n + 9], 4, 3654602809)),
        (d = Re(d, t, s, l, u[n + 12], 11, 3873151461)),
        (l = Re(l, d, t, s, u[n + 15], 16, 530742520)),
        (s = Re(s, l, d, t, u[n + 2], 23, 3299628645)),
        (t = We(t, s, l, d, u[n + 0], 6, 4096336452)),
        (d = We(d, t, s, l, u[n + 7], 10, 1126891415)),
        (l = We(l, d, t, s, u[n + 14], 15, 2878612391)),
        (s = We(s, l, d, t, u[n + 5], 21, 4237533241)),
        (t = We(t, s, l, d, u[n + 12], 6, 1700485571)),
        (d = We(d, t, s, l, u[n + 3], 10, 2399980690)),
        (l = We(l, d, t, s, u[n + 10], 15, 4293915773)),
        (s = We(s, l, d, t, u[n + 1], 21, 2240044497)),
        (t = We(t, s, l, d, u[n + 8], 6, 1873313359)),
        (d = We(d, t, s, l, u[n + 15], 10, 4264355552)),
        (l = We(l, d, t, s, u[n + 6], 15, 2734768916)),
        (s = We(s, l, d, t, u[n + 13], 21, 1309151649)),
        (t = We(t, s, l, d, u[n + 4], 6, 4149444226)),
        (d = We(d, t, s, l, u[n + 11], 10, 3174756917)),
        (l = We(l, d, t, s, u[n + 2], 15, 718787259)),
        (s = We(s, l, d, t, u[n + 9], 21, 3951481745)),
        (t = Oe(t, i)),
        (s = Oe(s, r)),
        (l = Oe(l, a)),
        (d = Oe(d, o));
    return (Le(t) + Le(s) + Le(l) + Le(d)).toUpperCase();
  }
  var Ve = {
      name: "webgl",
      async getInfo() {
        let e = i.document.createElement("canvas");
        (e.width = 256), (e.height = 128);
        let n =
            e.getContext("webgl2", { preserveDrawingBuffer: !0 }) ||
            e.getContext("experimental-webgl2", {
              preserveDrawingBuffer: !0,
            }) ||
            e.getContext("webgl", { preserveDrawingBuffer: !0 }) ||
            e.getContext("experimental-webgl", { preserveDrawingBuffer: !0 }) ||
            e.getContext("moz-webgl", { preserveDrawingBuffer: !0 }),
          r = n.createBuffer();
        n.bindBuffer(n.ARRAY_BUFFER, r);
        let a = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.7321, 0]);
        n.bufferData(n.ARRAY_BUFFER, a, n.STATIC_DRAW),
          (r.itemSize = 3),
          (r.numItems = 3);
        let o = n.createProgram(),
          t = n.createShader(n.VERTEX_SHADER);
        n.shaderSource(
          t,
          "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
        ),
          n.compileShader(t);
        let s = n.createShader(n.FRAGMENT_SHADER);
        n.shaderSource(
          s,
          "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
        ),
          n.compileShader(s),
          n.attachShader(o, t),
          n.attachShader(o, s),
          n.linkProgram(o),
          n.useProgram(o),
          (o.vertexPosAttrib = n.getAttribLocation(o, "attrVertex")),
          (o.offsetUniform = n.getUniformLocation(o, "uniformOffset")),
          n.enableVertexAttribArray(o.vertexPosArray),
          n.vertexAttribPointer(
            o.vertexPosAttrib,
            r.itemSize,
            n.FLOAT,
            !1,
            0,
            0
          ),
          n.uniform2f(o.offsetUniform, 1, 1),
          n.drawArrays(n.TRIANGLE_STRIP, 0, r.numItems);
        let l = new Uint8Array(131072);
        n.readPixels(0, 0, 256, 128, n.RGBA, n.UNSIGNED_BYTE, l);
        let d = JSON.stringify(l).replace(/,?"[0-9]+":/g, "");
        return "" == d.replace(/^{[0]+}$/g, "") ? "n/a" : He(d);
      },
    },
    Ue = {
      name: "canvas",
      async getInfo() {
        let e = i.document.createElement("canvas");
        (e.width = 1e3), (e.height = 200);
        let n = e.getContext("2d");
        return (
          (n.textBaseline = "alphabetic"),
          (n.fillStyle = "#f60"),
          n.fillRect(150, 50, 100, 100),
          (n.fillStyle = "#069"),
          (n.font = "12pt Arial"),
          n.fillText("😃just for test the canvas feature!", 3, 15),
          (n.fillStyle = "rgba(102, 204, 0, 0.2)"),
          (n.font = "18pt Arial"),
          n.fillText("😃just for test the canvas feature!", 6, 45),
          (n.globalCompositeOperation = "multiply"),
          (n.fillStyle = "rgb(0,255,255)"),
          n.beginPath(),
          n.arc(50, 100, 50, 0, 2 * Math.PI, !0),
          n.closePath(),
          n.fill(),
          (n.fillStyle = "rgb(255,0,255)"),
          n.beginPath(),
          n.arc(75, 50, 50, 0, 2 * Math.PI, !0),
          n.closePath(),
          n.fill(),
          (n.fillStyle = "rgb(255,255,0)"),
          n.beginPath(),
          n.arc(100, 100, 50, 0, 2 * Math.PI, !0),
          n.closePath(),
          n.fill(),
          He(e.toDataURL())
        );
      },
    },
    _e = {
      name: "font-family",
      is(e = "Arial") {
        if ("string" != typeof e || null == i || !i.document) return !1;
        let n = "Arial",
          r = 100,
          a = 100,
          o = i.document.createElement("canvas"),
          t = o.getContext("2d", { willReadFrequently: !0 });
        (o.width = r),
          (o.height = a),
          (t.textAlign = "center"),
          (t.fillStyle = "black"),
          (t.textBaseline = "middle");
        let s = function (e) {
          t.clearRect(0, 0, r, a),
            (t.font = `100px ${e}, ${n}`),
            t.fillText("永", 50, 50);
          let i = t.getImageData(0, 0, r, a).data;
          return [].slice.call(i).filter(function (e) {
            return 0 != e;
          });
        };
        return s(n).join("") !== s(e).join("");
      },
    },
    Fe = {
      name: "font",
      async getInfo() {
        let e = [];
        return (
          [
            "Andale Mono",
            "Arial",
            "Arial Black",
            "Arial Hebrew",
            "Arial MT",
            "Arial Narrow",
            "Arial Rounded MT Bold",
            "Arial Unicode MS",
            "Bitstream Vera Sans Mono",
            "Book Antiqua",
            "Bookman Old Style",
            "Calibri",
            "Cambria",
            "Cambria Math",
            "Century",
            "Century Gothic",
            "Century Schoolbook",
            "Comic Sans",
            "Comic Sans MS",
            "Consolas",
            "Courier",
            "Courier New",
            "Geneva",
            "Georgia",
            "Helvetica",
            "Helvetica Neue",
            "Impact",
            "Lucida Bright",
            "Lucida Calligraphy",
            "Lucida Console",
            "Lucida Fax",
            "LUCIDA GRANDE",
            "Lucida Handwriting",
            "Lucida Sans",
            "Lucida Sans Typewriter",
            "Lucida Sans Unicode",
            "Microsoft Sans Serif",
            "Monaco",
            "Monotype Corsiva",
            "MS Gothic",
            "MS Outlook",
            "MS PGothic",
            "MS Reference Sans Serif",
            "MS Sans Serif",
            "MS Serif",
            "MYRIAD",
            "MYRIAD PRO",
            "Palatino",
            "Palatino Linotype",
            "Segoe Print",
            "Segoe Script",
            "Segoe UI",
            "Segoe UI Light",
            "Segoe UI Semibold",
            "Segoe UI Symbol",
            "Tahoma",
            "Times",
            "Times New Roman",
            "Times New Roman PS",
            "Trebuchet MS",
            "Verdana",
            "Wingdings",
            "Wingdings 2",
            "Wingdings 3",
          ].forEach(function (n) {
            _e.is(n) && e.push(n);
          }),
          He(e.join(","))
        );
      },
    },
    Ne = {
      name: "audio",
      getInfo: async () =>
        new Promise(function (e, n) {
          let i = new (window.OfflineAudioContext ||
              window.webkitOfflineAudioContext)(1, 44100, 44100),
            r = i.createOscillator();
          (r.type = "triangle"), r.frequency.setValueAtTime(1e4, i.currentTime);
          let a = i.createDynamicsCompressor();
          [
            ["threshold", -50],
            ["knee", 40],
            ["ratio", 12],
            ["reduction", -20],
            ["attack", 0],
            ["release", 0.25],
          ].forEach(function (e) {
            void 0 !== a[e[0]] &&
              "function" == typeof a[e[0]].setValueAtTime &&
              a[e[0]].setValueAtTime(e[1], i.currentTime);
          }),
            r.connect(a),
            a.connect(i.destination),
            r.start(0),
            i.startRendering();
          let o = setTimeout(function () {
            (i.oncomplete = function () {}), (i = null), e(He("audio Timeout"));
          }, 1e3);
          i.oncomplete = function (n) {
            o && clearTimeout(o);
            let i = n.renderedBuffer
              .getChannelData(0)
              .slice(4500, 5e3)
              .reduce(function (e, n) {
                return e + Math.abs(n);
              }, 0)
              .toString();
            r.disconnect(), a.disconnect(), e(He(i));
          };
        }),
    },
    Qe = {
      name: "webgl",
      is() {
        if (null == i || !i.document) return !1;
        const e = i.document.createElement("canvas"),
          n = e.getContext("webgl") || e.getContext("experimental-webgl");
        return n && n instanceof WebGLRenderingContext;
      },
    };
  return {
    parse(e) {
      let n = {};
      return (
        [he, be, Se].forEach((i) => {
          n = Object.assign(n, i.parse(e));
        }),
        n
      );
    },
    async getInfo(
      e = [
        "browser",
        "system",
        "device",
        "gpu",
        "network",
        "battery",
        "screen",
        "language",
        "timezone",
      ]
    ) {
      let n = {},
        i = [he, be, Se, ye, Ee, Te, xe, Pe, Me].filter((n) =>
          e.includes(n.name)
        );
      for (let e of i) n = Object.assign(n, await e.getInfo());
      return n;
    },
    async getFingerprint(e = ["webgl", "canvas", "font", "audio"]) {
      let n = {},
        i = [Ve, Ue, Fe, Ne].filter((n) => e.includes(n.name)),
        a = [r];
      for (let e of i) (n[e.name] = await e.getInfo()), a.push(n[e.name]);
      return (n.value = He(a.join(","))), n;
    },
    isSupport(e, n) {
      let i = [_e, Qe].find((n) => e == n.name);
      return !!i && i.is(n);
    },
  };
});