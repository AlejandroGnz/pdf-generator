const path = require('path');
const pug = require('pug');

module.exports = {
  renderOrderCreate: pug.compileFile(
    path.resolve(__dirname, 'templates', 'order-create.pug'),
  ),
};
