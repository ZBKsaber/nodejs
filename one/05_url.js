var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    //url.parse()可以将一个完成的url地址分成很多部分
    // host, port, pathname,query
    var pathname = url.parse(req.url).pathname;

    // true表示把字符串转化为对象
    var query = url.parse(req.url,true).query;
    var age = query.age;
    
    console.log('pathname: ' + pathname);
    // console.log('query: ' + query);
    console.log('age: ' + age);
    res.end();
});

server.listen(3000,'127.0.0.1');
