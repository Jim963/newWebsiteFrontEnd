import axios from "axios";

// 全局配置
//如果前後端同一包用這一個
const instance = axios.create({
  baseURL: "http://localhost:81",
  timeout: 10000,
  headers: {},
});

//前後端分開跑
// const instance = axios.create({
//   baseURL: "http://202.182.124.162/:81",
//   timeout: 10000,
//   headers: {},
// });

export default instance;