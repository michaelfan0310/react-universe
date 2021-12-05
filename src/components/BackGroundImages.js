import './BackGroundImages.css';


function BackGroundImages(){
     return (<div>
<div className="extra1" role="presentation">
        <img src="../images/bg1.jpg" width="100%"  height="102%" alt="bg1"/>
        {/* <img src="../images/universe6.jpg" width="100%"  alt="bg2"/>
        <img src="../images/universe7.jpg" width="100%"  alt="bg3"/> */}
    </div>

    <div className="extra2" role="presentation">
        <img src="../images/bg2.jpg" width="100%" height="102%" alt="bg2"/>
    </div>

    <div className="extra3" role="presentation">
        <img src="../images/bg3.jpg" width="100%" height="102%" alt="bg3"/>
    </div>

    <div className="extra4" role="presentation">
         <img src="../images/bg4.jpg" width="100%" height="100%" alt="bg4"/>

    </div>
    


     </div>);
   
}

export default BackGroundImages;