'use strict';

const faker = require('faker');

const db = require('./db');
const Student = require('./db/models/').Student;
const Campus = require('./db/models/').Campus;


const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

const initializeCampuses = () => {
  const starterCampuses = ['Mars', 'Luna', 'Terra', 'Titan'];

  return starterCampuses.map(campus => ({
    name: campus,
    image: `${campus.toLowerCase()}.jpg`
  }));
};

const createStudent = () => {
  const enumChoices = ['AI', 'Mech', 'Flesher'];

  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    construct: enumChoices[getRandomInt(0, 3)],
    email: faker.internet.email(),
    campusId: getRandomInt(1, 5)
  };
};


let students = [];

for (let i = 0; i < 25; i++) {
  students.push(createStudent());
}

let campuses = initializeCampuses();

campuses.forEach(campus => Campus.create(campus).then(res => console.log('campus created and saved')));
students.forEach(student => Student.create(student).then(res => console.log('student created and saved')));



