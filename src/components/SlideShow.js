import Carousel from 'react-bootstrap/Carousel';
import './SlideShow.css';

function SlideShow(){
  const slides= new Array(3);
      slides[0]="images/cover2.jpg";
      slides[1]="images/cover4.jpg";
      slides[2]="images/cover5.jpg";
  // const slidesItem=slides.map(slides[id].scale*1.2);
      
     return (<div>
<Carousel fade className="slide1">
  
  <Carousel.Item interval={1500}>
    <img
      className="d-block-center w-40"     
      src={slides[0]}
      alt="cover"
      height="290"       
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p></p>
    </Carousel.Caption> */}
  </Carousel.Item>

  

 <Carousel.Item interval={1000}>
    <img
      className="d-block-center w-40"
      src="images/cover4.jpg"
      alt=""
      height="290"    
    />  
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <img
      className="d-block-center w-40"
      src="images/cover5.jpg"
      alt="Third slide"
      height="290"      
    />   
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block-center w-40"
      src="images/cover7.jpg"
      alt=""
      height="290"      
    />   
  </Carousel.Item>
  </Carousel> 
  </div>);}

export default SlideShow