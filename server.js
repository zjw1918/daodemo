var http = require('http')

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end('Hello World 333!')
})

server.listen(process.env.PORT || 80, function() {
  console.log(111);
  console.log('Docker DEMO with Node.js is running.')
})
