-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         10.4.25-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para digital_db
CREATE DATABASE IF NOT EXISTS `digital_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `digital_db`;

-- Volcando estructura para tabla digital_db.categoria
CREATE TABLE IF NOT EXISTS `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- Volcando estructura para tabla digital_db.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) DEFAULT NULL,
  `Apellido` varchar(50) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `Dirección` varchar(100) DEFAULT NULL,
  `Imagen` varchar(100) DEFAULT NULL,
  `Administrador` bit(1) DEFAULT NULL,
  `Local_FK` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Email` (`Email`),
  KEY `Usuario_fk0` (`Local_FK`),
  CONSTRAINT `Usuario_fk0` FOREIGN KEY (`Local_FK`) REFERENCES `local` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Volcando estructura para tabla digital_db.producto
CREATE TABLE IF NOT EXISTS `producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `descuento` double DEFAULT NULL,
  `descripcion` varchar(150) DEFAULT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `fecha_modificacion` date DEFAULT NULL,
  `fecha_borrado` date DEFAULT NULL,
  `Categoria_FK` int(50) NOT NULL,
  `creador_FK` int(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Producto_fk0` (`Categoria_FK`),
  KEY `Producto_fk1` (`creador_FK`),
  CONSTRAINT `Producto_fk0` FOREIGN KEY (`Categoria_FK`) REFERENCES `categoria` (`id`),
  CONSTRAINT `Producto_fk1` FOREIGN KEY (`creador_FK`) REFERENCES `usuario` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;


-- Volcando estructura para tabla digital_db.metodo_pago
CREATE TABLE IF NOT EXISTS `metodo_pago` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;


-- Volcando estructura para tabla digital_db.detalle_venta
CREATE TABLE IF NOT EXISTS `detalle_venta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_venta` date DEFAULT NULL,
  `Metodo_pago_FK` int(11) NOT NULL,
  `Producto_FK` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Detalle_venta_fk0` (`Metodo_pago_FK`),
  KEY `Detalle_venta_fk1` (`Producto_FK`),
  CONSTRAINT `Detalle_venta_fk0` FOREIGN KEY (`Metodo_pago_FK`) REFERENCES `metodo_pago` (`id`),
  CONSTRAINT `Detalle_venta_fk1` FOREIGN KEY (`Producto_FK`) REFERENCES `producto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Volcando estructura para tabla digital_db.local
CREATE TABLE IF NOT EXISTS `local` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) DEFAULT NULL,
  `Telefono` varchar(50) DEFAULT NULL,
  `Dirección` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;


-- Volcando estructura para tabla digital_db.venta
CREATE TABLE IF NOT EXISTS `venta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Cantidad` int(11) DEFAULT NULL,
  `monto_unitario` decimal(10,0) NOT NULL,
  `local_FK` int(11) NOT NULL,
  `detalle_venta_FK` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Venta_fk0` (`local_FK`),
  KEY `Venta_fk1` (`detalle_venta_FK`),
  CONSTRAINT `Venta_fk0` FOREIGN KEY (`local_FK`) REFERENCES `local` (`Id`),
  CONSTRAINT `Venta_fk1` FOREIGN KEY (`detalle_venta_FK`) REFERENCES `detalle_venta` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
