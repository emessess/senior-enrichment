import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleStudent from './SingleStudent';

const fakeNames = ['Mike Jones', 'Dweeb Johnson', 'Tina Fey', 'Tracey Morqan'];

const StudentList = (props) => {
  console.log(props);
  const students = props.students;
  console.log(students);
  return (
    <div>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Campus</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map((student) => <SingleStudent key={student.id} id={student.id} name={student.fullName} campus={student.campusId} />)
        }
      </tbody>
    </div>
  );
};

const mapStateToProps = (state) => ({students: state.students});

export default connect(mapStateToProps)(StudentList);

