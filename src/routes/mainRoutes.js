const mainController= require('./../controllers/mainController')
let adminMiddleware = require('../middlewares/adminMiddleware')         // Middleares para restringir administradores
const RealAdmin = require('../middlewares/RealAdmin')




const express = require ('express');
const router = express.Router();

router.get ('/' , mainController.home)

router.get ('/home-admin' , adminMiddleware, RealAdmin, mainController.homeAdmin)

router.get ('/contacto', mainController.contacto)

router.post ('/contacto', mainController.enviando)







router.get('/pruebaSession', function (req, res) {      // probando, contador de visitas

    if (req.session.numeroVisitas == undefined) {       // si este contador de visitas no existe
        req.session.numeroVisitas = 0;                  // arranca de 0
    }
    req.session.numeroVisitas++;                        // despues la vamos aumentando de a 1

    res.send('Session tiene el numero: ' + req.session.numeroVisitas)


})



module.exports = router;