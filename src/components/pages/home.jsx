import React, { Component } from 'react';
// import { Link } from "react-router-dom";

// // import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// // import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';



class Home extends Component {
  

   
//     constructor() {
//         super();
//         this.state = { time: {}, seconds: 60 };
//         this.timer = 0;
//         this.startTimer = this.startTimer.bind(this);
//         this.countDown = this.countDown.bind(this);
//       }
    
//       secondsToTime(secs){
    
//         let divisor_for_minutes = secs % (60 * 60);
    
//         let divisor_for_seconds = divisor_for_minutes % 60;
//         let seconds = Math.ceil(divisor_for_seconds);
    
//         let obj = {
//           "s": seconds
//         };
//         return obj;
//       }
    
//       componentDidMount() {
//         let timeLeftVar = this.secondsToTime(this.state.seconds);
//         this.setState({ time: timeLeftVar });
//         if (this.timer == 0 && this.state.seconds > 0) {
//             this.timer = setInterval(this.countDown, 1000);
//           }
//       }
    
//       startTimer() {
//         if (this.timer == 0 && this.state.seconds > 0) {
//           this.timer = setInterval(this.countDown, 1000);
//         }
//       }
    
//       countDown() {
//         // Remove one second, set state so a re-render happens.
//         let seconds = this.state.seconds - 1;
//         this.setState({
//           time: this.secondsToTime(seconds),
//           seconds: seconds,
//         });
        
//         // Check if we're at zero.
//         if (seconds == 0) { 
//           clearInterval(this.timer);
//         }
//       }
    
      render() {
        return(
         <React.Fragment>
            <h1>hello</h1>
         </React.Fragment>
        );
      }
    }
    

    


export default Home;