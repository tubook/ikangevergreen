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
