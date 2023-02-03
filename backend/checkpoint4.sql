CREATE TABLE `travel` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `country` varchar(255),
  `price` int,
  `activity` int
);

CREATE TABLE `user` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255),
  `lastname` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `is_admin` boolean
);

CREATE TABLE `activity` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `activity_name` varchar(255)
);

CREATE TABLE `user_travel` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_travel` int,
  `id_user` int
);

CREATE TABLE `activity_travel` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_activity` int,
  `id_travel` int
);

ALTER TABLE `user_travel` ADD FOREIGN KEY (`id_travel`) REFERENCES `travel` (`id`);

ALTER TABLE `user_travel` ADD FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

ALTER TABLE `activity_travel` ADD FOREIGN KEY (`id_travel`) REFERENCES `travel` (`id`);

ALTER TABLE `activity_travel` ADD FOREIGN KEY (`id_activity`) REFERENCES `activity` (`id`);
