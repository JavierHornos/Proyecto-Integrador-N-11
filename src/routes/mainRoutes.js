const mainController= require('./../controllers/mainController')

const express = require ('express');
const router = express.Router();

router.get ('/' , mainController.home)

router.get ('/home2' , mainController.home2)





module.exports = router;