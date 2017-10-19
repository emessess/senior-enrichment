import React, { Component } from 'react';
import axios from 'axios';

export default class SingleCampus extends Component  {
  constructor() {
    super();

    this.state = {
      selectedCampus: {},
      campusStudents: []
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h3>{this.state.selectedCampus.name}</h3>
        <img src={props.image} />
      </div>
    );
  }

}
