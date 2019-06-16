import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login';
import Register from './Register'
import Header from './Header';
import CountrySearch from './CountrySearch';




class App extends Component {
  constructor(){
    super();
    this.state = ({
      loggedIn: false,
      userId: '',
      username: '',
     
    })
  }




  setUserInfo = (userData) => {

    // console.log("set user info hit: ")
    // console.log(userData)
    // userData.username

    this.setState({
      loggedIn: true,
      username: userData.username,
      userId: userData.userId,
     
    })
    console.log("App comp state: ")
    console.log(this.state)
  }

// render all components that are in the router
  render(){
    return (
      <Router>
      <main>
       <Header/>
        <Switch>
          <Route path="/home" render={ (props) => <Home {...props} /> } />
          <Route path="/register" render={ (props) => <Register {...props} setUserInfo={this.setUserInfo} /> } />
          <Route path="/login" render={ (props) => <Login {...props} setUserInfo={this.setUserInfo} /> } />
          <Route path="/index" component={ CountrySearch } />
         
        </Switch>
      </main>
      </Router>
    );
  }
}

// replace component={ NAME } w/ 
// render={ (props) => < NAME {...props} newProp={this.newProp} /> }
export default App;