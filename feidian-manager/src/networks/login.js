import {request} from './axios';


export function login(loginForm){
    let param = new FormData(); //创建form对象
      Object.keys(loginForm).forEach(function (key) {
        param.append(key.toString(), loginForm[key].toString());
      });
    return request({
        url:'/login',
        method:'post',
        data:param,
        headers: { "Content-Type": "multipart/form-data" }
    });
}