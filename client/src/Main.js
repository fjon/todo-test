import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import TodoDescription from './components/TodoDescription';
import App from './components/App';

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/todo/:id" component={TodoDescription} />
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  );
}

render(<Main />, document.getElementById('root'));
