import React, { Component } from 'react';
import "../../styles/style.css"


class Register extends Component {
  

   
    render() { 
      const change = () => {
        alert("Great Shot!");
      }
        return (
            <React.Fragment>
                 <div className='container'>
                  <div className='formc' id='register'>
                 <h2>Welcome</h2>
                    <p>Create A New Account</p>
                    <form action="">
                    <input type="email" className='input' placeholder='Enter Email'/>
                    <input type="text" className='input' placeholder='Enter Username'/>
                    <input type="password" className='input' placeholder='Enter Password'/>
                    <input type="password" className='input' placeholder='Confirm Password'/>
                    <p id="gotologin">You have an account ?</p>
                    <input type="submit" name="" id="button" className='input' value={'Sign Up'}  onChange={change}/>
                    <p>-- Or Continue With --</p>
                    <input type="button" id='google'  className='social' value={'G'} onChange={change} />
                    <input type="button" id='facebook'  className='social' value={'f'} onChange={change} />
                    </form>
                    </div> </div>
            </React.Fragment>
        )
    }
}
 
export default Register;