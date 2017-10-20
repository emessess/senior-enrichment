'use strict';

const api = require('express').Router();
const db = require('../db/models');
const Promise = require('bluebird');
const Student = db.Student;
const Campus = db.Campus;


// GET ROUTES
api.get('/students', (req, res, next) => Student.findAll({
  include: [{
    model: Campus
  }]
})
  .then(students => res.json(students))
  .catch(next)
);

api.get('/students/:id', (req, res, next) => Student.findById(req.params.id, {
  include: [{
    model: Campus
  }]
})
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

api.get('/campuses/:id/students', (req, res, next) => Campus.findById(req.params.id)
  .then(campus => {
    let students = campus.getStudents();
    return students;
  })
  .then(students => {
    res.json(students);
  })
  .catch(next)
);


//POST ROUTES
api.post('/students', (req, res, next) => Student.create({
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  email: req.body.email,
  campusId: req.body.campusId
}, {include: [{model: Campus}]})
  .then(createdStudent => res.json(createdStudent))
  .catch(next)
);

api.post('/campuses', (req, res, next) => Campus.create({
  name: req.body.name,
})
  .then(createdCampus => res.json(createdCampus))
  .catch(next)
);

//PUT ROUTES 
api.put('/students/:id', (req, res, next) => Student.findById(req.params.id)
  .then(student => {
    return student.update(req.body);
  })
  .then(updatedStudent => res.json({student: updatedStudent, message: 'Student updated.'}))
  .catch(next)
);

api.put('/campuses/:id', (req, res, next) => Campus.findById(req.params.id)
  .then(campus => {
    return campus.update(req.body);
  })
  .then(updatedCampus => res.json({student: updatedCampus, message: 'Campus updated.'}))
  .catch(next)
);

//DELETE ROUTES

api.delete('/students/:id', (req, res, next) => Student.findById(req.params.id)
  .then(student => {
    return student.destroy();
  })
  .catch(next)
);

api.delete('/campuses/:id', (req, res, next) => Campus.findById(req.params.id)
  .then(campus => {
    const students = campus.getStudents();
    campus.destroy();
    return students;
  })
  .then(students => {
    Promise.map(students, student => student.destroy());
  })
  .catch(next)
);

module.exports = api;
