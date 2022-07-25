import React, {useState} from 'react';
// import time from './Clock.js';
import './BackGroundImages.css';
import bk1 from "../../images/bg1.jpg";
import bk2 from "../../images/bg2.jpg";
import bk3 from "../../images/bg3.jpg";
import bk4 from "../../images/bg4.jpg";
import bk5 from '../../images/postAfternoon2-bg.jpg';
import bk6 from '../../images/bg6.jpg'
// eslint-disable-next-line 
     



function BackGroundImages(){

     const [image,setImage]= useState();
     setInterval(function(){
     
     let date = new Date()
     let hours= date.getHours();   
     
     if (hours>12 && hours<18){          
         setImage(bk5);} 
     else if(hours>18 && hours<24){
          setImage(bk6);}
     else{setImage(bk3);  }
     },1000);

return (<div>
     
<div className="extra1" role="presentation">
        <img src={bk1} width="100%" height="100%" alt="bk1"/>    
      </div>

    <div className="extra2" role="presentation">
        <img src={bk2} width="100%" height="100%" alt="bk2"/> 
    </div>

    <div className="extra3" role="presentation">
       <img src={image} width="100%"  height="100%" alt="bk3"/>
    </div>

    <div className="extra4" role="presentation">
         <img src={bk4} width="100%"  height="100%" alt="bk4"/>
    </div>   


     </div>);
   
}

export default BackGroundImages;