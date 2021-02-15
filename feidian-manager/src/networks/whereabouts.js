import {request} from './axios';

export function _delete(param){
    return request({
        url:'/whereabouts/delete',
        method:'post',
        data:param,
        headers: { 'Content-Type': 'multipart/form-data' }

    })
}

export function getdata(){
    return request({
        url:'/whereabouts/imgs',
        method:'post'
    })
}

export function upload(param){

    return request({
        url:'/whereabouts/upload',
        method:'post',
        data:param,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}