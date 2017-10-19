import React, { Component } from 'react';

export default class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      firstNameInput: '',
      lastNameInput: '',
      email: '',
      selectedCampus: ''
    };

    this.handleInput = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    let field = event.target.name;
    let value = event.target.value;
    this.setState({field: value});
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <p>AddStudent</p>
        <h3>Enter student's info to register:</h3>
        <form>
          <input onChange={this.handleInput} type="text" name="firstNameInput" value={this.state.firstNameInput} placeholder="Enter first name..." /><br />
          <input type="text" name="lastNameInput" value={this.state.lastNameInput} placeholder="Enter last name..." /><br />
          <input type="text" name="email" value={this.state.emailInput} placeholder="Enter email..." /><br /><br />
          <label> Choose Your Campus:<br />
            <select>
              <option value="Mars">Mars</option>
              <option value="Titan">Titan</option>
              <option value="Luna">Luna</option>
              <option value="Terra">Terra</option>
            </select>
          </label><br /><br />
          <input type="submit" value="Submit" /><br />
        </form>
      </div>
    );
  }
}

