import Button from 'react-bootstrap/Button';
import './ShowDate.css';

function ShowDate(){
const d = new Date();
const weekday= new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


const TODAY=weekday[d.getDay()];

const date = d.getDate();


return(
    <div className="main-date">
    <Button variant="dark" id="todate">{date}</Button>{' '}
            
    <h2 id="today">{TODAY}</h2>
    </div>
);
}
export default ShowDate;