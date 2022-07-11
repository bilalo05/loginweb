import React, { Component } from 'react';
import "../../styles/style.css";
import "../../scripts/script.js";
import Login from './login';
import Register from './register';


class Authentication extends Component {
  

   
    render() { 
    
        return (
            <React.Fragment>
              <Login/>
              <Register/>
            </React.Fragment>
        )
    }

    
}

export default Authentication;