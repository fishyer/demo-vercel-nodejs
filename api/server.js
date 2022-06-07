//导入需要的nodejs库
var http = require('http');
var moment = require('moment');

http.createServer(function (request, response) {
    //获取当前时间
    var current_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello Server"
    response.end("Hello Server "+current_time);
}).listen(9001);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:9001/');