import React, { Component } from 'react';


class NotFound extends Component {
  

   
    render() { 
    
        return (
            <React.Fragment>
               <div className='container'>
                  <div className='formc' id='pageNotFound'>
                    {/* <img src={'/assets/laptop.svg'} alt="sgsd" style={{width: '171px',padding: '55px'}}/> */}
                    <h1 style={{color:'white',fontSize:'109px',marginBlock:'0px'}}>404</h1>
                    <h2 style={{color:'white',marginBlockStart:'0px',fontSize: '18px',}}>Page Not Found</h2>
                    <img id="animage" src={'/assets/laptop2.svg'} alt="" style={{    width: '90px',marginBlock:'33px -47px'}} />
                    <div id="d2"></div>
                    <img src={'/assets/laptop1.svg'} alt="" style={{    width: '328px',padding: '12px',marginInlineEnd:'21px'}} />
                 
                 </div>
                 </div>
            </React.Fragment>
        )
    }

    
}


export default NotFound;