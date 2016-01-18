import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import MainLayout from 'layouts/MainLayout';
import HomeView from 'views/Home/HomeView';
import CounterView from 'views/Counter/CounterView';
import StreamsView from 'views/Streams/StreamsView';

export default (
  <Route path='/' component={MainLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/counter' component={CounterView} />
    <Route path='/streams' component={StreamsView} />
    <Redirect from='*' to='/' />
  </Route>
);
