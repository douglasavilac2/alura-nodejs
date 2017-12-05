var express = require('express');

var app = express();

app.get('/produtos', function (req, res) {
    res.send("Lista de Produtos");
});

app.listen(3000, function () {
    console.log('servidor rodando@!');
});