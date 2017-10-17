import React, { Component } from 'react';

const SingleStudent = (props) => {
  return (
    <div>
      <p>Single Student</p>
      <h3>{props.name}</h3>
    </div>
  );
};

export default SingleStudent;
