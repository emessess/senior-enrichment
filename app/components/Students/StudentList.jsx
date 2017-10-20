import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import AddStudent from './AddStudent';

export default class StudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };

    this.addStudent = this.addStudent.bind(this);

  }

  addStudent(student) {
    axios.post('/api/students/', student)
      .then(res => res.data)
      .then(createdStudent => {
        const currentStudents = this.state.students;
        this.setState({
          students: currentStudents.concat(createdStudent),
        });
      });
  }

  componentDidMount() {
    axios.get('/api/students')
      .then(res => res.data)
      .then(fetchedStudents => this.setState({students: fetchedStudents}));
  }


  render () {
    console.log(this.state.students);
    return (
      <div>
        <AddStudent students={this.state.students} addStudent={this.addStudent} /> 
        <table>
          <thead>
            <tr>
              <th>StudentID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.students.map((student) => {
                return (<tr key={student.id}>
                  <td>{student.id}</td>
                  <td><NavLink to={`/students/${student.id}`}>{student.fullName}</NavLink></td>
                </tr>);
              })
            }

          </tbody>
        </table>
      </div>
    );
  }
}
