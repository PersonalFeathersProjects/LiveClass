const users = require('./users/users.service.js');
const schools = require('./schools/schools.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(schools);
};
