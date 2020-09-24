import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Sundorban from './Components/Sundorban/Sundorban';
import Sreemongol from './Components/Sreemongol/Sreemongol';
import Sajek from './Components/Sajek/Sajek';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/">
<Home />
          </Route>
          <Route path="/sundorban">
            <Sundorban />
          </Route>
          <Route path="/sreemongol">
            <Sreemongol />
          </Route>
          <Route path="/sajek">
            <Sajek />
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
