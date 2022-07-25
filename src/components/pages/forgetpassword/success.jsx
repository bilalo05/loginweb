import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';



class Success extends Component {
   
      

   
    render() { 
 
   
   
        
    
        return (
            <React.Fragment>
               <div className='container'>
                  <div className='formc' id='success' name="succ" style={{textDecoration:'none',backgroundColor:'#f6f6f699',paddingBlock:'28px'}}>
                  <img src={'/assets/shield.svg'} alt="" style={{    width: '241px',padding: '12px',marginInlineEnd:'21px'}} />
                  <img className='txt delay-3' src={'/assets/checkg.svg'} alt="" style={{    width: '173px',padding: '12px',marginInlineEnd:'21px',position: 'absolute',right: '502px',top: '117px'}} />
                  <h4 style={{color:'black',marginBlock:'0px',fontSize:'20px'}}>Your Password Has Been <br/> Updated Successfuly</h4>
                  <form  className='txt delay-3' name="setpass" action="" >
                     
                        <Link to="/" id="gotologin2">  
                        <button  name="" id="button"  style={{marginBlockEnd:'10px'}}>Sign In <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> </button>
                        </Link>
                    </form>
                    
                    {/* <Link to="/confirm" id="backtologin"><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon> Go Back </Link> */}
                    {/* <FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={brands('twitter')} /> */}
                 </div>
                 </div>
            </React.Fragment>
        )
    }

    
}


export default Success;

