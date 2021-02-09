import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Meet, Share, Start } from '../screens';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/meet/" component={Meet} />
        <Route path="/share/" component={Share} />
        <Route path="/" component={Start} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
