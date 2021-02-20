-- MySQL Script generated by MySQL Workbench
-- Thu Feb 18 16:11:11 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `gérant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gérant` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`username`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Menu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Menu` (
  `num` VARCHAR(16) NOT NULL,
  `image` BLOB NULL,
  `gérant_username1` VARCHAR(16) NOT NULL,
  PRIMARY KEY (`num`),
  INDEX `fk_Menu_gérant1_idx` (`gérant_username1` ASC) VISIBLE,
  CONSTRAINT `fk_Menu_gérant1`
    FOREIGN KEY (`gérant_username1`)
    REFERENCES `gérant` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `client` (
  `username` VARCHAR(16) NOT NULL,
  `Menu_num` VARCHAR(16) NOT NULL,
  PRIMARY KEY (`username`),
  INDEX `fk_client_Menu1_idx` (`Menu_num` ASC) VISIBLE,
  CONSTRAINT `fk_client_Menu1`
    FOREIGN KEY (`Menu_num`)
    REFERENCES `Menu` (`num`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `plat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `plat` (
  `nom` VARCHAR(16) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `type` VARCHAR(32) NOT NULL,
  `prix` DECIMAL(7,3) NULL DEFAULT CURRENT_TIMESTAMP,
  `image` BLOB NULL,
  `gérant_username` VARCHAR(16) NOT NULL,
  `Menu_num` VARCHAR(16) NOT NULL,
  `utilisateur_username` VARCHAR(16) NOT NULL,
  PRIMARY KEY (`nom`),
  INDEX `fk_plat_gérant1_idx` (`gérant_username` ASC) VISIBLE,
  INDEX `fk_plat_Menu1_idx` (`Menu_num` ASC) VISIBLE,
  INDEX `fk_plat_utilisateur1_idx` (`utilisateur_username` ASC) VISIBLE,
  CONSTRAINT `fk_plat_gérant1`
    FOREIGN KEY (`gérant_username`)
    REFERENCES `gérant` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_plat_Menu1`
    FOREIGN KEY (`Menu_num`)
    REFERENCES `Menu` (`num`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_plat_utilisateur1`
    FOREIGN KEY (`utilisateur_username`)
    REFERENCES `client` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table ``
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `` (
  `plat_nom` VARCHAR(16) NOT NULL,
  `plat_gérant_username` VARCHAR(16) NOT NULL,
  `Menu_num` VARCHAR(16) NOT NULL,
  `Menu_gérant_username` VARCHAR(16) NOT NULL,
  PRIMARY KEY (`plat_nom`, `plat_gérant_username`, `Menu_num`, `Menu_gérant_username`),
  INDEX `fk_plat_has_Menu_Menu1_idx` (`Menu_num` ASC, `Menu_gérant_username` ASC) VISIBLE,
  INDEX `fk_plat_has_Menu_plat1_idx` (`plat_nom` ASC, `plat_gérant_username` ASC) VISIBLE,
  CONSTRAINT `fk_plat_has_Menu_plat1`
    FOREIGN KEY (`plat_nom` , `plat_gérant_username`)
    REFERENCES `plat` (`nom` , `gérant_username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_plat_has_Menu_Menu1`
    FOREIGN KEY (`Menu_num`)
    REFERENCES `Menu` (`num`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
