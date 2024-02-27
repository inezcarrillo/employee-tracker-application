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

afterConnection = () => {
    console.log('*************************')
    console.log('*                       *')
    console.log('*    EMPLOYEE MANAGER   *')
    console.log('*                       *')
    console.log('*************************')
    promptUser();
};

const promptUser = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like do?',
            choices: ['View all department',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Update an employee manager',
                    'No action',]
        }
    ])
    .then((answer) => {
        const { choices } = answers;

        if (choices === 'View all department') {
            showDepartments();
        };
        if (choices === 'View all roles') {
            showRoles();
        };
        if (choices === 'View all employees') {
            showEmployees();
        };
        if (choices === 'Add a department') {
            addDepartment();
        };
        if (choices === 'Add a role') {
            addRole();
        };
        if (choices === 'Add an employee') {
            addEmployee();
        };
        if (choices === 'Update an employee role') {
            updateEmployee();
        };
        if (choices === 'No action') {
            endConnection();
        };
    });
};

showDepartments = () => {
    console.log('Show all departemnts')
}