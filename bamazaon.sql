CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) DEFAULT NULL,
  `department_name` varchar(45) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `stock_quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (1, "earrings", "Tiffany", 100, 200);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (2, "cologne", "Chanel", 30, 150);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (3, "pen", "Pilot", 1, 5000);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (4, "usb charger", "Apple", 20, 200);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (5, "figurine", "POP FUNKO", 10, 200);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (6, "doll", "Hasbro", 12, 30);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (7, "dvd", "Adult Swim", 20, 60);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (8, "toothpaste", "Colgate", 3, 80);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (9, "jacket", "North Face", 60, 20);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (10, "book", "Penguin Publishing", 15, 300);