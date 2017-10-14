CREATE TABLE users (
	id int NOT NULL UNIQUE AUTO_INCREMENT,
	username varchar(30) NOT NULL UNIQUE,
	password varchar(255) NOT NULL UNIQUE,
  first_name varchar(50),
  last_name varchar(50),
	PRIMARY KEY (id)
);

CREATE TABLE classifications (
	id int NOT NULL UNIQUE AUTO_INCREMENT,
	name varchar(30) NOT NULL UNIQUE,
	PRIMARY KEY (id)
);

CREATE TABLE time_slots (
	id int NOT NULL UNIQUE AUTO_INCREMENT,
	start_time DOUBLE NOT NULL UNIQUE,
	end_time DOUBLE NOT NULL UNIQUE,
	PRIMARY KEY (id)
);

CREATE TABLE athletes (
	id int NOT NULL UNIQUE AUTO_INCREMENT,
  user_id int NOT NULL UNIQUE,
  complaint varchar(50),
  last_visit datetime,
  primary_sport varchar(50) NOT NULL,
  secondary_sport varchar(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE athletic_trainers (
	id int NOT NULL UNIQUE AUTO_INCREMENT,
  user_id int NOT NULL UNIQUE,
  classification_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (classification_id) REFERENCES classifications(id)
);

CREATE TABLE reservations (
	id int NOT NULL UNIQUE AUTO_INCREMENT,
	athlete_id int NOT NULL,
  at_id int NOT NULL,
  time_slot_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (athlete_id) REFERENCES athletes(id),
	FOREIGN KEY (at_id) REFERENCES athletic_trainers(id),
	FOREIGN KEY (time_slot_id) REFERENCES time_slots(id)
);