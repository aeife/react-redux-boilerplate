import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import MainLayout from 'layouts/MainLayout';
import HomeView from 'views/Home/HomeView';
import CounterView from 'views/Counter/CounterView';
import PostsView from 'views/Posts/PostsView';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout}>
      <IndexRoute component={HomeView} />
      <Route path='/counter' component={CounterView} />
      <Route path='/posts' component={PostsView} />
      <Redirect from='*' to='/' />
    </Route>
  </Router>
);
