DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT(4) NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
	PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (100, "yeezys", "shoes", 79.99, 20),
	   (200, "Air Force 1s", "shoes", 99.99, 10),
	   (300, "Louis Vuitton Belt", "belts", 29.99, 5),
	   (400, "fanny pack", "bags", 129.99, 14),
	   (500, "purse", "bags", 39.99, 15),
	   (600, "supreme t-shirt", "shirts", 19.99, 19),
	   (700, "gucci shirt", "shirts", 49.99, 11),
	   (800, "jeans", "pants", 69.99, 10),
	   (900, "sweatpants", "pants", 9.99, 19)