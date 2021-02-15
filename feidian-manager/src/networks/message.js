import {request} from './axios';

export function getdata(){
    return request({
        url:'/message/list',
        method:'get'
    })
}
export function update(param){
    return request({
        url:'/message/update',
        method:'post',
        data:param,
        headers: { "Content-Type": "multipart/form-data" }
    })
}

export function adddata(param){
    return request({
        url:'/message/add',
        method:'post',
        data:param,
        //headers: { "Content-Type": "multipart/form-data" }
    })
}
export function _delete(param){
    return request({
        url:'/message/delete',
        method:'post',
        data:param
    })
}
