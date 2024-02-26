INSERT INTO department (name)
VALUES ('Radiology'),
        ('Nursing'),
        ('Special Procedures'),
        ('Laboratory');

INSERT INTO role (title, salary, department_id)
VALUES 
('Nuclear Medicine Technologist', 65000, 1),
('Registered Nurse', 80000, 2),
('Phlebotomist', 50000, 4),
('Radiology Nurse', 90000, 3),
('CT Technologist', 67000, 1),
('Patient Care Technician', 40000, 2),
('Radiologist', 200000, 1),
('MRI Technologist', 70000, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
('Vanessa', 'Martinez', 1),
('Mandy', 'Smith', 2),
('Catherine', 'Williams', 3),
('Brittany', 'Clark', 2),
('Alicia', 'Lawrence', 4),
('David', 'Seegul', 1),
('Emily', 'Anderson', 1),
('Andrea', 'Herenandez', 1);