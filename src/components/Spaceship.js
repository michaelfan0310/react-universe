
import './Spaceship.css';


function Spaceship(){

    return (<div>
    <img src="/images/spaceship1.png" 
         alt="spaceShip" 
         width="20%" 
         id="spaceShip" />
    <img src="images/spaceship5.png" alt="spaceShip5" width="15%" id="spaceShip5" className="orbit"/>
    <img className="spaceShip6" src="images/shipCursor.png" alt="spaceship" width="5%" />
    </div>);
}
export default Spaceship;