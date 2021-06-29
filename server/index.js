const web = require('./config/express-config');

web.get('/', (req,res) => res.send('<h1>Testando site!<\h1>'));

web.listen(3001,'localhost',()=>console.log('Servidor ligado!'));