import React from 'react';
import StudentList from '../Students/StudentList';
import SingleCampus from './SingleCampus';

const CampusDetail = () => {
  const campus = {
    name: 'Mars'
  };

  return (
    <div className="container">
      <SingleCampus name={campus.name} />
      <StudentList />
    </div>
  );
};

export default CampusDetail;

