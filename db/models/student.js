'use strict';

const db = require('../index');
const Sequelize = require('sequelize');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true}
  }
}, {
  getterMethods: {
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    }
  }
});

module.exports = Student;

