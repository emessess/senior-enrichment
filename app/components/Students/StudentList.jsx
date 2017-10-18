import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleStudent from './SingleStudent';
import axios from 'axios';

const fakeNames = ['Mike Jones', 'Dweeb Johnson', 'Tina Fey', 'Tracey Morqan'];

export default class StudentList extends Component {
  constructor() {
    super();

    this.state = {
      students: []
    };

  }

  componentDidMount() {
    axios.get('api/students')
      .then(res => res.data)
      .then(fetchedStudents => this.setState({students: fetchedStudents}));
  }

  render () {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Campus</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.students.map((student) => <SingleStudent key={student.id} id={student.id} name={student.fullName} campus={student.campusId} />)
            }
          </tbody>
        </table>
      </div>
    );
  }
}