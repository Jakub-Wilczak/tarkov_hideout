DROP DATABASE IF EXISTS tarkov_hideout;
CREATE DATABASE tarkov_hideout;
USE tarkov_hideout;

CREATE TABLE  module(
                         module_id INT NOT NULL AUTO_INCREMENT,
                         module_name VARCHAR(50),
                         PRIMARY KEY (module_id)
);

CREATE TABLE  module_level(
                        module_level_id INT NOT NULL AUTO_INCREMENT,
                        module_id INT NOT NULL,
                        level INT NOT NULL,
                        PRIMARY KEY (module_level_id)
);

CREATE TABLE  item(
                              item_id INT NOT NULL AUTO_INCREMENT,
                              name Varchar(200),
                              icon_link Varchar(3000),
                              width INT,
                              height INT,
                              PRIMARY KEY (item_id)
);

CREATE TABLE required_items(
                               module_level_id INT NOT NULL,
                               item_id INT NOT NULL,
                               number_of_items INT NOT NULL,
                               icon_link Varchar(3000),
                               PRIMARY KEY (item_id)
);

    
    


