
import './Spaceship.css';
import spaceship1 from "../images/spaceship1.png";
import spaceship5 from "../images/spaceship5.png";
import spaceship6 from "../images/shipCursor.png";

function Spaceship(){

    return (<div>
    <img src={spaceship1} 
         alt="spaceShip1" 
         width="20%" 
         id="spaceShip" />
    <img src={spaceship5} alt="spaceShip5" width="15%" id="spaceShip5" className="orbit"/>
    <img className="spaceShip6" src={spaceship6} alt="spaceship6" width="5%" />
    </div>);
}
export default Spaceship;