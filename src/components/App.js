import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import ALevel from './ALevel';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            {/*<Route path="/igcse" component={IGCSE} />*/}
            <Route path="/a-level" component={ALevel} />*/}
            <Route component={NotFound} />
         </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
