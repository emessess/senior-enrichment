import React, { Component } from 'react';
import axios from 'axios';
import SingleCampus from './SingleCampus';
import { NavLink } from 'react-router-dom';

export default class CampusList extends Component {
  constructor () {
    super();

    this.state = {
      campuses: [],
    };
  }

  componentDidMount() {
    axios.get('api/campuses')
      .then(res => res.data)
      .then(fetchedCampuses => this.setState({campuses: fetchedCampuses}));

  }

  render() {
    return (
      <div className="container">
        {
          this.state.campuses.map(campus => {
            return (
              <div className="campus_container" key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                  <div className="imgcontainer">
                    <img src={campus.image} />
                  </div>
                  <h3>{campus.name}</h3>
                </NavLink>
              </div>
            );
          })
        }
      </div>
    );
  }

}
