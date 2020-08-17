import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Airlines from './Airlines/Airlines';
import Airline from './Airline/Airline';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Airlines} />
        <Route exact path="/airlines/:slug" component={Airline} />
      </Switch>
    );
  }
}

export default App;
