// import './Clock.css';

// function Clock(){

// const text1="good day";
// const q1="hi";
// const date = new Date();

// const hours = date.getHours();
// // var hours = date.getHours();

// const minutes = date.getMinutes();

// const seconds = date.getSeconds();

// const currentTime = setInterval(function () {

    
    
//     // convert military time to standard time

//     if (hours < 0) {
//         hours = hours * -1;
//     } else if (hours == 24) {
//         hours = 0;
//     } else {
//         hours = hours;
//     }
//     hours = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
//  }, 1000);  

//     if (hours < 12 && hours>=5) {
        
//     text1.style.color="#B4FE98";
//         hours.style.color="rgba(6, 240, 6, 0.13)";

//     } else if (hours < 18 && hours >= 12) {
        
//        text1.style.color="#FF0000";
//         hours.style.color="#FF0000"; 
//         ("#bkpic3").css("background-image", "url(image/postAfternoon2-bg.jpg)");

//     } else if (hours < 23 && hours >= 18){
//         text1 = "Good Evening";
//         const q1 =  "Why are you still working?";
//        text1.style.color="#2B4F60";
//        hours.style.color="#2B4F60";
        
//     //     ("#bkpic3").css("background-image", "url(image/postEvening2-bg.jpg)");
//     //    ("#myClass").addClass("overlay");
       
//     } else  {
//         text1 = "Good Night";
//         q1 =  "Why are you still working??DreamMakingTime";
//         // text1.style.color="#3D2C8D";
//         // hours.style.color="#3D2C8D";
//         // ("#bkpic3").css("background-image", "url(image/postEvening-bg.jpg)");
//     }

//     function addZero(time) {
//     return (time < 10) ? "0" + time : time;
//    }
//  return(<div>
//       <div id="myClass"></div>
      
//       <h1 id="greeting">{text1}</h1>
//       <h2 id="question">{q1}</h2>

//       <div id='main-container'>
//       <h2 id='clock'>{hours}</h2>
//       </div> 
//    </div>);

// } 



// export default Clock;