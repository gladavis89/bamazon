-- 1. Create a MySQL Database called `bamazon`.

-- 2. Then create a Table inside of that database called `products`.

-- 3. The products table should have each of the following columns:

--    * item_id (unique id for each product)

--    * product_name (Name of product)

--    * department_name

--    * price (cost to customer)

--    * stock_quantity (how much of the product is available in stores)

-- 4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
    item_ID INT NOT NULL AUTO_INCREMENT ,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price FLOAT NOT NULL,
    stock_quantity INT,
    PRIMARY KEY (item_ID)
);

INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('ABC Gum', 'Ground', 2.03, 1000);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Pizza but with bite taken out of it', 'Dumpster', 4.99, 8);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Floor cookie with 5 second rule', 'Ground', .02, 30);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Floor cookie', 'Ground', 30, 1);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Government Cheese', 'Food Bank', .01, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Spare Change', 'Handout', .25, 100);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Bicycle', 'Dumpster', 10, 1);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Moldy Bread', 'Food Bank', .10, 100);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Dirty Blanket', 'Handout', 200, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Hot Shower', 'Handout', 3000, 12);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Cigarette Butts', 'Ground', .15, 100);