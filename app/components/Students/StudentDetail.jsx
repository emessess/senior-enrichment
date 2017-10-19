import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class StudentDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStudent: {}
    };
  }

  componentDidMount() {
    console.log(this.props.match.params)
    const studentId = this.props.match.params.studentId;
    console.log(studentId);

    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({
        selectedStudent: student
      }));
  }

  render() {

    const student = this.state.selectedStudent;
    const campus = this.state.selectedStudent.campus;
    console.log('meeeeee', campus);
    return (
      <div>
        <h3>{student.fullName}</h3>
        <h4>{student.email}</h4>
        <h4>{student.construct}</h4>
        <h4><NavLink to={`/campuses/${student.campusId}`}>{student.lastName}</NavLink></h4>
        <button>Edit</button>
        <button>Delete</button>
      </div>);
  }
}

