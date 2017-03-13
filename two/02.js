
var http = require('http');

var server = http.createServer(function(req,res){
    if(req.url == "/"){
        // 设置相应头
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
        res.end('成功');
    }else{
        res.writeHead(404,{"Content-Type":"text/html;charset=UTF8"});
        res.end('失败');
    }

});

server.listen(3000,'127.0.0.1');
