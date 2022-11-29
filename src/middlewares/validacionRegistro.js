const {body,} = require('express-validator');   // usamos check del express validator

module.exports =  [
    body('Email')
        .exists().withMessage('Completar el campo email')
        .bail().withMessage('Email invalido')
        .isEmail().withMessage('Email invalido'),
    
    body('password')
    .exists().withMessage('Completar el campo password')
        .isAlphanumeric().isLength({mnin: 4}).withMessage('La contraseña debe tener al menos 4 caracteres'),

    body('Nombre')
    .exists().withMessage('Completar el campo nombre')
        .isLength({mnin: 4}).withMessage('el Nombre debe tener al menos 4 caracteres'),

    body('Apellido')
    .exists().withMessage('Completar el campo apellido')
      .isLength({mnin: 4}).withMessage('El Apellido debe tener al menos 4 caracteres'),

    body('domicilio')
    .exists().withMessage('Completar el campo domicilio')
        .isAlphanumeric().isLength({mnin: 4}).withMessage('La dirección debe tener al menos 4 caracteres y puede ser alfanumericos'),
    
        
    
        
];

