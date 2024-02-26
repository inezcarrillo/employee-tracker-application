SELECT * 
FROM role
JOIN department ON role.department = department.id;

SELECT * 
FROM employee
JOIN department ON employee.department = department.id;

SELECT * 
FROM employee
JOIN role ON employee.role = role.id;