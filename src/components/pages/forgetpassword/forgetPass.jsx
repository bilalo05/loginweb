import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';


class ForgetPass extends Component {
  

   
    render() { 
        var required = () => {
            // var empt = document.forms["loginform"]["username"].value;
            // var pss = document.forms["loginform"]["password"].value;
           
            if ( document.forms["emailset"]["emails"].value.length === 0)
            {
            // alert("Please input a Value");
            document.getElementById('err0').style.display='block';
            return false;
            }
            else 
            {
            // alert('Code has accepted : you can try another');
            document.getElementById('err0').style.display='none';
            return true; 
            }
           
              
              

         
          }
    
        return (
            <React.Fragment>
               <div className='container'>
                  <div className='formc' id='forgetpass' name="emailset" style={{textDecoration:'none',marginBlockEnd:'10px'}}>
                  <h2 className='txt'>Account Recover</h2>
                  <p className='txt delay-2'>Email Setting</p>
                  <form  className='txt delay-3' name="emailset" action="" >
                        <div className='user-box'>
                             <input name="emails" type="text" className='input' id="emails"  required/>
                             <b id="err0" style={{display:'none',color:'red',marginBlockStart:'-25px',marginInlineStart:'60px',fontSize:'10px',float:'left'}}>please enter your email </b>
                             <label>Email</label>
                        </div>               
                        
                             <Link to="/confirm" id="gotoconfirm">  
                        <button  name="" id="button" onClick={required} style={{marginBlockEnd:'10px'}}>Send Code</button>
                             </Link>

                    </form>
                    
                    <Link to="/" id="backtologin"><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon> Go Back </Link>
                    {/* <FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={brands('twitter')} /> */}
                 </div>
                 </div>
            </React.Fragment>
        )
    }

    
}


export default ForgetPass;