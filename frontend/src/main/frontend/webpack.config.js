//module.exports = require('./config/webpack.dev.js');

console.log( 'process.argv ' , process.argv  )

switch (process.argv[3]) {
  case 'PROD':
    module.exports = require('./config/webpack.prod');
    break;
  case 'ua':
    module.exports = require('./config/webpack.uat');
    break;
  case 'QA':
    module.exports = require('./config/webpack.qa');
    break;
  case 'DEV':
    module.exports = require('./config/webpack.dev');
    break;
  default:
    module.exports = require('./config/webpack.local');
}

