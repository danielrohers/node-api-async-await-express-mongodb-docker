const getRoute = route => require(`../app/routes/${route}`);

const ErrorHandler = require('../app/middlewares/errorHandler');

module.exports = (app) => {
  app.use('/foo', getRoute('foo'));

  app.use(ErrorHandler.catch404);
  app.use(ErrorHandler.handler);
};
