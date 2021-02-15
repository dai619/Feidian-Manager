import {request} from './axios';

export function update(param){
    return request({
        url:'/member/update',
        method:'post',
        data:param,
        //headers: { "Content-Type": "multipart/form-data" }
    })
}

export function adddata(param){
    return request({
        url:'/member/add',
        method:'post',
        data:param,
        //headers: { "Content-Type": "multipart/form-data" }
    })
}

export function getdata(){
    return request({
        url:'/member/list',
        method:'get'
    })
}
export function _delete(param){
    return request({
        url:'/member/delete',
        method:'post',
        data:param
    })
}