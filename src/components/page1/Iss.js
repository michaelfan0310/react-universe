import './Iss.css';
import isspic from "../../images/iss.png";

function Iss(){
    const api_iss_url="https://api.wheretheiss.at/v1/satellites/25544";


async function getIss(){
    const response= await fetch(api_iss_url);
    const data_iss= await response.json();     

     document.getElementById('IssPosition1').textContent=data_iss.latitude+'°';
    document.getElementById('IssPosition2').textContent=data_iss.longitude+'°';    
    }
 getIss();
 setInterval(getIss,3000);

return (<div id="Iss-box">
<p id="IssPosition2" value="9&#176;">1</p>
<p id="IssPosition1" value="9&#176;">2</p>
<img src={isspic} alt="iss" width="15%" id="outer-orbit" className="orbitIss" />
</div>
    );
}

export default Iss;