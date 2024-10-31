const req_key = CryptoJS.MD5("0123456789" + Date.now().toString())
  .toString()
  .slice(0, 16);

const DECODE_KEY = 102011 + "0123456789";
function aesEncrypt(data, key) {
  if (!data) return "";
  if (typeof data !== "string") {
    data = JSON.stringify(data);
  }
  const _key = CryptoJS.enc.Utf8.parse(key);
  const _data = CryptoJS.enc.Utf8.parse(data);
  const encryptText = CryptoJS.AES.encrypt(_data, _key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return { text: encryptText.toString(), key };
}

function aesDecode(data, key) {
  if (!data) return;
  let decodeText;

  const _key = CryptoJS.enc.Utf8.parse(key);
  const bytes = CryptoJS.AES.decrypt(data, _key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });

  if (bytes.toString(CryptoJS.enc.Utf8)) {
    decodeText = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } else {
    decodeText = data;
  }
  return decodeText;
}
function sendMessage(
  params = {
    uid: 0,
  }
) {
  let uuid = nanoid();
  let parser = new UAParser();
  if (localStorage.getItem("uuid")) {
    uuid = localStorage.getItem("uuid");
  } else {
    localStorage.setItem("uuid", JSON.stringify(uuid));
  }

  let reqData = {
    api: 0x6000046,
    device: `pwa-${parser.getBrowser().name}`,
    cur_ver: "1.1.6.1",
    target_ver: "1.1.6.1",
    step: params.step,
    uid: "",
    msg: JSON.stringify({ uuid, msg: params.msg }),
    seq: +dayjs().format("YYYYMMDDHHmmss"),
    ver: "1.1.6.1",
    app: 102011,
  };

  const xml = new XMLHttpRequest();
  xml.open("POST", "https://api.gap77.com/index2.php", true);
  xml.setRequestHeader("Content-Type", "application/json");
  console.log(reqData, "begin");
  const { text, key } = aesEncrypt(reqData, req_key);
  reqData = text + key;
  xml.send(reqData);

  return new Promise(function (resolve, reject) {
    xml.onreadystatechange = function () {
      if (xml.readyState === 4) {
        if (xml.status === 200) {
          resolve(aesDecode(xml.responseText, DECODE_KEY));
        } else {
          reject(xml.status);
        }
      }
    };
  });
}

// sendMessage({ step: 22, msg: "init pwa 落地页" });
