'use strict';

const api = require('express').Router();
const db = require('../db/models');
const Student = db.Student;
const Campus = db.Campus;

api.get('/students', (req, res, next) => Student.findAll()
  .then(students => res.json(students))
  .catch(next)
);

api.get('/students/:id', (req, res, next) => Student.findById(req.params.id)
  .then(student => res.json(student))
  .catch(next)
);

api.get('/campuses', (req, res, next) => Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next)
);

api.get('/campuses/:id', (req, res, next) => Campus.findById(req.params.id)
  .then(campus => res.json(campus))
  .catch(next)
);

module.exports = api;
