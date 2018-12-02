// 模拟服务端调用第三方接口

let https = require('https')
let util = require('util')

https.get('https://www.imooc.com/lecturer/ajaxrecteacher',(res) => {
    let data =  '';
    res.on('data',(chunk) => {
        data += chunk;
    })

    res.on('end',() => {
        let result = util.inspect(JSON.parse(data));
        console.log(result)
    })
    
})