const express = require('express');
const register = require('@react-ssr/express/register');
const httpLogger = require('morgan')
const log = require('./utils/consoleMessage')
const indexRouter = require ('./routes/index');
const usersRouter = require ('./routes/users');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(httpLogger('dev'));


(async () => {
  // register `.jsx` or `.tsx` as a view template engine
  await register(app);
 
  app.use('/', indexRouter);
  app.use('/users', usersRouter);

  app.listen(3000, () => {
    log('header', 'RUNNING APPLICATION ON PORT 3000')
    log('info', 'View Logic Handler: React')
    log('info', 'View Styles Handler: Emotion')
    log('info', 'View Template Engine: JSX')
    log('info', 'HTTP Requests Logs: Morgan')
    log('info', 'App Logs: Chalk')
    log('header', 'PATHS', true)
    log('info', '/')
    log('info', '/users')
  });
  
})();