import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import MainLayout from 'layouts/MainLayout';
import HomeView from 'views/Home/HomeView';
import CounterView from 'views/Counter/CounterView';

export default (
  <Route path='/' component={MainLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/counter' component={CounterView} />
    <Redirect from='*' to='/' />
  </Route>
);
