import React from 'react';

const EditStudent = () => {
  return (
    <div>
      <p>EditStudent</p>
      <h3>Enter info to update:</h3>
      <form>
        <input type="text" name="firstname" placeholder="Enter first name..." /><br />
        <input type="text" name="lastname" placeholder="Enter last name..." /><br />
        <input type="text" name="email" placeholder="Enter email..." /><br />
        <input type="submit" value="Submit" /><br />
      </form>
    </div>
  );
};

export default EditStudent;
