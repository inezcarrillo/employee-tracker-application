const mysql = require('mysql2');

const db = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    passwork: '',
    database: 'employee_db'
    },
    console.log(`Connected to the employee_db database`)
);

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection; 