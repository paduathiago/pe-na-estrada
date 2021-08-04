const {validationResult} = require('express-validator');

function validate(validations) {
  return async function(req, res, next) {
    for (const val of validations) {
      await val.run(req);
    }
    const result= validationResult(req);
    if (!result.isEmpty()) {
      res.status(400).send(result.errors[0].msg);
    } else next();
  };
}

module.exports= {validate};
