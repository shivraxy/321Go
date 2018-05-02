<<<<<<< HEAD
var mysql = require("mysql2");
=======
var mysql = require("mysql");
>>>>>>> b22b6c8b104892a30dac0a68c99dc0ab4b0e3fe9

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
<<<<<<< HEAD
    password: "",
    database: "321go_dev"
=======
    password: "password",
    database: "godb"
>>>>>>> b22b6c8b104892a30dac0a68c99dc0ab4b0e3fe9
});

connection.connect(function(err) {
    if (err) {
        console.log("Connection Error" + err.stack);
        return;
    }
    console.log('Connected as id : ' + connection.threadId)
});

module.exports = connection;
