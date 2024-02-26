SELECT * 
FROM role
JOIN department ON role.department = department.id;

SELECT * 
FROM employee
JOIN department ON 