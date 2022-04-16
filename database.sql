CREATE DATABASE thedreamgift;
USE thedreamgift;

CREATE TABLE products (sku VARCHAR(10) NOT NULL, name VARCHAR(30) NOT NULL, description VARCHAR(300) NOT NULL, weight INT(11) NOT NULL, height INT(11) NOT NULL, personalized TINYINT(1) NOT NULL, price INT(11) NOT NULL, price_5 INT(11), price_10 INT(11), price_50 INT(11), status VARCHAR(20), PRIMARY KEY (sku));
CREATE TABLE orders (order_id INT(10) NOT NULL AUTO_INCREMENT, order_number INT(11) NOT NULL, date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, client_id INT(11), product_id int(11), first_pay INT(11), second_pay INT(11), sent_photo VARCHAR(11), shipping_id VARCHAR(20), PRIMARY KEY (order_id));
CREATE TABLE clients (client_id INT(11) NOT NULL, fullname VARCHAR(100), zip_code INT(5), city VARCHAR(30), colony VARCHAR(30), street VARCHAR(30), number INT(5), reference VARCHAR(60), cellphone INT(10), email VARCHAR(100), PRIMARY KEY (client_id));