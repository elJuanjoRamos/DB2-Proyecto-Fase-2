var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: 'BD2P1'
});


connection.connect(function(err) {
    if (err) {
        throw err;
    } 
    console.log("Conectado a la db");
});

module.exports = connection;