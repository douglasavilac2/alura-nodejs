module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'douglas10',
            database: 'idealodonto'
        });

        connection.query('select * from pessoas', function (err, result) {
            res.render("pessoas/index" , {
                pessoas: result
            });
        });

        connection.end();

    });
}