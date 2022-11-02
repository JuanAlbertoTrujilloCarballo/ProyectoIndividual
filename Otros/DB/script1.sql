DROP SCHEMA IF EXISTS charlas_itc;

CREATE SCHEMA `charlas_itcevent`;

CREATE TABLE `charlas_itc`.`usuarios` (
  `id_usuarios` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `phone` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `dni` VARCHAR(8) NOT NULL,
  PRIMARY KEY (`idUsuarios`));
  
  CREATE TABLE `charlas_itc`.`evento` (
  `id_evento` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `initialHour` DATETIME NOT NULL,
  `finalHour` DATETIME NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `tags` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEvento`));

CREATE TABLE `charlas_itc`.`ponente` (
  `id_ponente` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `phone` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `dni` VARCHAR(8) NOT NULL,
  PRIMARY KEY (`idPonente`));

CREATE TABLE `charlas_itc`.`asistencias` (
  `id_asistencias` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NULL,
  `id_evento` INT NULL,
  PRIMARY KEY (`idAsistencias`),
  CONSTRAINT `idUsuario`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `charlas_itc`.`usuarios` (`idUsuarios`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `idEvento`
    FOREIGN KEY (`idEvento`)
    REFERENCES `charlas_itc`.`evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);




CREATE TABLE `charlas_itc`.`es-ponente` (
  `esPonente` INT NOT NULL,
  `idEvento` INT NULL,
  PRIMARY KEY (`esPonente`),
  INDEX `idEvento_idx` (`idEvento` ASC) VISIBLE,
  CONSTRAINT `idEventoPonente`
    FOREIGN KEY (`idEvento`)
    REFERENCES `charlas_itc`.`evento` (`idEvento`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `idPonente`
    FOREIGN KEY (`esPonente`)
    REFERENCES `charlas_itc`.`ponente` (`idPonente`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
