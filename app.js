// app.js
var http = require('http');
http.createServer(function (req,res) {
  res.writeHead(200,{'Content-Type':'text/html'})
  res.write('<h1>Node</h1>');
  res.end('<span>hello23333</span>');
}).listen(3000);
console.log("listen 3000 port");
