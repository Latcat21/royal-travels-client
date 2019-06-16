import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'







class CountrySearch extends React.Component {

    constructor(){
        super()
        this.state = {
           countryList: [],
            searched: true,
            searchParam: '',
        
        }
    }
    handleChange = (e) => {
    
        this.setState({
          [e.currentTarget.name]: e.currentTarget.value
        })
      }

      handleSubmit = async (e) => {
        e.preventDefault()
        
        const apiCall = "http://localhost:9000/api/v1/royal-travels/"  + this.state.searchParam;
        
        try {
    
          const response = await fetch(apiCall, {
            method: 'GET',
            credentials: 'include'          
          })
          console.log(response)

    
          const countryData = await response.json()
          
          this.setState({
            countryList: countryData.data,
            searched: true           
          })
    
        } catch (err) {
          console.error('THERE WAS AN ERROR---SEE BELOW');
          console.error(err)
        }
        
      }


searchCountry = async () => {
       const data = await fetch('http://localhost:9000/royal-travels' + this.state.searchParam , {
           method: 'GET',
            credentials: 'include'
        })
    const fetchedData = await data.json()
        this.setState({
           countryList: fetchedData.data,
           searched: true
            });


    }
     render(){


    
        const country = this.state.countryList.map((country) => {
            return(
                <ul>
                <li key={country._id}> </li>

                <li>{country.country}</li>
                <li>{country.capital}</li>
                <li>{country.incomeLevel}</li>
                <li>{country.region}</li>
                
                </ul>
                
                )
        })
        return(
            <div className="container ">
            <div className="card text-center bg-light">
            
        <h1 className="mt-3">Search Countries</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="searchParam" placeholder="Search Countries" value={this.state.searchParam} onChange={this.handleChange}/>
        <button type="submit">Search</button>
      </form>
          <h1>Your Result</h1>
                 <ul className="text-center">
                    {country}
                </ul> 
                
              </div>
            </div>


          

                
           
            )

    }






}

export default CountrySearch;