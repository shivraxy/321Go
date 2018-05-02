var mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "321go_dev"
});

connection.connect(function(err) {
    if (err) {
        console.log("Connection Error" + err.stack);
        return;
    }
    console.log('Connected as id : ' + connection.threadId)
});

module.exports = connection;
