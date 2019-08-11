import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from "../components/Landing";
import AllDeals from "../components/AllDeals";
import Error from '../components/Error';
import AddDeal from '../components/AddDeal';
import Contact from '../components/Contact';
import About from '../components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} exact/>
          <Route path="/deals" component={AllDeals}/>
          <Route path="/add-a-deal" component={AddDeal} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;