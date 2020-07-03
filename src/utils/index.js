import device from "current-device";
/**
 * @description 获取当前域名环境
 * @return {API_ENV}
 */
export function getPreHost({ global, API_ENV }) {
  const hostname = window.location.hostname;
  const searchPreHost = hostname.match(/^[a-z]+(?=\.|-)/g); // 查找以 test uat pre .或- 开头的域名，并保存结果，找不到则为 null
  if (/^localhost|^127\.0\.0\.1|^192\.168\.|^10\.105\./.test(hostname)) {
    return global.mock; // 本机开发模拟
  }
  if (!searchPreHost) {
    return API_ENV.PROD;
  }
  const hostENV = searchPreHost[0].toUpperCase();
  const preHost = Object.keys(API_ENV).includes(hostENV)
    ? API_ENV[hostENV]
    : API_ENV.PROD;
  return preHost;
}

export const getDeviceType = () => {
  let type = "";
  switch (device.type) {
    case "mobile": // 手机
    case "tablet": // 平板
      type = "mobile";
      break;
    case "desktop": // pc
      type = "pc";
      break;
  }
  return type;
};

/**
 * 获取 url query 字段里的值
 * @param {string} key
 */
export const getUrlQuery = key => {
  const rex = new RegExp("\\b" + key + "=(\\b\\w+)");
  const result = location.search.match(rex);
  const field = Array.isArray(result) ? result[1] : "";
  return field;
};

export const setDefaultLang = ({ i18n, store }) => {
  const defaultLang = getUrlQuery("lang") || "cn";
  store.dispatch("choose", defaultLang);
  i18n.locale = defaultLang;
  document.documentElement.lang =
    i18n.locale === "cn" ? "zh-cmn-Hans" : i18n.locale;
};

export const transformQuery = ({ query = {}, language }) => {
  let queryString = "";
  query = JSON.parse(JSON.stringify(query));
  if (language === "cn") {
    delete query.lang;
  } else {
    query.lang = language;
  }
  Object.keys(query).forEach((key, i) => {
    queryString += `${i ? "&" : "?"}${key}=${query[key]}`;
  });
  return queryString;
};
