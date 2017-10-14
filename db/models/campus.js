const db = require('../index');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
  },
  imgURL: {
    type: Sequelize.VIRTUAL,
    get: function () {
      //TODO: FIX THIS ROUTE WHEN YOU HAVE IT
      return 'api/INSERTROUTETOGETIT';
    }
  }
});

module.exports = Campus;
