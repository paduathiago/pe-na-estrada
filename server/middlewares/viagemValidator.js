const {body} = require('express-validator');
const {validate} = require('./validatorGenerico');

function getValidations(metodo) {
  switch (metodo) {
  case 'create': {
    return [
      body('imagemViagem')
        .exists()
        .withMessage('A imagem da viagem eh obrigatoria.')
        .isURL()
        .withMessage('A imagem de viagem deve ser um URL.'),
      body('localizacao')
        .exists()
        .withMessage('Preencha o campo de localizacao.')
        .notEmpty()
        .withMessage('Preencha o campo de localizacao.'),
      body('descricao')
        .exists()
        .withMessage('Preencha o campo de descricao.')
        .notEmpty()
        .withMessage('Preencha o campo de descricao.'),
      body('inicio')
        .exists()
        .withMessage('Informe a data de inicio.')
        .notEmpty()
        .withMessage('Informe a data de inicio.')
        .isDate()
        .withMessage('Informe uma data válida.'),
      body('fim')
        .exists()
        .withMessage('Informe a data de fim.')
        .notEmpty()
        .withMessage('Informe a data de fim.')   
        .isDate()
        .withMessage('Informe uma data válida.'),
    ];
  };
  case 'update': {
    return [
      body('imagemViagem')
        .optional()
        .isURL()
        .withMessage('A imagem de viagem deve ser um URL.'),
      body('localizacao')
        .optional()
        .notEmpty()
        .withMessage('Preencha o campo de localizacao.'),
      body('descricao')
        .optional()
        .notEmpty()
        .withMessage('Preencha o campo de descricao.'),
      body('inicio')
        .optional()
        .notEmpty()
        .withMessage('Informe a data de inicio.')
        .isDate()
        .withMessage('Informe uma data válida.'),
      body('fim')
        .optional()
        .notEmpty()
        .withMessage('Informe a data de fim.')
        .isDate()
        .withMessage('Informe uma data válida.'),
    ];
  };
  }
}

function viagemValidate(metodo) {
  const validations=getValidations(metodo);
  return validate(validations);
}

module.exports={viagemValidate};
