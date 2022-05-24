
import './Heading.css';
// import ReactDom from 'react-dom';

function Heading(){

   let text1="good day";
   const amentStyle={
        color: "lightgreen",
        fontSize: "6rem",
        textShadow: "2px 2px rgb(255,255,25,0.63)"
   }
   const date = new Date();
   const hours = date.getHours();
     //  const hours = 10;
   if (hours < 12 && hours>=5) {
        text1 = "Good Morning";
       amentStyle.color='green';

   } else if (hours < 18 && hours >= 12) {
        text1 = "Good Afernoon";
        amentStyle.color='red';
        amentStyle.fontSize='8rem';
   } else if (hours < 23 && hours >= 18){
        text1 = "Good Evening";
        amentStyle.color="blue";
   } else  {
        text1 = "Good Night";}

        console.log(hours);

 return(<div>
      <div id="myClass"></div>
      
      <h1 id="greeting" style={amentStyle}>{text1}</h1>   

     
   </div>);

   }

export default Heading;