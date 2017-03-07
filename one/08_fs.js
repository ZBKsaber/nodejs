var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    // 给用户加id随机数
    var userid = parseInt(Math.random() * 9999) + 1000;
    console.log('欢迎'+userid);
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    // 两个参数,第一个是完整路径,当前目录写 ./
    // 第二个参数,就是回调函数,表示文件读取成功之后,做的事情
    fs.readFile('./test/1.txt',{'charset':'utf-8'},function(err,data){
        if (err) {
            throw err;
        }
        console.log(userid+'文件读取完毕');
        res.end(data);
    });
});

server.listen(3000,'127.0.0.1');
