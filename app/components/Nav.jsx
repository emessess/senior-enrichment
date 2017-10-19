import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to='/'>
        <h2>Home</h2>
      </NavLink>
      <NavLink to='/campuses'>
        <h2>Campuses</h2>
      </NavLink>
      <NavLink to='/students'>
        <h2>Students</h2>
      </NavLink>
    </nav>
  );
};

export default Nav;
