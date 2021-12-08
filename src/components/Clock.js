import React, {useEffect, useState} from 'react';
import './Clock.css';


function Clock(){
   const[clockState, setClockState] = useState()

   useEffect(()=> {
      setInterval(()=> {
         const date=new Date();
         setClockState(date.toLocaleTimeString('en-GB'));
      },1000);
   },[]);
   

 
// const hours = date.getHours();

// const minutes = date.getMinutes();

// const seconds = date.getSeconds();

// function addZero(time) {
//     return (time < 10) ? "0" + time : time;
//    }

// const currentTime = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds)      

// setInterval(currentTime,1000);

 return(<div>
      <div id="myClass"></div>   
      
      <div id='main-container'>
      <h2 id='clock'>{clockState}</h2>
       
      </div> 
   </div>); 
}



export default Clock;