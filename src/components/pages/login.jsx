import React, { Component } from 'react';


class Login extends Component {
  

   
    render() { 
        const change = () => {
            alert("Great Shot!");
          }
          const login = () =>{
            
          }
        return (
            <React.Fragment>
                   <div className='container'>
                  <div className='formc' id='login'>
                   <h2>Hello Again</h2>
                    <p>Welcome Back</p>
                    <form action="">
                    <input type="text" className='input' placeholder='Enter Username' required/>
                    <input type="password" className='input' placeholder='Enter Password' required/>
                    <p>Forget Password ?</p>
                    <input type="submit" name="" id="button" className='input' value={'Sign In'}  onChange={change}/>
                    <p>-- Or Continue With --</p>
                    <input type="button" id='google' className='social' value={'G'} onChange={change} />
                    <input type="button" id='facebook' className='social' value={'f'} onChange={change} />
                    </form>
                    <p id="gotoregister" onClick={login}>You don't have an account ?</p>
                 </div>
                 </div>
                 
            </React.Fragment>
        )
    }
}
 
export default Login;