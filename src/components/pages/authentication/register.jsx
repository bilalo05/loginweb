import React, { Component } from 'react';
// import "../../styles/style.css"

import { Link } from "react-router-dom";
// import "animate.css"


class Register extends Component {
  
  componentDidMount(){
    var htmlInput = document.getElementById("email1");
    var htmluser  = document.getElementById("username1");
    var htmlpass = document.getElementById("pass1");
    var htmlconf = document.getElementById("passconf");
    htmlInput.oninvalid = function(e) {
        e.target.setCustomValidity("");
      
      if ( document.getElementById("email1").innerText.length === 0){
          document.getElementById('err5').style.display='block';
          
        }
        
    };
    htmlpass.oninvalid = function(e){
        document.getElementById('err4').style.display='block';
    }
    htmluser.oninvalid = function(e){
      document.getElementById('err2').style.display='block';
  }
  htmlconf.oninvalid = function(e){
    document.getElementById('err3').style.display='block';
}
    };

   
    render() { 
     
      const pass = () => {
        if ( document.forms["registerform"]["password"].value.length === 0)
        {
        // alert("Please input a Value");
        console.log('2222222222');
        document.getElementById('err4').style.display='block';
        console.log('3333333333');
        return false;
        }
        else 
        {
        // alert('Code has accepted : you can try another');
        document.getElementById('err4').style.display='none';
        return true; 
        }
    }
    const email = () => {
      if ( document.forms["registerform"]["email"].value.length === 0)
      {
      // alert("Please input a Value");
      console.log('44444444444');

      document.getElementById('err5').style.display='block';
      console.log('55555555');

      return false;
      }
      else 
      {
      // alert('Code has accepted : you can try another');
      document.getElementById('err5').style.display='none';
      return true; 
      }
  }
  const confpass = () => {
    if ( document.forms["registerform"]["confirmpass"].value.length === 0)
    {
    // alert("Please input a Value");
    document.getElementById('err3').style.display='block';
    return false;
    }
    else 
    {
    // alert('Code has accepted : you can try another');
    document.getElementById('err3').style.display='none';
    return true; 
    }
}
    const required = () => {
        // var empt = document.forms["loginform"]["username"].value;
        // var pss = document.forms["loginform"]["password"].value;
       
        if ( document.forms["registerform"]["username"].value.length === 0)
        {
        // alert("Please input a Value");
        document.getElementById('err2').style.display='block';
        console.log('1111111111');
        pass();
        email();
        confpass();
        return false;
        }
        else 
        {
        // alert('Code has accepted : you can try another');
        document.getElementById('err2').style.display='none';
        pass();
        email();
        confpass();
        return true; 
        }

     
      }
        return (
            <React.Fragment>
                 <div className='container'>
                  <div className='formc' id='register'>
                 <h2 className='txt delay-1'>Welcome</h2>
                    <p className='txt delay-2'>Create A New Account</p>
                    <form className='txt delay-3' name="registerform" action=""  >
                    {/* <div className='user-box'>
                    <input id="mail" type="email" className='input' required/>
                    <label>Email</label>
                    </div> */}
                    <div className='user-box'>
                    <input id='email1' type="text" className='input' name="email" required/>
                    <b id="err5" style={{display:'none',color:'red',marginBlockStart:'-25px',marginInlineStart:'60px',fontSize:'10px',float:'left'}}>please fill your email</b>
                    <label>Email</label>
                    </div>
                    <div className='user-box'>
                    <input id='username1' type="text" className='input' name='username' required/>
                    <b id="err2" style={{display:'none',color:'red',marginBlockStart:'-25px',marginInlineStart:'60px',fontSize:'10px',float:'left'}}>please fill your username</b>
                    <label>Username</label>
                    </div>
                    <div className='user-box'>
                    <input id='pass1' type="password" className='input' name='password' required/>
                    <b id="err4" style={{display:'none',color:'red',marginBlockStart:'-25px',marginInlineStart:'60px',fontSize:'10px',float:'left'}}>please fill your password</b>
                    <label>Password</label>
                    </div>
                    <div className='user-box'>
                    <input id='passconf' type="password" className='input' name='confirmpass' required/>
                    <b id="err3" style={{display:'none',color:'red',marginBlockStart:'-25px',marginInlineStart:'60px',fontSize:'10px',float:'left'}}>please confirm your password</b>
                   <label>Confirm Password</label>
                    </div>
                    
                    {/* <p id="gotologin">You have an account ?</p> */}
                    <Link to="/" id="gotologin">You have an account ?</Link> 

                    <button type="submit" name="" id="button2" className='input' onClick={required}>Sign Up</button>
                    </form>
                    <p style={{marginBlockStart:'18px'}}>-- Or Continue With --</p>
                    <input type="button" id='google2'  className='social'  />
                    <input  type="button" id='facebook2'  className='social ' />
                    </div> </div>
            </React.Fragment>
        )
    }
}
 
export default Register;