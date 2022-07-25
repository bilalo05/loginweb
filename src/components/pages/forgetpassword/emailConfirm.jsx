import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';



class EmailConfirm extends Component {
    constructor() {
        super();
        this.state = { time: {}, seconds: 60 };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
      }
    
      secondsToTime(secs){
    
        let divisor_for_minutes = secs % (60 * 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "s": seconds
        };
        return obj;
      }
    
      componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
          }
      }
    
      startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
    
      countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds === 0) { 
          clearInterval(this.timer);
        }
      }

   
    render() { 
 
        //error 
        var required = () => {
            // var empt = document.forms["loginform"]["username"].value;
            // var pss = document.forms["loginform"]["password"].value;
           
            if ( document.forms["codeset"]["code"].value.length === 0)
            {
            // alert("Please input a Value");
            document.getElementById('err00').style.display='block';
            return false;
            }
            else 
            {
            // alert('Code has accepted : you can try another');
            document.getElementById('err00').style.display='none';
            return true; 
            }
           
              
              

         
          }
        
    
        return (
            <React.Fragment>
               <div className='container'>
                  <div className='formc' id='codec' name="codec" style={{textDecoration:'none',marginBlockEnd:'10px'}}>
                  <h2 className='txt'>Account Recover</h2>
                  <p className='txt delay-2'>Account Confirmation</p>

                  <h5 className='txt'>A code has been sent to your email ,<br/> Copy and Past !</h5>
                  <form  className='txt delay-3' name="codeset" action="" >
                        <div className='user-box'>
                             <input name="code" type="number" className='input' id="code"  required/>
                             <b id="err00" style={{display:'none',color:'red',marginBlockStart:'-28px',marginInlineStart:'60px',fontSize:'10px',float:'left'}}>Check your email and write the code to confirm </b>
                             <label>Your Code</label>
                        </div>
                        <p id='gotologin'>Code will expire in  {this.state.time.s} seconds</p>
                        <Link to="/Reset" id="gotoreset">  
                        <button  name="" id="button" onClick={required}  style={{marginBlockEnd:'10px'}}>Confirm</button>
                        </Link>
                    </form>
                    
                    <Link to="/forget" id="backtologin"><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon> Go Back </Link>
                    {/* <FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={brands('twitter')} /> */}
                 </div>
                 </div>
            </React.Fragment>
        )
    }

    
}


export default EmailConfirm;