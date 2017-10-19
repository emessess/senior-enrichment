import React, { Component } from 'react';
import axios from 'axios';
import SingleCampus from './SingleCampus';
import { NavLink } from 'react-router-dom';

export default class CampusList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      campuses: [],
      newNameInput: ''
    };

    this.addCampus = this.addCampus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(fetchedCampuses => this.setState({campuses: fetchedCampuses}));

  }

  addCampus(event) {
    event.preventDefault();
    const name = this.state.newNameInput;
    axios.post('/api/campuses/', { name })
      .then(res => res.data)
      .then((newCampus) => this.setState({
        campuses: this.state.campuses.concat(newCampus),
        newNameInput: ''
      }))
      .then(this.props.history.push('/campuses/'));
  }

  handleChange(event) {
    this.setState({
      newNameInput: event.target.value
    });
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
        <form onSubmit={this.addCampus}>
          <input onChange={this.handleChange} value={this.state.newNameInput} type="text" name="newNameInput" placeholder="Enter new campus name..." /><br />
          <input type="submit" value="Submit" /><br />
        </form>
      </div>
    );
  }

}
