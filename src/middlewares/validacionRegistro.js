const {body} = require('express-validator');   // usamos check del express validator

module.exports =  [
    body('Email')
        .notEmpty().bail()
        .isEmail().withMessage('Email invalido'),
    
    body('Password')
        .exists()
        .isAlphanumeric().isLength({mnin: 4}).withMessage('La contraseña debe tener al menos 4 caracteres'),

    body('Nombre')
        .exists()
        .isLength({mnin: 4}).withMessage('el Nombre debe tener al menos 4 caracteres'),

    body('Apellido')
        .exists()
      .isLength({mnin: 4}).withMessage('El Apellido debe tener al menos 4 caracteres'),

    body('Direccion')
        .exists()
        .isAlphanumeric().isLength({mnin: 4}).withMessage('La dirección debe tener al menos 4 caracteres y puede ser alfanumericos'),
    
        
    
        
];

