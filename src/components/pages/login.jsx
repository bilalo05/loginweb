import React, { Component } from 'react';


class Login extends Component {
  

   
    componentDidMount(){
        var htmlInput = document.getElementById("email");
        var htmlpass = document.getElementById("pass");
        htmlInput.oninvalid = function(e) {
            e.target.setCustomValidity("");
          
          if ( document.getElementById("email").innerText.length === 0){
              document.getElementById('err').style.display='block';
              
            }
            
        };
        htmlpass.oninvalid = function(e){
            document.getElementById('err1').style.display='block';
        }
       
        };
    
        render() { 
        const fuck = () => {
            if ( document.forms["loginform"]["password"].value.length === 0)
            {
            alert("Please input a Value");
            document.getElementById('err1').style.display='block';
            return false;
            }
            else 
            {
            alert('Code has accepted : you can try another');
            document.getElementById('err1').style.display='none';
            return true; 
            }
        }
        const required = () => {
            // var empt = document.forms["loginform"]["username"].value;
            // var pss = document.forms["loginform"]["password"].value;
           
            if ( document.forms["loginform"]["username"].value.length === 0)
            {
            // alert("Please input a Value");
            document.getElementById('err').style.display='block';
            fuck();
            return false;
            }
            else 
            {
            // alert('Code has accepted : you can try another');
            document.getElementById('err').style.display='none';
            fuck();
            return true; 
            }

         
          }
      
        return (
            <React.Fragment>
                   <div className='container'>
                  <div className='formc' id='login'>
                   <h2>Hello Again</h2>
                    <p>Welcome Back</p>
                    <form name="loginform" action="" >
                        <div className='user-box'>
                             <input name="username" type="text" className='input' id="email"  required/>
                             <b id="err" style={{display:'none',color:'red',marginBlockStart:'-25px',marginInlineStart:'60px',fontSize:'10px',float:'left'}}>please fill the blanket</b>
                             <label>Username</label>
                        </div>
                        <div className='user-box'>
                             <input type="password" className='input' id="pass" name="password"  required/>
                             <b id="err1" style={{display:'none',color:'red',marginBlockStart:'-25px',marginInlineStart:'60px',fontSize:'10px',float:'left'}}>please fill the blanket</b>
                             <label>Password</label>
                        </div>

                    <p>Forget Password ?</p>
                    <button type="submit" name="" id="button"  onClick={required}>Sign In</button>
                    <p>-- Or Continue With --</p>
                    <input type="button" id='google' className='social' />
                    <input type="button" id='facebook' className='social'  />
                    </form>
                    <p id="gotoregister">You don't have an account ?</p>
                 </div>
                 </div>
                 
            </React.Fragment>
        )
    }
}
 
export default Login;