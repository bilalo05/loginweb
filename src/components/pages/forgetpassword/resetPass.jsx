import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';



class ResetPass extends Component {
   
      

   
    render() { 
 
        //error 
        var required = () => {
            // var empt = document.forms["loginform"]["username"].value;
            // var pss = document.forms["loginform"]["password"].value;
           
            if ( document.forms["passw"]["setpass"].value.length === 0)
            {
            // alert("Please input a Value");
            document.getElementById('err000').style.display='block';
            confrm();
            return false;
            }
            else 
            {
            // alert('Code has accepted : you can try another');
            document.getElementById('err000').style.display='none';
            confrm();
            return true; 
            }
      
          }
          var confrm = () => {
            // var empt = document.forms["loginform"]["username"].value;
            // var pss = document.forms["loginform"]["password"].value;
           
            if ( document.forms["passw"]["passwdc"].value.length === 0)
            {
            // alert("Please input a Value");
            document.getElementById('err001').style.display='block';
            return false;
            }
            else 
            {
            // alert('Code has accepted : you can try another');
            document.getElementById('err001').style.display='none';
            return true; 
            }
      
          }
        
    
        return (
            <React.Fragment>
               <div className='container'>
                  <div className='formc' id='codec' name="passw" style={{textDecoration:'none',marginBlockEnd:'10px'}}>
                  <h2 className='txt'>Account Recover</h2>
                  <p className='txt delay-2'>Password Reset</p>

                  <form  className='txt delay-3' name="setpass" action="" >
                        <div className='user-box'>
                             <input name="passwd" type="password" className='input' id="passwd"  required/>
                             <b id="err000" style={{display:'none',color:'red',marginBlockStart:'-28px',marginInlineStart:'60px',fontSize:'10px',float:'left'}}>write a new passowrd </b>
                             <label>Password</label>
                        </div>
                        <div className='user-box'>
                             <input name="passwdc" type="password" className='input' id="passwdc"  required/>
                             <b id="err001" style={{display:'none',color:'red',marginBlockStart:'-28px',marginInlineStart:'60px',fontSize:'10px',float:'left'}}>write a new passowrd </b>
                             <label>Confirm Password</label>
                        </div>
                        <Link to="/Success" id="gotosuccess">  
                        <button  name="" id="button" onClick={required}  style={{marginBlockEnd:'10px'}}>Confirm</button>
                        </Link>
                    </form>
                    
                    <Link to="/confirm" id="backtologin"><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon> Go Back </Link>
                    {/* <FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={brands('twitter')} /> */}
                 </div>
                 </div>
            </React.Fragment>
        )
    }

    
}


export default ResetPass;