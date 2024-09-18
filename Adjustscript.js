// build a new URL with parameters p0-p6, fbclid and fbpaid
function buildURL(p0, p1, p2, p3, p4, p5, p6, fbclid, fbpid) {
  if (!p0) {
    return null;
  }
  tracker_token = p0;
  if (p1 || p2) {
    campaign = p1 + "(" + p2 + ")";
  } else {
    campaign = "";
  }
  if (p3 || p4) {
    adgroup = p3 + "(" + p4 + ")";
  } else {
    adgroup = "";
  }
  if (p5 || p6) {
    creative = p5 + "(" + p6 + ")";
  } else {
    creative = "";
  }
  if (!fbclid) {
    fbclid = "";
  }
  if (!fbpid) {
    fbpid = "";
  }
  // build a tracker URL
  let params = { campaign, adgroup, creative, fbclid, fbpid };
  let newURL =
    "https://app.adjust.com/" +
    tracker_token +
    "?" +
    Object.keys(params)
      .map((key) => key + "=" + encodeURIComponent(params[key]))
      .join("&");
  return newURL;
}

//get fbpid from Cookie written by Facebook Pixel
function getFbPid() {
  let fbPid = document.cookie.match(/(^|;) ?_fbp=([^;]*)(;|$)/);
  if (fbPid) {
    return fbPid[2];
  } else {
    return null;
  }
}

const urlParams = new URLSearchParams(window.location.search);
//p0 = urlParams.get("p0") and fallback to "default"
p0 = urlParams.get("p0");
p1 = urlParams.get("p1");
p2 = urlParams.get("p2");
p3 = urlParams.get("p3");
p4 = urlParams.get("p4");
p5 = urlParams.get("p5");
p6 = urlParams.get("p6");
fbPid = urlParams.get("fbpid") || getFbPid();
fbClickId = urlParams.get("fbclid");

url = buildURL(p0, p1, p2, p3, p4, p5, p6, fbClickId, fbPid) || "";
if (!urlParams.get("fbpid") && !getFbPid()) {
  url = url.replace(/&fbpid=/g, "");
}
if (!urlParams.get("fbclid")) {
  url = url.replace(/&fbclid=/g, "");
}
if (url) {
  newUrl =
    url +
    "&redirect=https://hey777.shop/apk/Hey777-Slot.apk&fb_pixel_id=985166892932652&fb_access_token=EAANpbtGDVtEBO1SDlC8C7JLluUSCZBjyb3MxMj8mWjGORIiRQqgyIYZC9TWDpG2lzOdD2OUn1hiwJheQrQej7ZAichBBXk1CfclaSYqhOQMjl9K2gLlQyYaS94C1RtF0DXMZAuZA9cPfSJUPOa4yeeBYbfJ7bfskxeUyYYSMmG2u4fzakMiazERej8bxBSiJYoAZDZD";
} else {
  newUrl = "https://hey777.shop/apk/Hey777-Slot.apk";
}

Adjust.initSdk({
  appToken: "nuijp1b9kow0",
  environment: "production",
  logLevel: "none",
  attributionCallback: function (e, attribution) {
    console.log("Adid: " + attribution.adid);
    console.log("Tracker Token: " + attribution.tracker_token);
    console.log("Tracker Name: " + attribution.tracker_name);
    console.log("Network: " + attribution.network);
    console.log("Campaign: " + attribution.campaign);
    console.log("Adgroup: " + attribution.adgroup);
    console.log("Creative: " + attribution.creative);
    console.log("Click Label: " + attribution.click_label);
    console.log("Attribution State: " + attribution.state);
  },
});
console.log(Adjust.getAttribution(), "getAttribution");
