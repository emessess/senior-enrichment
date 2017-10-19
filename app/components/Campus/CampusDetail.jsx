import React, { Component } from 'react';
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
    return (
      <div>
        <h3>{this.state.selectedCampus.name}</h3>
        <img src={this.state.selectedCampus.image} />
        <label>Students currently at {this.state.selectedCampus.name}:
          <ul>
            {
              this.state.campusStudents && this.state.campusStudents.map(student => {
                return <li key={student.id}>{student.fullName}</li>;
              })
            }
          </ul>
        </label>
      </div>
    );
  }

}

