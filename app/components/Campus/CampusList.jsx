import React, { Component } from 'react';
import axios from 'axios';
import SingleCampus from './SingleCampus';

export default class CampusList extends Component {
  constructor () {
    super();

    this.state = {
      campuses: []
    };
  }

  componentDidMount() {
    axios.get('api/campuses')
      .then(res => res.data)
      .then(fetchedCampuses => this.setState({campuses: fetchedCampuses}));
  }

  render() {
    return (
      <div>
        {
          this.state.campuses.map(campus => <SingleCampus name={campus.name} image={campus.image} key={campus.id} />)
        }
      </div>
    )
  }

}