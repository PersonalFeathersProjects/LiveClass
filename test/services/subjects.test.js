const assert = require('assert');
const app = require('../../src/app');

describe('\'subjects\' service', () => {
  it('registered the service', () => {
    const service = app.service('subjects');

    assert.ok(service, 'Registered the service');
  });
});
