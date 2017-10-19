import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Nav from './Nav';
import StudentList from './Students/StudentList';
import EditStudent from './Students/EditStudent';
import StudentDetail from './Students/StudentDetail';
import AddStudent from './Students/AddStudent';
import CampusList from './Campus/CampusList';
import CampusDetail from './Campus/CampusDetail';
import Home from './Home';

const Root = () => {
  return (
    <div>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/campuses" component={CampusList} />
          <Route path="/campuses/:campusId" component={CampusDetail} />
          <Route exact path="/students" component={StudentList} />
          <Route path="/students/:studentId" component={StudentDetail} />
        </Switch>
      </main>
    </div>
  );
};

export default Root;
