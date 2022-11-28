const {body} = require('express-validator');   // usamos check del express validator

module.exports =  [
    body('Email')
        .notEmpty().withMessage('Debe Ingresar un email').bail().withMessage('Debe Ingresar un email').isEmail().withMessage('Debe Ingresar un email').normalizeEmail().withMessage('Debe Ingresar un email')
        .isEmail().withMessage('Email invalido'),
    
    body('Password')
        .notEmpty().withMessage('Debe ingresar una contraseña')
        .isAlphanumeric().withMessage('Debe ser Alfanumerica')
        .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres'),  
        
    
        
];