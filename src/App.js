// import React from 'react';

import BackGroundImages from './components/BackGroundImages.js';
import Navbar from './components/Navbar.js';
import './App.css';
import Title from './components/Title.js';
import Spaceship from './components/Spaceship.js';
import SlideShow from './components/SlideShow.js';
import ButtonWrapper from './components/ButtonWrapper.js';
import Iss from './components/Iss.js';
// import ExpenseDate from './components/ExpenseDate.js';
// import Canvas from './components/Canvas.js';
import ShowDate from './components/ShowDate.js';
// import Weather from './components/Weather.js';
import Todolist from './components/Todolist.js';
// import Example from './components/Example';
import Heading from './components/Heading.js';
import Clock from './components/Clock.js';
import Topnews from './components/Topnews.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      <BackGroundImages />
      <Navbar />
      <Title />
     <Spaceship />
     <Iss />
    <SlideShow />

    {/* <ExpenseDate /> */}

    <ShowDate />
    {/* <Weather /> */}
    <ButtonWrapper />
    {/* <Canvas /> */}
     <Topnews />
    <Todolist />    
     <Heading />
     <Clock />
     
    </div>
  );
}

export default App;
