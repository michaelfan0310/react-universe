import Carousel from 'react-bootstrap/Carousel';
import './SlideShow.css';
import cover1 from "../../images/RosettaStone.jpg";
import cover2 from "../../images/cover11.jpg";
import cover3 from "../../images/cover7.jpg";
import cover4 from "../../images/cover10.jpg";
import cover5 from "../../images/cover6.png";
import cover6 from "../../images/cover9.png";
import cover7 from "../../images/postevening.gif";
import cover8 from "../../images/cover15.jpg";
import { Component } from 'react';
class SlideShow extends Component {
        
  render() {
   return  (<div>
<Carousel fade className="slide1">
<Carousel.Item interval={3500}>
    <img
      className="d-block-center w-60"     
      src={cover8} alt="cover1" width='36%' height='30%'  
    />    
  </Carousel.Item> 
 <Carousel.Item interval={3000}>
    <img
      className="d-block-center w-60"     
      src={cover7} alt="cover1" width='36%' height='30%'  
    />    
  </Carousel.Item> 
  
  <Carousel.Item interval={2500}>
    <img
      className="d-block-center w-60"     
      src={cover1} alt="cover1" width='36%' height='30%'  
    />    
  </Carousel.Item>  

 <Carousel.Item interval={2000}>
    <img
      className="d-block-center w-60"
     src={cover2} alt="cover2" width='36%' height='30%' 
    />  
  </Carousel.Item>

  <Carousel.Item interval={1500}>
    <img
      className="d-block-center w-60"     
      src={cover3} alt="cover1" width='36%' height='30%'     
    />   
  </Carousel.Item>

  <Carousel.Item interval={1000}>
   <img
      className="d-block-center w-60"     
      src={cover4} alt="cover1" width='36%' height='30%'     
    />    
  </Carousel.Item>
  <Carousel.Item interval={500}>
   <img
      className="d-block-center w-60"     
      src={cover5} alt="cover1" width='36%' height='30%'     
    />   
  </Carousel.Item>
   <Carousel.Item >
    <img
      className="d-block-center w-60"     
      src={cover6} alt="cover1" width='36%' height='30%'     
    />   
  </Carousel.Item>

  </Carousel> 
  </div>)
  }
}
export default SlideShow