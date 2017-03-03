// require表示引包,引包就是引用自己的一个特殊功能
var http = require("http");
var fs = require("fs");

// 创建服务器,参数是一个回调函数,表示如果有请求进来,要做什么
// req表示请求,request; res表示响应,response
var server = http.createServer(function(req,res){
	if (req.url == "/fang") {
		//读取文件
		fs.readFile("./test/test.html",function(err,data){
			// 设置HTTP头部,状态码是200,文件类型是html,字符集是utf8
			res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
			// res.write('<head><meta charset="utf-8"/></head>');
			res.end(data);
		});
	}else if(req.url == "/yuan"){
		//读取文件
		fs.readFile("./test/yuan.html",function(err,data){
			res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
			res.end(data);
		});
	}else if(req.url == "/1.jpg"){
		fs.readFile("./test/1.jpg",function(err,data){
			res.writeHead(200,{"Content-Type":"image/jpg"});
			res.end(data);
		});
	}else if(req.url == "/bbb.css"){
		fs.readFile("./test/css.css",function(err,data){
			res.writeHead(200,{"Content-Type":"text/css"});
			res.end(data);
		});
	}else{
		res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"});
		res.end("没有这个页面");
	}

});

// 运行服务器,监听3000端口 (端口号可以随意改)
server.listen(3000,"127.0.0.1");
