import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class StudentList extends Component {
  constructor() {
    super();

    this.state = {
      students: []
    };

  }

  componentDidMount() {
    axios.get('/api/students')
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
                  <td><NavLink to={`/students/${student.id}`}>{student.fullName}</NavLink></td>
                  <td><NavLink to={`/campuses/${student.campus.id}`}>{student.campus.name}</NavLink></td>
                </tr>);
              })
            }

          </tbody>
        </table>
      </div>
    );
  }
}