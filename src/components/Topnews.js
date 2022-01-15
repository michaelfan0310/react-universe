import './Topnews.css';
import sungif from "../images/sun.gif"

function Topnews(){
  // eslint-disable-next-line 
const apiKey1='294749526c424fe6bb4feb6f396b4372';

const api_url_news='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=294749526c424fe6bb4feb6f396b4372';

const apiKey='c4f081a4b0b89eeeedaae32d42f340f6';
// eslint-disable-next-line 
const api_url_media='https://api.mediastack.com/v1/news?access_key='+apiKey+'&countries=us,au&sources=en,-fr';

async function getNews(){
    const response= await fetch(api_url_news);
    const data= await response.json();  
   
     console.log(data.articles[0].title);
    console.log(data.articles[0].description); 
}

getNews();
setInterval(getNews,21600000);



return(<div>
     <div id="topnews">
    <h1><span>T</span>
    <img id="sun-position" src={sungif} alt="icon" width="9%" />
    <span>pnews Today </span></h1>
    <p>(TechCrunch)</p>
    </div>
      <div className="wrapperText">        
        <h2 id="newstitle1">Better.com CEO Vishal Garg apologizes to current employees for 'blundering' of mass layoffs; SPAC delayed</h2>
        <p id="newstext1" class="newsContent">Better.com CEO Vishal Garg apparently realizes he’s done wrong. (As if the barrage of negative publicity wasn’t enough
        evidence of that ). Today, a letter to current employees was leaked on Blind by a verified Better employee. In the
        letter, Garg apologized f…
        </p>
      </div>
    </div>);


}

export default Topnews;