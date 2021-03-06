import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';



// this is the class for registering a new user 
class Register extends Component {
  constructor(props){
    console.log(props);
    super();
    this.state = {
      username: '',
      password: '',
     userCreated: false
    }
  }


// method that handles change in the input fields and updates state
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


// method that handles the submit on the form
// calls the API and uses POST to create a new user and post it to the DB
// will then need to update the global state with the new user information 
// switched the user to the current user and also logged in
// Use the react redirect feature to then transition to the Account page
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    try {
    const registerResponse = await fetch('http://localhost:9000/api/v1/auth/register', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
      })
      console.log(registerResponse);
      const parsedResponse = await registerResponse.json();
      console.log("Register response: ", parsedResponse);
     
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
		return(
			<div class="form">
				<h1 class="Home">Create New Account:</h1>
					<form onSubmit={this.handleSubmit}>
					<h3>Username: </h3><br /> 
					<input type='text' name='username' onChange={this.handleChange}/><br />
					<h3>Password:</h3><br />
					<input type='password' name='password' onChange={this.handleChange}/><br />
				<button type='sumbit'>Submit</button><br />
				</form>
			</div>
	  )
	}

}



export default Register;