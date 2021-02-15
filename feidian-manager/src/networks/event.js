import {request} from './axios';

export function update(param){
    return request({
        url:'/event/update',
        method:'post',
        data:param,
        //headers: { "Content-Type": "multipart/form-data" }
    })
}

export function adddata(param){
    // let param = new FormData(); //创建form对象
    //   Object.keys(form).forEach(function (key) {
    //     param.append(key.toString(), form[key].toString());
    //   });
    return request({
        url:'/event/add',
        method:'post',
        data:param,
        //headers: { "Content-Type": "multipart/form-data" }
    })
}

export function getdata(){
    return request({
        url:'/event/list',
        method:'get'
    })
}
export function _delete(param){
    return request({
        url:'/event/delete',
        method:'post',
        data:param
    })
}
