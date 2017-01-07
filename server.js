// var http = require('http')
//
// var server = http.createServer(function(req, res) {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   })
//   res.end('Hello World 4!')
// })
//
// server.listen(process.env.PORT || 80, function() {
//   console.log('Docker DEMO with Node.js is running.')
// })

//
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World -express2!');
});

var server = app.listen(process.env.PORT || 80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
