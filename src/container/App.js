import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from "../components/Landing";
import AllDeals from "../components/AllDeals";
import Error from '../components/Error';
 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} exact/>
          <Route path="/deals" component={AllDeals}/>

          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;