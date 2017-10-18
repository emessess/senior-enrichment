import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Nav from './Nav';
import StudentList from './Students/StudentList';
import EditStudent from './Students/EditStudent';
import StudentDetail from './Students/StudentDetail';
import AddStudent from './Students/AddStudent';
import CampusList from './Campus/CampusList';
import CampusDetail from './Campus/CampusDetail';

const Root = () => {
  return (
    <div>
      <Nav />
      <main>
        <Switch>
          <Route path="/campuses" component={CampusList} />
          <Route path="/students" component={StudentList} />
        </Switch>
      </main>
    </div>
  );
};

export default Root;
