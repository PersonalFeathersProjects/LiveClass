// Initializes the `gradelevels` service on path `/gradelevels`
const { Gradelevels } = require('./gradelevels.class');
const createModel = require('../../models/gradelevels.model');
const hooks = require('./gradelevels.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/gradelevels', new Gradelevels(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('gradelevels');

  service.hooks(hooks);
};
