import './BackGroundImages.css';
import bk1 from "../images/bg1.jpg";
import bk2 from "../images/bg2.jpg";
import bk3 from "../images/bg3.jpg";
import bk4 from "../images/bg4.jpg";


function BackGroundImages(){
     return (<div>
<div className="extra1" role="presentation">
        <img src={bk1} width="100%"  height="102%" alt="bk1"/>    
      </div>

    <div className="extra2" role="presentation">
        <img src={bk2} width="100%"  alt="bk2"/> 
    </div>

    <div className="extra3" role="presentation">
       <img src={bk3} width="100%"  alt="bk2"/>
    </div>

    <div className="extra4" role="presentation">
         <img src={bk4} width="100%"  alt="bk2"/>
    </div>   


     </div>);
   
}

export default BackGroundImages;