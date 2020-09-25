import React, { createContext, useState } from 'react';
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
import Login from './Components/Login/Login';
import HotelRoom from './Components/HotelRoom/HotelRoom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();

// //firebase
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './Components/Login/firebaseConfig';
// import Login from './Components/Login/Login';

// firebase.initializeApp(firebaseConfig);


function App() {


  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    password: '',
  });



  return (

    <UserContext.Provider value={[newUser, setNewUser, user, setUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
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
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/hotelRoom">
            <HotelRoom />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>


  );
}

export default App;
