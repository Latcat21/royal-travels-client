import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


class Login extends Component {
  constructor(props){
    super();
    this.state = {
      username: '',
      password: '',
      userCreated: false
    }
  }
  // this function updates the input fields to update state
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  // this function calls the server for the login auth route
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
 const loginResponse = await fetch('http://localhost:9000/api/vi/auth/login', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
      })
      const parsedResponse = await loginResponse.json();
      console.log("login response: ", parsedResponse)
      const userInfo = {
        username: parsedResponse.data.username,
        password: parsedResponse.data.password,
        userId: parsedResponse.data._id,
        userCreated: true
      }
      this.props.setUserInfo(userInfo)
      this.props.history.push("/index");
    } catch (err) {
      console.log(err);
    }
  }
render(){

    return (
      <div className="container text-center">
      <div className="card text-center">
        <h1 className="heading-primary">User Login</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Username:</h3>
          <input type='text' name='username' onChange={this.handleChange}/>
          <h3>Password:</h3>
          <input type='password' name='password' onChange={this.handleChange}/>3
          <button className="btn btn-primary" type='sumbit'>Login</button>
        </form>
        </div>
      </div>
      )
  }
}

export default Login;