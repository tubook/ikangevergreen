import axios from "axios";
import config from "@config";
const { root } = config;
// 创建axios实例
const $request = axios.create({
  baseURL: root,
  timeout: 30000
});

// 请求拦截器
$request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
$request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    // 公共错误判断
    // if (error.response) {
    //   switch (error.response.status) {
    //     case 404:
    //       console.log('找不到页面'); break
    //     case 500:
    //       console.log('服务器错误'); break
    //     default: break
    //   }
    // }
    return Promise.reject(error);
  }
);

const getData = (url, data = {}, method = "GET", headers, baseURL) => {
  method = method.toUpperCase();
  const obj = {
    url,
    method,
    headers,
    baseURL
  };
  if (method === "GET" || method === "DELETE") {
    // get请求防止IE缓存
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
      data.t = new Date().getTime();
    }
    obj.params = data;
  } else {
    obj.data = data;
  }
  return $request(obj);
};

export default getData;
