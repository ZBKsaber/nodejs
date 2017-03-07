var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    // 遍历album里面的所有文件和文件夹
    fs.readdir('./album/',function(err,files){
        // files是一个存放文件(夹)的数组
        // 存放文件夹的数组
        var wenjianjia = [];

        // 这是个函数,表示立即执行参数为0
        // 迭代器就是强行把异步的函数,变成同步的函数
        (function iterator(i){
            if (i == files.length) {
                console.log(wenjianjia);
                return;
            }
            // 强行把异步变成同步
            fs.stat('./album/'+files[i],function(err,stat){
                if (stat.isDirectory()) {
                    wenjianjia.push(files[i]);
                }
                iterator(i+1);
            });
        })(0);
    });
    res.end('结束啦');
});

server.listen(3000,'127.0.0.1');
