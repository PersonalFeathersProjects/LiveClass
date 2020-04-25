// Initializes the `teachers` service on path `/teachers`
const { Teachers } = require('./teachers.class');
const createModel = require('../../models/teachers.model');
const hooks = require('./teachers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/teachers', new Teachers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('teachers');

  service.hooks(hooks);
};
