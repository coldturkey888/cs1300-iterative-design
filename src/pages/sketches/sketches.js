import './sketches.css';
import React from 'react';
import { Link } from 'react-scroll';
import sketch1 from './sketch1.png';
import sketch2 from './sketch2.png';
import sketch3 from './sketch3.png';
import sketch4 from './sketch4.png';
import finalSketch from './finalSketch.pdf';


function Sketches() {
  return (
    <div className="App-section" id="sketches">
      <div className="sketches-top-left-corner">Sketches</div>

      <div className="sketches-container">

      <div>
      <h1 className="sketches-title">Sketch #1</h1>
      <img className="sketches-item" src={sketch1} alt="sketch 1"></img>
      </div>
      <div>
      <h1 className="sketches-title">Sketch #2</h1>
      <img className="sketches-item" src={sketch2} alt="sketch 2"></img>
      </div>
      <div>
      <h1 className="sketches-title">Sketch #3</h1>
      <img className="sketches-item" src={sketch3} alt="sketch 3"></img>
      </div>
      <div>
      <h1 className="sketches-title">Sketch #4</h1>
      <img className="sketches-item" src={sketch4} alt="sketch 4"></img>
      </div>
    
      </div>
      
      

      <div className="sketches-description">
      <p>Above you will see four different sketches of interface ideas based upon various design choices. Although they all have a similar style in regards to 
        following a row format for displaying stores and store items, design differences primarily included on how a search bar appears (icon or search bar), app navigation layout, and home page 
        content.
      </p>
      <p>We met as a team to combine our individual sketches into one sketch which can be viewed <a href = {finalSketch} target = "_blank">here</a>!
      </p>
      </div>

      <Link className="bottom-right" activeClass="active" to="wireframes" spy={true} smooth={true}>
        <div className="sketches-bottom-right-corner">Next: Wireframes</div>
      </Link>
    </div>
  );
}

export default Sketches;
  