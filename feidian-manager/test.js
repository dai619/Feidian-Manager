const { resolve } = require("core-js/fn/promise");

new Promise((resolve,reject)=>{
    console.log(this === window);
    resolve();
}).then(()=>{
    console.log(this === window);
},()=>{
    console.log(this === window);
})