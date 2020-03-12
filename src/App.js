import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Article from './Article';
import Thankyou from './Thankyou';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/thankyou" component={Thankyou}/>
        <Route path="/" component={Article} />
      </Switch>
    </Router>
  );
}

export default App;
