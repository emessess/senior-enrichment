import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class CampusDetail extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      selectedCampus: {},
      campusStudents: [],
      firstNameInput: '',
      lastNameInput: '',
      emailInput: '',
    };
    this.pressDelete = this.pressDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  componentDidMount() {
    const campusId = this.props.match.params.campusId;

    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({ selectedCampus: campus }));

    axios.get(`/api/campuses/${campusId}/students`)
      .then(res => res.data)
      .then(students => this.setState({ campusStudents: students }));
  }

  pressDelete() {
    const campusId = this.props.match.params.campusId;
    axios.delete(`/api/campuses/${campusId}`)
      .then((stuff) => {
        console.log(stuff);
        this.state.campusStudents.forEach(student => {
          axios.delete(`api/students/${student.id}`);
        });
        this.props.history.push('/');
      });
  }

  deleteStudent(event) {
    console.log(event.target.value)
    const deleteStudentId = event.target.value;
    axios.delete(`/api/students/${deleteStudentId}`)
      .then(this.setState({
        campusStudents: this.state.campusStudents.filter(student => student.id !== deleteStudentId)
      }))
      .then(this.props.history.push('/campuses'));
  }


  handleChange(event) {
    let target = event.target;
    let name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  submitUpdate(event) {
    event.preventDefault();

    const newStudent = {
      firstName: this.state.firstNameInput,
      lastName: this.state.lastNameInput,
      email: this.state.emailInput,
      campusId: this.props.match.params.campusId
    };

    axios.post('/api/students/', newStudent)
      .then(res => res.data)
      .then(createdStudent => {
        const currentStudents = this.state.students;
        this.setState({
          students: campusStudents.concat(createdStudent),
          firstNameInput: '',
          lastNameInput: '',
          emailInput: '',
        });
      })
      .then(() => this.props.history.push('/campuses'));
  }

  render() {
    console.log(this.state.selectedCampus);
    return (
      <div className="container">
        <div className="campus_container">
          <h3>{this.state.selectedCampus.name}</h3>
          <div className="imgcontainer">
            <img src={`/${this.state.selectedCampus.image}`} />
          </div>
          <label>Students currently at {this.state.selectedCampus.name}:
            <ul>
              {
                this.state.campusStudents && this.state.campusStudents.map(student => {
                  return (<li key={student.id}> <NavLink to={`/students/${student.id}`}>{student.fullName}</NavLink><button onClick={this.deleteStudent} value={student.id} className="smallDel">&times;</button>
                  </li>);
                })
              }
            </ul>
            <button onClick={this.pressDelete}>Delete Campus</button>
          </label>
          <h4>Add info to register a student for this campus:</h4>
          <form className="addForm" onSubmit={this.submitUpdate}>
            <input onChange={this.handleChange} value={this.state.firstNameInput} type="text" name="firstNameInput" placeholder="Enter first name..." />
            <input onChange={this.handleChange} value={this.state.lastNameInput} type="text" name="lastNameInput" placeholder="Enter last name..." />
            <input onChange={this.handleChange} value={this.state.emailInput} type="text" name="emailInput" placeholder="Enter email..." />
            <input type="submit" value="Submit" /><br />
          </form>
        </div>
      </div>
    );
  }

}
