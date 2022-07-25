import React, {useState} from 'react';
import './Clock.css';

function Clock(){

const now=new Date().toLocaleTimeString('en-GB');
const [time,setTime]=useState(now);

function updateTime(){
   const newTime=new Date().toLocaleTimeString('en-GB');
   setTime(newTime);
} 

setInterval(updateTime,1000); 

 return(<div>
      <div id="myClass"></div>   
      
      <div id='main-container'>
      <h2 id='clock'>{time}</h2>
       
      </div> 
   </div>); 
}
// const hours = date.getHours();

// const minutes = date.getMinutes();

// const seconds = date.getSeconds();

// function addZero(time) {
//     return (time < 10) ? "0" + time : time;
//    }

// const currentTime = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds)      

// setInterval(currentTime,1000);


export default Clock;