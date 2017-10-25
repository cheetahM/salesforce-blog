import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostsShow from './components/posts_show';

import App from './components/app';
import PostsContainer from './components/posts_container';
import PostsNew from './components/posts_new';

const FourOhFour = () => <h1>404</h1>;

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsContainer} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
    <Route component={FourOhFour} />
  </Route>
);
