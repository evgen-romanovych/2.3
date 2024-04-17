const http = require('http');

const host = 'Localhost';
const port = 8000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>Hello it`s ME</h1></body></html>');
});

server.listen(port, host, function() {
    console.log('Server started...');
});