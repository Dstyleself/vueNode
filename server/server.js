
// node 加载静态资源

let http = require('http')
let fs = require('fs')
let url = require('url')
let util = require('util')


let server = http.createServer(( req,res ) => {
    let pathName = url.parse(req.url).pathname.substring(1);
    console.log(pathName)
    fs.readFile(pathName,(err,data) => {
        if(err){
            res.writeHead(404,{
                'Content-Type' : 'text/html'
            })
        }else{
            res.writeHead(200,{
                'Content-Type' : 'text/html'
            })
            res.write(data.toString())
        }
        res.end()
    })
})

server.listen(3000,'127.0.0.1',() => {
    console.log('服务已经运行，请打开浏览器输入127.0.0.1：3000查看')
})