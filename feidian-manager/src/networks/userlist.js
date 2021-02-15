import {request} from './axios';

export function userupdate(form){
    // let param = new FormData();
    //     Object.keys(form).forEach(function(key) {
    //         param.append(key,form[key].toString());
    //     })
    return request({
        url:'/user/update',
        method:'post',
        data:form,
        // headers:{"Content-Type":"multipart/form-data"}
    })
}

export function useradd(form){
    // let param = new FormData();
    //     Object.keys(form).forEach(function(key) {
    //         param.append(key.toString(),form[key].toString());
    //     })
    return request({
        url:'/user/add',
        method:'post',
        data:form,
        //headers:{"Content-Type":"multipart/form-data"}
    })
}
//这里可以用formdata嘛？？？
export function getdata(){
    return request({
        url:'/user/list',
        method:'get'
    })
}

export function _delete(form){
    return request({
        url:'/user/delete',
        method:'post',
        data:form,
    })
}