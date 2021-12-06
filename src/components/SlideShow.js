import Carousel from 'react-bootstrap/Carousel';
import './SlideShow.css';

function SlideShow(){
  // const slides= new Array(3);
  //     slides[0]="images/cover2.jpg";
  //     slides[1]="images/cover4.jpg";
  //     slides[2]="images/cover5.jpg";
  // const slidesItem=slides.map(slides[id].scale*1.2);
      
     return (<div>
<Carousel fade className="slide1">
  
  <Carousel.Item interval={2500}>
    <img
      className="d-block-center w-60"     
      src="images/cover11.jpg"
      alt="cover"
      
       width="390"
      height="290"      
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p></p>
    </Carousel.Caption> */}
  </Carousel.Item>

  

 <Carousel.Item interval={2000}>
    <img
      className="d-block-center w-60"
      src="images/cover6.png"
      alt=""
      
       width="390"
      height="290"    
    />  
  </Carousel.Item>

  <Carousel.Item interval={1500}>
    <img
      className="d-block-center w-60"
      src="images/cover5.jpg"
      alt="Third slide"
       
       width="390"
      height="290" 
          
    />   
  </Carousel.Item>

  <Carousel.Item interval={1000}>
    <img
      className="d-block-center w-60"
      src="images/cover7.jpg"
      alt=""
      
       width="390"
      height="290"      
    />   
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block-center w-60"
      src="images/cover15.jpg"
      alt=""
      
       width="390"
      height="290"    
    />  
  </Carousel.Item>
   <Carousel.Item >
    <img
      className="d-block-center w-60"
      src="images/cover16.jpg"
      alt=""
      
       width="390"
      height="290"    
    />  
  </Carousel.Item>

  </Carousel> 
  </div>);}

export default SlideShow