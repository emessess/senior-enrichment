import React, { Component } from 'react';

export default class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      campusId: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitStudent = this.submitStudent.bind(this);
  }

  handleChange(event) {
    console.log(this.props);
    let target = event.target;
    let name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  submitStudent (event) {
    event.preventDefault();
    this.props.addStudent(this.state);
  }


  render() {
    return (
      <div>
        <h4>Add info to register a student:</h4>
        <form className="addForm" onSubmit={this.submitStudent}>
          <input onChange={this.handleChange} value={this.state.firstNameInput} type="text" name="firstName" placeholder="Enter first name..." />
          <input onChange={this.handleChange} value={this.state.lastNameInput} type="text" name="lastName" placeholder="Enter last name..." />
          <input onChange={this.handleChange} value={this.state.emailInput} type="text" name="email" placeholder="Enter email..." />
          <input type="submit" value="Submit" /><br />
        </form>
      </div>
    );
  }
}

