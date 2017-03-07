var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    // 创建文件夹
    fs.mkdir("./album/aaa");
});

server.listen(3000,'127.0.0.1');
