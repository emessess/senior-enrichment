import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class StudentDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStudent: {},
      campus: {},
      firstNameInput: '',
      lastNameInput: '',
      emailInput: '',
      campusInput: 0
    };

    this.pressDelete = this.pressDelete.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({
        selectedStudent: student,
        campus: student.campus
      }));
  }

  pressDelete(event) {
    const deleteStudentId = this.props.match.params.studentId;
    axios.delete(`/api/students/${deleteStudentId}`)
      .then(this.props.history.push('/students'));
  }

  submitUpdate(event) {
    event.preventDefault();
    console.log('soething happened!', event);
    const updateStudent = {
      firstName: this.state.firstNameInput,
      lastName: this.state.lastNameInput,
      email: this.state.emailInput,
      campusId: 3
    };

    axios.put(`/api/students/${this.state.selectedStudent.id}`, updateStudent)
      .then(res => res.data)
      .then(updatedStudent => {
        console.log('COMING BACK FROM PUT', updatedStudent);
        this.setState({
          selectedStudent: updatedStudent.student,
          campus: updatedStudent.campus
        });
      })
      .then(() => this.props.history.push('/students'));
  }

  handleChange(event) {
    let target = event.target;
    let name = target.name;
    console.log(target.value);
    console.log(target.name);

    this.setState({
      [name]: target.value
    });
  }

  render() {
    
    const student = this.state.selectedStudent;
    console.log('selected student', student);
    const campus = this.state.campus;
    console.log('campus', campus);
    return (
      <div>
        <h3>{student.fullName}</h3>
        <h4>{student.email}</h4>
        <h4>{student.construct}</h4>
        {console.log(campus)}
        <h4><NavLink to={`/campuses/${student.campusId}`}>{campus.name}</NavLink></h4>
        <button onClick={this.pressDelete}>Delete</button>
        <div>
          <h3>Enter info to update:</h3>
          <form onSubmit={this.submitUpdate}>
            <input onChange={this.handleChange} value={this.state.firstNameInput} type="text" name="firstNameInput" placeholder="Enter first name..." /><br />
            <input onChange={this.handleChange} value={this.state.lastNameInput} type="text" name="lastNameInput" placeholder="Enter last name..." /><br />
            <input onChange={this.handleChange} value={this.state.emailInput} type="text" name="emailInput" placeholder="Enter email..." /><br />
            <select name="campusInput" onChange={this.handleChange}>
              <option value="1">Mars</option>
              <option value="2">Luna</option>
              <option value="3">Terra</option>
              <option value="4">Titan</option>
            </select>
            <input type="submit" value="Submit" /><br />
          </form>
        </div>
      </div>);
  }
}

