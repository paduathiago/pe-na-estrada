const {body} = require('express-validator');
const {validate} = require('./validatorGenerico');

function getValidations(metodo) {
  switch (metodo) {
  case 'login': {
    return [
      body('email')
        .exists()
        .withMessage('Preencha o campo de e-mail.')
        .isEmail()
        .withMessage('E-mail invalido.'),
      body('senha')
        .exists()
        .withMessage('Preencha o campo de senha.')
        .notEmpty()
        .withMessage('Senha invalida'),
    ];
  };
  case 'create': {
    return [
      body('nome')
        .exists()
        .withMessage('Preencha o campo de nome.')
        .notEmpty()
        .withMessage('Nome invalido'),
      body('email')
        .exists()
        .withMessage('Preencha o campo de e-mail.')
        .isEmail()
        .withMessage('E-mail invalido.'),
      body('senha')
        .exists()
        .withMessage('Preencha o campo de senha.')
        .notEmpty()
        .withMessage('Senha invalida'),
      body('imagemPerfil')
        .exists()
        .withMessage('A imagem de perfil eh obrigatoria.')
        .isURL()
        .withMessage('A imagem de perfil deve ser um URL.'),
      body('introducao')
        .exists()
        .withMessage('A introducao eh obrigatoria'),
    ];
  };
  case 'update': {
    return [
      body('nome')
        .optional()
        .notEmpty()
        .withMessage('Nome invalido'),
      body('email')
        .optional()
        .isEmail()
        .withMessage('E-mail invalido.'),
      body('senha')
        .optional()
        .notEmpty()
        .withMessage('Senha invalida'),
      body('imagemPerfil')
        .optional()
        .isURL()
        .withMessage('A imagem de perfil deve ser um URL.'),
      body('isAdmin')
        .optional()
        .isBoolean()
        .withMessage('Parametro "isAdmin" invalido.'),
    ];
  };
  }
}

function viajanteValidate(metodo) {
  const validations=getValidations(metodo);
  return validate(validations);
}

module.exports={viajanteValidate};
