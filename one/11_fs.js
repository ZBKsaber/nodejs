var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    var wenjianjia = [];
    fs.readdir('./album',function(err,files){
        // files是个数组,表示./album这个文件夹中的所有东西
        // 包括文件和文件夹
        for (var i = 0; i < files.length; i++) {
            var thefilename = files[i];
            // console.log(thefile);
            // 又进行一次检测
            fs.stat('./album/'+thefilename,function(err,stat){
                // 如果是一个文件夹,那就输出他
                if (stat.isDirectory()) {
                    wenjianjia.push(thefilename);
                }
                console.log(wenjianjia);
            });
        }
    });
});

server.listen(3000,'127.0.0.1');
