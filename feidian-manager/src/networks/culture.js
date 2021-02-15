import {request} from './axios';

export function _delete(param){
    return request({
        url:'/culture/delete',
        method:'post',
        data:param
    })
}

export function getdata(){
    return request({
        url:'/culture/imgs',
        method:'post'
    })
}

export function upload(param){

    return request({
        url:'/upload',
        method:'post',
        data:param,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}