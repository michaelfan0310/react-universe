import React, { Component } from "react";

import './Weather.css';

function Weather(){

    async function getWeather(){
   
const apiKEY='cd9180cfab0e6b06a7207e6677586ae5';

if ('geolocation' in navigator){
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(function(position){
        const lat=position.coords.latitude;
        const long=position.coords.longitude;
        document.getElementById('latitude').textContent=lat;
        document.getElementById('longitude').textContent=long;
        console.log(lat);
        console.log(long);        
    });

}else{
    console.log('geolocation not available');
    //   lat=43.043989;
    //   long=-81.2628853;
}

const api_url='https://api.openweathermap.org/data/2.5/weather?q=London,%20CA&appid='+apiKEY+'&units=metric';

   
    const response= await fetch(api_url);
    const data= await response.json();
    const dataIcon= data.weather[0].icon;
    const imageURL= 'http://openweathermap.org/img/wn/'+dataIcon+'@2x.png';

    const img=document.querySelector('#weatherIcon');
    
    img.src=imageURL;
    
    document.getElementById('weather1').textContent=data.weather[0].main;
    document.getElementById('weather2').textContent=data.main.temp;   
  
}

getWeather();
setInterval(getWeather,300000);

// document.getElementById('weather1').textContent=data.weather[0].main;
// document.getElementById('weather2').textContent=data.main.temp; 

return (<div>
      
<div class="weather-box">
              <h3 class="localWeather"> London(ON): <img id="weatherIcon" src="" alt="icon" width="130" /> <span id="weather1">
                  &nbsp;</span>&nbsp;&nbsp;
                <span id="weather2"></span>&#8451;
              </h3>
</div> 



   </div>
   ) 
}
// export default Weather;