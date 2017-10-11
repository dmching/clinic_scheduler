CREATE TABLE users (
	id int NOT NULL UNIQUE AUTO_INCREMENT,
	username varchar(30) NOT NULL UNIQUE,
	password varchar(255) NOT NULL UNIQUE,
	PRIMARY KEY (id)
);

CREATE TABLE classifications (
	id int NOT NULL UNIQUE AUTO_INCREMENT,
	title varchar(30) NOT NULL UNIQUE,
	description varchar(255),
	PRIMARY KEY (id)
);

CREATE TABLE attributes (
	id int NOT NULL UNIQUE AUTO_INCREMENT,
	name varchar(45) NOT NULL UNIQUE,
	PRIMARY KEY (id)
);

CREATE TABLE user_types (
	id int NOT NULL UNIQUE AUTO_INCREMENT,
	user_id int NOT NULL,
	classification_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (classification_id) REFERENCES classifications(id)
);

CREATE TABLE user_attributes (
	id int NOT NULL UNIQUE AUTO_INCREMENT,
	user_id int NOT NULL,
	attribute_id int NOT NULL,
	attribute_value varchar(30) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (attribute_id) REFERENCES attributes(id)
);