import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Chat from './pages/ChatPage';
import Login from './pages/Login';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/chat" component={Chat} />
    </Switch>
  );
};

export default Routes;
