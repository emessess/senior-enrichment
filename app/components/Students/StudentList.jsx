import React, { Component } from 'react';
import { connect } from 'react-redux';
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
              <th>StudentID</th>
              <th>Name</th>
              <th>Campus</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.students.map((student) => {
                return (<tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.fullName}</td>
                  <td>{student.campusName}</td>
                </tr>);
              })
            }

          </tbody>
        </table>
      </div>
    );
  }
}