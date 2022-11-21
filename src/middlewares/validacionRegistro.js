const {check} = require('express-validator');   // usamos check del express validator

module.exports =  [
    check('Email')
        .notEmpty().bail()
        .isEmail().withMessage('Email invalido'),
    
    check('Password')
        .exists()
        .isAlphanumeric().isLength({mnin: 4}).withMessage('La contraseña debe tener al menos 4 caracteres'),

    check('Nombre')
        .exists()
        .isLength({mnin: 4}).withMessage('el Nombre debe tener al menos 4 caracteres'),

    check('Apellido')
        .exists()
      .isLength({mnin: 4}).withMessage('El Apellido debe tener al menos 4 caracteres'),

    check('Direccion')
        .exists()
        .isAlphanumeric().isLength({mnin: 4}).withMessage('La dirección debe tener al menos 4 caracteres y puede ser alfanumericos'),
    
        
    
        
];

