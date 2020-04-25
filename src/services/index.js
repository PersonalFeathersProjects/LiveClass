const users = require('./users/users.service.js');
const schools = require('./schools/schools.service.js');
const teachers = require('./teachers/teachers.service.js');
const students = require('./students/students.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(schools);
  app.configure(teachers);
  app.configure(students);
};
