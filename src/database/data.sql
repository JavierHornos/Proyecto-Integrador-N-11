-- Volcando datos para la tabla digital_db.categoria: ~10 rows (aproximadamente)
INSERT INTO `categoria` (`id`, `Nombre`) VALUES
	(1, 'Vinos'),
	(2, 'Espumantes'),
	(3, 'Whiskies'),
	(4, 'Gin'),
	(5, 'Licores'),
	(6, 'Vodka'),
	(7, 'Ron'),
	(8, 'Aperitivos'),
	(9, 'Cervezas'),
	(10, 'Accesorios');

    -- Volcando datos para la tabla digital_db.usuario: ~4 rows (aproximadamente)
INSERT INTO `usuario` (`Id`, `Nombre`, `Apellido`, `Email`, `Password`, `Dirección`, `Imagen`, `Administrador`, `Local_FK`) VALUES
	(1, 'Javier', 'Hornos', 'hjavih@gmail.com', 'Javier2022', 'Saraza 441 piso 12 Dto B', '1', b'0', 1),
	(2, 'Francisco', 'Valenza', 'franciscovalenza@gmail.com', 'Fran2022', 'Carmelobenito 444 piso 12 Dto B', '2', b'0', 2),
	(3, 'Lucas', 'Vallone', 'lucasvallone@gmail.com', 'Lucas2022', 'Calle Falsa piso 9 Dpto B', '3', b'0', 1),
	(4, 'Laura', 'Nunez', 'lauranunez1412@gmail.com', 'Laura2022', 'Garay 41 piso 3 Depto A', '4', b'0', 2);


    -- Volcando datos para la tabla digital_db.producto: ~10 rows (aproximadamente)
INSERT INTO `producto` (`id`, `nombre`, `precio`, `descuento`, `descripcion`, `imagen`, `fecha_creacion`, `fecha_modificacion`, `fecha_borrado`, `Categoria_FK`, `creador_FK`) VALUES
	(1, 'Cerveza Artesanal Soñada Stout', 5999, 10, 'Cerveza Artesanal Soñada Irish Red 500 Ml', '1', '2022-05-15', '0000-00-00', '0000-00-00', 9, 1),
	(2, 'Set Kit Bartender', 6780, 10, 'Set Kit Bartender Cooctelera Profesional Tragos Bebidas', '2', '2022-05-20', '0000-00-00', '0000-00-00', 10, 1),
	(3, 'Bitters Angostura', 5670, 10, 'Bitters Angostura Amargo Importado 200ml', '3', '2022-06-15', '0000-00-00', '0000-00-00', 8, 2),
	(4, 'Ron Bacardi', 2790, 10, 'Ron Bacardi Blanco Carta Blanca Superior 750ml', '4', '2022-07-01', '0000-00-00', '0000-00-00', 7, 2),
	(5, 'Vodka Smirnoff', 1255, 10, 'Vodka Smirnoff 700ml Original Clasico', '5', '2022-03-15', '0000-00-00', '0000-00-00', 6, 3),
	(6, 'Frangelico Licor', 5400, 10, 'Frangelico Licor 700ml Italiano Avellana', '6', '2022-02-15', '0000-00-00', '0000-00-00', 5, 3),
	(7, 'Gin Monkey 47', 11700, 10, 'Gin Monkey 47 London Dry 500 mL', '7', '2022-07-15', '0000-00-00', '0000-00-00', 4, 4),
	(8, 'Jack Daniels', 10080, 50, 'Jack Daniels Old No. 7 750 mL.', '8', '2022-04-22', '0000-00-00', '0000-00-00', 3, 4),
	(9, 'Espumante Alambrado Blanc De Blancs', 1404, 10, 'Espumante Alambrado Blanc De Blancs 750ml', '9', '2022-10-15', '0000-00-00', '0000-00-00', 2, 1),
	(10, 'Vino Rutini Cabernet', 2979, 10, 'Vino Rutini Cabernet Malbec 750ml Botella Tinto', '10', '2022-05-15', '0000-00-00', '0000-00-00', 1, 2);


-- Volcando datos para la tabla digital_db.metodo_pago: ~2 rows (aproximadamente)
INSERT INTO `metodo_pago` (`id`, `nombre`) VALUES
	(1, 'Contado'),
	(2, 'Tarjeta');


    -- Volcando datos para la tabla digital_db.detalle_venta: ~5 rows (aproximadamente)
INSERT INTO `detalle_venta` (`id`, `fecha_venta`, `Metodo_pago_FK`, `Producto_FK`) VALUES
	(1, '2022-11-15', 2, 1),
	(2, '2022-11-16', 2, 10),
	(3, '2022-11-17', 1, 8),
	(4, '2022-11-29', 2, 6),
	(5, '2022-10-14', 2, 7);

-- Volcando datos para la tabla digital_db.local: ~2 rows (aproximadamente)
INSERT INTO `local` (`Id`, `Nombre`, `Telefono`, `Dirección`) VALUES
	(1, 'Once', '49411114', 'Rivadavia 2516'),
	(2, 'Parque Chacabuco', '46354676', 'Asamblea 2513');


-- Volcando datos para la tabla digital_db.venta: ~5 rows (aproximadamente)
INSERT INTO `venta` (`id`, `Cantidad`, `monto_unitario`, `local_FK`, `detalle_venta_FK`) VALUES
	(1, 1, 5999, 1, 1),
	(2, 1, 2979, 1, 2),
	(3, 1, 10080, 2, 3),
	(4, 1, 5400, 2, 4),
	(5, 1, 6780, 2, 5);

