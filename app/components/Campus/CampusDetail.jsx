import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class CampusDetail extends Component  {
  constructor() {
    super();

    this.state = {
      selectedCampus: {},
      campusStudents: []
    };
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
                  return <li key={student.id}> <NavLink to={`/students/${student.id}`}>{student.fullName} {`(${student.construct})`}</NavLink></li>;
                })
              }
            </ul>
          </label>
        </div>
      </div>
    );
  }

}
