import axios from "axios";

// 全局配置
const instance = axios.create({
  baseURL: "http://localhost:81",
  timeout: 10000,
  headers: {},
});

export default instance;