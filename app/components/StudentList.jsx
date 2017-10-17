import React, { Component } from 'react';
import SingleStudent from './SingleStudent';

const fakeNames = ['Mike Jones', 'Dweeb Johnson', 'Tina Fey', 'Tracey Morqan'];

const StudentList = () => {
  return (
    <div>
      <p>Student List</p>
      {
        fakeNames.map((studentName, idx) => <SingleStudent key={idx} name={studentName}/>)
      }
    </div>
  );
};

export default StudentList;

