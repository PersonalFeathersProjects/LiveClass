const assert = require('assert');
const app = require('../../src/app');

describe('\'schools\' service', () => {
  it('registered the service', () => {
    const service = app.service('schools');

    assert.ok(service, 'Registered the service');
  });
});
