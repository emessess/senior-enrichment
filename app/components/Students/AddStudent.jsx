import React from 'react';

const AddStudent = () => {
  return (
    <div>
      <p>AddStudent</p>
      <h3>Enter student's info to register:</h3>
      <form>
        <input type="text" name="firstname" placeholder="Enter first name..." /><br />
        <input type="text" name="lastname" placeholder="Enter last name..." /><br />
        <input type="text" name="email" placeholder="Enter email..." /><br /><br />
        <label> Choose Your Campus:<br />
          <select>
            <option value="Mars">Mars</option>
            <option value="Titan">Titan</option>
            <option value="Luna">Luna</option>
            <option value="Terra">Terra</option>
          </select>
        </label><br /><br />
        <input type="submit" value="Submit" /><br />
      </form>
    </div>
  );
};

export default AddStudent;
