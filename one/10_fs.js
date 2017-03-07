var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    // stat表示状态
    fs.stat('./album/bbb',function(err,data){
        // 检测这个路径,是不是一个文件夹
        console.log(data.isDirectory());
    });
});

server.listen(3000,'127.0.0.1');
