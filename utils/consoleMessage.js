const chalk = require('chalk');

const { log } = console;

/* consoleMessage: Logs with date the stuff that's happening
@param type: string, should be 'info' or 'error'
@param message: string to log
@param linebreak: bool that if true produces a line break before the log
*/
function consoleMessage(type, message, linebreak) {
  const logColor = {
    error: 'redBright',
    info: 'cyanBright',
    viinfo: 'blueBright',
    header: 'yellowBright',
    intro: 'bgBlue'
  };

  const date = new Date();
  const hour = date.getHours();
  const mins = date.getMinutes();

  if (linebreak) log('');

  log(chalk.greenBright(`${hour}:${mins}`) + chalk.magentaBright(' | ') + chalk[logColor[type]](message));
}

module.exports = consoleMessage;
