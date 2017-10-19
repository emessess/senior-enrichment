import React from 'react';

const SingleCampus = (props) => {
  console.log(props.id);
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.image} />
    </div>
  );
};

export default SingleCampus;
