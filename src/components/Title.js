import './Title.css';
import favicon from "../images/favicon.png";

function Title(){
    return(<div className='titleWrap'>
    <header className="masthead" id="bkpic" >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <img id="favicon" src={favicon} alt="icon" />
              <h1 id="title-1">Michael's Matrix</h1>
              <span className="subheading">A collection of Michael's random musings.</span>
                </div>
          </div>
         
        </div>

      </div>
      </header>
      </div>);
}

export default Title;