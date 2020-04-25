const assert = require('assert');
const app = require('../../src/app');

describe('\'gradelevels\' service', () => {
  it('registered the service', () => {
    const service = app.service('gradelevels');

    assert.ok(service, 'Registered the service');
  });
});
