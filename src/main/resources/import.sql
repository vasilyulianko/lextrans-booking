-- cities

delete from appointment_city;

INSERT INTO appointment_city (id, name) values (1, 'London');
INSERT INTO appointment_city (id, name) values (2, 'Dublin');
INSERT INTO appointment_city (id, name) values (3, 'Cork');

-- times


delete from appointment_time;

INSERT INTO appointment_time (id, time) values (1, '10:00');
INSERT INTO appointment_time (id, time) values (2, '11:00');
INSERT INTO appointment_time (id, time) values (3, '12:00');
INSERT INTO appointment_time (id, time) values (4, '13:00');

