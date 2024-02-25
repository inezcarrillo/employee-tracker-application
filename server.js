const inquirer = require('inquirer');
const mysql = require('myslq2');
const express = require('express');

app.use(express.urlencoded({ extended: false }));
app.use(express.json);

const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_db",
    },
    console.log(`Connected to employee_db database.`)
);

app.use( (req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});