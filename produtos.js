var http = require('http');

var server = http.createServer(function (request, response) {
    if (request.url == "/produtos") {
        response.end('<h1>Lista de Produtos</h1>');
    } else {
        response.end('<h1>Home</h1>');
    }
}).listen(3000);