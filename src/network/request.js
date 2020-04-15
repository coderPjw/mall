import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1',
    timeout: 500
  })

  // 2.配置拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return config
  })

  instance.interceptors.response.use(config => {
    return config
  }, err => {
    return config
  })
  // 3.发送网络请求
  return instance(config)
}