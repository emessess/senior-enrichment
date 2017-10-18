import React from 'react';

const SingleStudent = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.campus}</td>
    </tr>
  );
};

export default SingleStudent;
