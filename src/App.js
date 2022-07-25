// import React from 'react';

import BackGroundImages from './components/page3/BackGroundImages.js';
import Navbar from './components/Navbar.js';
import './App.css';
import Title from './components/page1/Title.js';
import Spaceship from './components/page1/Spaceship.js';
import SlideShow from './components/page1/SlideShow.js';
import ButtonWrapper from './components/ButtonWrapper.js';
import Iss from './components/page1/Iss.js';
// import ExpenseDate from './components/ExpenseDate.js';
// import Canvas from './components/Canvas.js';
import ShowDate from './components/page1/ShowDate.js';
// import Weather from './components/Weather.js';
import Todolist from './components/Todolist.js';
// import Example from './components/Example';
import Heading from './components/page3/Heading.js';
import Clock from './components/page3/Clock.js';
import Topnews from './components/page2/Topnews.js';
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
