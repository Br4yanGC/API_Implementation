create database restaurant;

use restaurant;

CREATE TABLE product (
  dish varchar(255),
  price float,
  created_date datetime,
  modified_date datetime
);

INSERT INTO menu(dish, price, created_date, modified_date)
VALUES ('ceviche', '50.00', now(), now());

INSERT INTO menu(dish, price, created_date, modified_date)
VALUES ('jalea', '60.00', now(), now());

INSERT INTO menu(dish, price, created_date, modified_date)
VALUES ('mariscos', '55.00', now(), now());
