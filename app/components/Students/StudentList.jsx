import React, { Component } from 'react';
import SingleStudent from './SingleStudent';

const fakeNames = ['Mike Jones', 'Dweeb Johnson', 'Tina Fey', 'Tracey Morqan'];

const StudentList = () => {
  return (
    <div>
      <p>student list</p>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Campus</th>
        </tr>
      </thead>
      <tbody>
        {
          fakeNames.map((studentName, idx) => <SingleStudent key={idx} id={Math.floor(Math.random() * 10)} name={studentName} campus='Mars'/>)
        }
      </tbody>
    </div>
  );
};

export default StudentList;

