import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class StudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      firstNameInput: '',
      lastNameInput: '',
      constructInput: '',
      emailInput: ''
    };

    this.submitUpdate = this.submitUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  submitUpdate(event) {
    event.preventDefault();

    const newStudent = {
      firstName: this.state.firstNameInput,
      lastName: this.state.lastNameInput,
      email: this.state.emailInput,
      constructInput: this.state.constructInput,
      campusId: 1
    };

    axios.post('/api/students/', newStudent)
      .then(res => res.data)
      .then(createdStudent => {
        console.log('COMING BACK FROM POST', createdStudent);
        const currentStudents = this.state.students;
        this.setState({
          students: currentStudents.concat(createdStudent),
          firstNameInput: '',
          lastNameInput: '',
          constructInput: '',
          emailInput: ''
        });
      })
      .then(() => this.props.history.push('/students'));
  }

  componentDidMount() {
    axios.get('/api/students')
      .then(res => res.data)
      .then(fetchedStudents => this.setState({students: fetchedStudents}));
  }

  handleChange(event) {
    let target = event.target;
    let name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  render () {
    return (
      <div>
        <h4>Add info to register a student:</h4>
        <form className="addForm" onSubmit={this.submitUpdate}>
          <input onChange={this.handleChange} value={this.state.firstNameInput} type="text" name="firstNameInput" placeholder="Enter first name..." />
          <input onChange={this.handleChange} value={this.state.lastNameInput} type="text" name="lastNameInput" placeholder="Enter last name..." />
          <input onChange={this.handleChange} value={this.state.constructInput} type="text" name="constructInput" placeholder="Enter body construct..." />
          <input onChange={this.handleChange} value={this.state.emailInput} type="text" name="emailInput" placeholder="Enter email..." />
          <input type="submit" value="Submit" /><br />
        </form>
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
