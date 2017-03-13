var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var server = http.createServer(function(req,res){
    // 得到用户访问的地址
    // 如果不用req.url来if判断,那么用户不管输入什么网址
    // 做的事情都一样
    // 把文件读出来
    var pathname = url.parse(req.url).pathname;
    // 判断用户输入的文件地址还是文件夹地址
    // 如果是文件夹,自动请求该文件夹index.html
    if(pathname.indexOf('.') == -1){
        pathname += '/index.html';
    }
    var fileURL = './'+path.normalize('./static/'+pathname);
    //得到扩展名
    var extname = path.extname(pathname);
    console.log(fileURL);
    fs.readFile(fileURL,function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html;charset=UTF8'});
            res.end('404,页面没有找到');
        }
        getMime(extname,function(mime){
            res.writeHead(200,{'Content-Type':mime});
            res.end(data);
        });
    });
});

server.listen(3000,'127.0.0.1');
function getMime(extname,callback){
    // switch(extname){
    //     case '.html':
    //         return "text/html";
    //         break;
    //     case '.css':
    //         return "text/css";
    //         break;
    // }
    // 读取mime.json文件,得到json,根据extname key 返回相应的值
    fs.readFile('./mime.json',function(err,data){
        if(err){
            throw Error('找不到mime.json文件');
            return;
        }
        // 把文件数据转化为json格式
        var mimeJSON = JSON.parse(data);
        var mime = mimeJSON[extname] || 'text/plain';
        console.log(mimeJSON[extname]);
        // 执行回调函数,mime类型字符串,就是它的参数
        callback(mime);
    });
}