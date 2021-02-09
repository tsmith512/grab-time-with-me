import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Make, Meet, Start } from '../screens';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/meet/" component={Meet} />
        <Route path="/make/" component={Make} />
        <Route path="/" component={Start} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
