const {body} = require('express-validator');   // usamos check del express validator

module.exports =  [
    body('Email')
        .notEmpty().bail()
        .isEmail().withMessage('Email invalido'),
    
    body('Password')
        .exists()
        .isAlphanumeric().isLength({mnin: 4}).withMessage('La contraseña debe tener al menos 4 caracteres'),  
        
    
        
];