import React from 'react';
import {Route, IndexRoute} from 'react-router';

import HomeComponent from './components/home';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeComponent} />
  </Route>
);
