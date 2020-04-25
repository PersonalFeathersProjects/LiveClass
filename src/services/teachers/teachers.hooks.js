const { authenticate } = require('@feathersjs/authentication').hooks;
const nodemailer = require('nodemailer');

const goMail = require('../../SendEmail.Module')

function getUserData(context) {
  if (context.data) {
    //console.log(context.data)
    goMail(context.data)
  }

  // return Promise.reject()
}

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [getUserData],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
