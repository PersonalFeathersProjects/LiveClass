const assert = require('assert');
const app = require('../../src/app');

describe('\'students\' service', () => {
  it('registered the service', () => {
    const service = app.service('students');

    assert.ok(service, 'Registered the service');
  });
});
