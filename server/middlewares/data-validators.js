function objectValidator(obj, keys) {
  return function(req, res, next) {
    Object.keys(req[obj]).forEach((key)=>{
      if (keys.indexOf(key)===-1) {// Deleta chaves que não deveriam estar lá
        delete req[obj][key];
      }
    });
    next();
  };
}

module.exports={objectValidator};
