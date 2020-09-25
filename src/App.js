import React, { useState } from 'react';
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

//firebase
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);


function App() {
//firebase
const [newUser,setNewUser] = useState(false)
const [user,setUser] = useState({
  isSignedIn: false,
  name: '',
  email: '',
  photo: '',
  password: '',
})


const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();
const handleSingIn = () => {
  firebase.auth().signInWithPopup(googleProvider)
  .then(result => {
   const {displayName,photoURL,email} = result.user;
   const signedInUser = {
     isSignedIn: true,
     name: displayName,
     email: email,
     photo: photoURL,
   }
   setUser(signedInUser);
    console.log(displayName,photoURL,email);
  })
  .catch(err =>{
    console.log(err);
    console.log(err.message);
  })

}


const handleFbSingIn = () => {
  firebase.auth().signInWithPopup(fbProvider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log('fb user after sign in', user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}


const handleSignOut = () => {
   firebase.auth().signOut()
   .then(res => {
       const signedOutUser = {
         isSignedIn: false,
         name: '',
         photo: '',
         email: '',
         error: '',
         success: false,
       }
       setUser(signedOutUser);
   })
   .catch(err =>{

   })
}

const handleChange = (e) => {
  let isFieldValid = true;
  if(e.target.name === 'email'){
     isFieldValid =  /\S+@\S+\.\S+/.test(e.target.value);
      
  }
  if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length >= 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
  }
  if(isFieldValid){
    const newUserInfo = {...user};
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  }
}
const handleSubmit = (e) => {
  // console.log(user.email,user.email)
    if(newUser &&  user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res =>{
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        updateUserName(user.name);
      })
      .catch(error => {
        // Handle Errors here.
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
       setUser(newUserInfo);
      
      });
    }
if(!newUser && user.email && user.password){
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(res => {
    const newUserInfo = {...user};
    newUserInfo.error = '';
    newUserInfo.success = true;
    setUser(newUserInfo);
    console.log('sign in user info',res.user);
  })
  .catch(function(error) {
    const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
       setUser(newUserInfo);
  });
}


    e.preventDefault();
}

const updateUserName = name =>{
      const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
      
    }).then(function() {
    console.log('User Name Updated successfully')
    }).catch(function(error) {
      console.log(error)
    });
}

  return (
    <div>
    {
      user.isSignedIn ?<button onClick={handleSignOut}>Sign Out</button> :
      <button onClick={handleSingIn}>Sign In</button>
      }
      <br/>
      <button onClick={handleFbSingIn}>SignIn Using  Facebook</button>
      {
        user.isSignedIn && <div>
          <p>Welcome, {user.name}</p>
          <p>Your Email: {user.email}</p>
          <img src={user.photoURL} alt=""/>
        </div> 
      }


      <h1>Our own Authentication</h1>
   
<input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
<label htmlFor="newUser">New User Sign Up</label>

      <form onSubmit={handleSubmit}>
      {newUser &&<input type="text" onBlur={handleChange} name="name" placeholder="Enter Your Name" required/>}
        <br/>
      <input type="text" name="email" onBlur={handleChange} placeholder="Your Email" required/>
      <br/>
      <input type="password" required onBlur={handleChange} name="password" id="" placeholder="Your Password"/>
      <br/>
      <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
      </form>
    <p style={{color: 'red'}}>{user.error}</p>
    {
      user.success && <p style={{color: 'green'}}>User {newUser ?'Created': 'Logged In'}Successfully</p>
    }
     

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
