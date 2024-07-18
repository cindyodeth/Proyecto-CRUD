create database empleados01;
use empleados01;

create table empleados(
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) NOT NULL, 
    lastname varchar(50) NOT NULL,
    phone int, 
    ege int

  
);
select * from empleados;