import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Home';
import Post from './Post'

import AppBar from '../components/AppBar';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <Router>
      <AppBar />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames='fade'
              timeout={300}
            >
              <main>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/post/:id' component={Post} />
                  <Redirect to='/'/>
                </Switch>
              </main>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  )
};
