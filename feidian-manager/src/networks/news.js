
import {request} from './axios'

export function _delete(param){
    return request({
        url:'/news/delete',
        method:'post',
        data:param
    })
}

export function update(param){
    //let param = new FormData();
    // Object.keys(form).forEach(function (key) {
    //     param.append(key.toString(), form[key].toString())
    //   })
    return request({
        url:'/news/update',
        method:'post',
        data:param,
        //headers: { "Content-Type": "multipart/form-data" }
    })
}

export function adddata(param){
    // let param = new FormData();
    // Object.keys(form).forEach(function (key) {
    //     param.append(key.toString(), form[key].toString())
    //   })
    return request({
        url:'/news/add',
        method:'post',
        data:param,
        // headers: { "Content-Type": "multipart/form-data" }
    })
}

export function getdata(){
    return request({
        url:'/news/list',
        method:'get',
    })
}

export function _search(param){
    return request({
        url:'/news/search',
        method:'post',
        data:param
    })
}