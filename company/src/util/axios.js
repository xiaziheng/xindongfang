import axios from 'axios'
const envConfig = {
  production: 'http://www.deresen.com',
}
export const baseURL = envConfig.production
let HTTP = axios.create({
  // baseURL,
  timeout: 30000,
//   headers: {
  
//   }
});
// //拦截器设置crsftoken
// HTTP.interceptors.response.use(function (config) {
//   // 在发送请求之前做些什么
//   HTTP.defaults.headers.csrfToken = Cookies.get('csrf_token')? Cookies.get('csrf_token'):'';
//   iView.LoadingBar.start();
//   return config
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// //添加一个返回拦截器
// HTTP.interceptors.response.use(function(response) {
//   iView.LoadingBar.finish();
//   return response;
// }, function(error) {
//   return Promise.reject(error);
// });

export {HTTP}
