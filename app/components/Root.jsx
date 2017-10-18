import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Nav from './Nav';
import StudentList from './Students/StudentList';
import EditStudent from './Students/EditStudent';
import StudentDetail from './Students/StudentDetail';
import AddStudent from './Students/AddStudent';

const Root = () => {
  return (
    <div>
      <Nav />
      <main>
        <StudentList />
        <StudentDetail />
        <EditStudent />
        <AddStudent />
        {/* <Switch> */}
        {/* <Route path="/new-channel" component={NewChannelEntry} />
          <Route path="/channels/:channelId" component={MessagesList} />
          <Redirect to="/channels/1" /> */}
        {/* </Switch> */}
      </main>
    </div>
  );
}

export default Root;
