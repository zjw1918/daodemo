var http = require('http')

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end('Hello World!')
})

server.listen(process.env.PORT || 80, function() {
  console.log('Docker DEMO with Node.js is running.')
})
