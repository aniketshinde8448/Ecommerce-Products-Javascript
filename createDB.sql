CREATE DATABASE IF NOT EXISTS ecommerce;

use ecommerce;

CREATE TABLE IF NOT EXISTS users(
    user_id VARCHAR(40),
    user_type VARCHAR(10),
    user_name VARCHAR(20),
    user_pass VARCHAR(20),
    user_email VARCHAR(200),
    PRIMARY KEY(user_email)
);

CREATE TABLE IF NOT EXISTS products(
    product_id VARCHAR(40),
    product_name VARCHAR(20),
    product_desc VARCHAR(20),
    product_category VARCHAR(20),
    product_price decimal(6,2),
    is_Active Boolean,
    vendor_email VARCHAR(200),
    PRIMARY KEY(product_id),
    FOREIGN KEY(vendor_email) REFERENCES users(user_email)
);
