
import Intro from './components/Intro.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import React from 'react';
import "../node_modules/sass-google-fonts/src/GoogleFonts.scss";
import './App.scss';



function App() {
  return (
    <Home/>
  );
}

function Home() {
  return (
    <div id="main">
      {/* <Navigation/> */}
      <Intro/>
      <Projects/>
    </div>
  );
}
export default App;
