CREATE DATABASE IF NOT EXISTS `rasa` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `rasa`.`conversation` (
    `id` int  AUTO_INCREMENT,
    `hash` varchar(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME,
    PRIMARY KEY (`id`)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `rasa`.`message` (
    `id` int  AUTO_INCREMENT,
    `message` varchar(255) NOT NULL,
    `hash` varchar(255) NOT NULL,
    `conversation` int NOT NULL,
    `interlocutor` SMALLINT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME,
    PRIMARY KEY (`id`),
    FOREIGN KEY (conversation) REFERENCES conversation(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;