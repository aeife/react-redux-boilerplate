import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import MainLayout from 'layouts/MainLayout';
import HomeView from 'views/Home/HomeView';
import CounterView from 'views/Counter/CounterView';
import PostsView from 'views/Posts/PostsView';

export default (
  <Route path='/' component={MainLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/counter' component={CounterView} />
    <Route path='/posts' component={PostsView} />
    <Redirect from='*' to='/' />
  </Route>
);
