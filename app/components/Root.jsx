import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Nav from './Nav';
import StudentList from './StudentList';

const Root = () => {
  return (
    <div>
      <main>
      <Nav />
      <StudentList />
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
