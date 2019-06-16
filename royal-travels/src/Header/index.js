import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';



const Header = () => {

  return (
    <header>


 




    	<div id="headerDiv">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <ul>
      <li class="nav-item">
      <Link to="/home"> <h3 className="nav-link">Home</h3> </Link>
      </li>

          <li class="nav-item">
	        <Link to="/register"> <h3 className="nav-link">Register</h3> </Link> 

          </li>
          <li class="nav-item">
	        <Link to="/login"> <h3 className="nav-link" >Login</h3></Link>
        </li>

        </ul>
        </nav>
        </div>
    </header>
    )
}

export default Header;