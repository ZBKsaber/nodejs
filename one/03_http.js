// 这个案例是讲解http模块
// 应用模块
var http = require("http");

// 创建一个服务器,回调函数表示接受到请求之后做的事
var server = http.createServer(function(req,res){
    // req参数表示请求,res表示响应
    console.log('服务器接受到了请求'+req.url);
    // 设置一个响应头
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    res.write("<h1>我是主标题</h1>");
    res.write("<h2>我是副标题</h2>");
    res.end('<h3>我是一个三标题</h3>');
});
// 监听一个端口
server.listen(3000,'127.0.0.1');
