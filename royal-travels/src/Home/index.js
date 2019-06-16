import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Login from '../Login'


class Home extends Component {
  constructor(props){
    super();
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log(this.state.cuisine + ' <-- SearchTerm');
      this.props.history.push("/Register");

    } catch (err) {
      console.log(err);
    }
  }

  render(){
    return (
        <div>
          <div className="container text-center">
          
            <h1 className="heading-primary">Welcome to Royal Travels</h1><br/><br/>
            <h4>Royal travels is the number one travel planner on the market
            </h4><br/><br/>

            <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Click Here To Register</button>
          </div>
          
        </div>

      )
  }
}






export default Home;
