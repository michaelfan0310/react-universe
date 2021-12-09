// import React from 'react';

import BackGroundImages from './components/BackGroundImages.js';
import Navbar from './components/Navbar.js';
import './App.css';
import Title from './components/Title.js';
import Spaceship from './components/Spaceship.js';
import SlideShow from './components/SlideShow.js';
import ButtonWrapper from './components/ButtonWrapper.js';
import ShowDate from './components/ShowDate.js';
// import Canvas from './components/Canvas.js';
import Todolist from './components/Todolist.js';
// import Example from './components/Example';
import Heading from './components/Heading.js';
import Clock from './components/Clock.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      <BackGroundImages />
      <Navbar />
      <Title />
     <Spaceship />
    <SlideShow />
    <ShowDate />
    <ButtonWrapper />
    {/* <Canvas /> */}
    <Todolist />    
     <Heading />
     <Clock />
   
    </div>
  );
}

export default App;
