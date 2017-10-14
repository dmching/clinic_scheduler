INSERT INTO users (username, password, first_name, last_name)
VALUES ('dmching', 'test1', 'David', 'Ching'),
       ('amenzies', 'test2', 'Amy', 'Menzies'),
       ('admin', 'admin1', 'Root', 'Admin'),
       ('athlete', 'athlete1', 'Brendan', 'McGranahan'),
       ('trainer', 'trainer1', 'Josh', 'Chapman');

INSERT INTO time_slots (start_time, end_time)
VALUES (9, 9.5),
(9.5, 10), (10, 10.5),
(10.5, 11), (11, 11.5),
(2, 2.5), (2.5, 3),
(3, 3.5), (3.5, 4),
(4, 4.5), (4.5, 5);

INSERT INTO classifications (name)
VALUES ('Head AT'), ('GA'), ('Professional Student'), ('Pre-Pro');

INSERT INTO athletes (user_id, complaint, primary_sport)
VALUES (4, 'Ankle', 'Mens Basketball'),
       (1, 'Groin', 'Mens Soccer');