const db = require("../database/models");

module.exports = {
  usuarios: async function (req, res) {
    await db.usuarios
      .findAll({attributes: {exclude: ["Password"]}})
      .then((listaUsuarios) => {
        return res.status(200).json({
          total: listaUsuarios.length,
          data: listaUsuarios,
          status: 200,
        });
      });
      
  },

  usuarioDetalle: async function (req, res) {
    await db.usuarios
      .findByPk(req.params.id, {attributes: {exclude: ["Password"]}})
      .then((usuario) => {
        return res.status(200).json({
          data: usuario,
          status: 200,
        });
      });
  },

  lista: async function (req, res) {
    await db.productos.findAll().then((listaProductos) => {
      return res.status(200).json({
        total: listaProductos.length,
        data: listaProductos,
        status: 200,
      });
    });
  },

  productosDetalle: async function (req, res) {
    await db.productos.findByPk(req.params.id).then((producto) => {
      return res.status(200).json({
        data: producto,
        status: 200,
      });
    });
  },

  categorias: async function (req, res) {
    await db.categorias.findAll().then((listaProductos) => {
      return res.status(200).json({
        total: listaProductos.length,
        data: listaProductos,
        status: 200,
      });
    });
  },
};
