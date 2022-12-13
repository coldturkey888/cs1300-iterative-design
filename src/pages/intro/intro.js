import './intro.css';
import React from 'react';
import { Link } from 'react-scroll';
import intro_banner from "./intro_banner.jpg";

function Intro() {
  return (
    <div className="App-section" id="intro">
      <div className="intro-top-left-corner">Chosen startup</div>
      <div className="intro-container">
        <img className="intro-image" src={intro_banner} alt="intro image" />
        <h1 className="intro-title">Designing a mobile app interface for Radius</h1>
        <div className="intro-subtitle">
          Radius is an emerging 15-minute grocery delivery service based out of Indonesia.
          They capitalize on a network of hyper-local dark stores to deliver groceries quickly and affordably.
        </div>
        <div className="intro-description">
          Our interface aims to make the online grocery shopping experience intuitive and easy for users.
          Since Radius delivers from multiple grocery stores, our design aims to <b>accurately present the
          options</b> that are available from each store, while also allowing users to easily access items from
          other stores. Additionally, we understand that <b>the heart of Radius is fast delivery</b>. Driven by the
          philosophy that knowledge instills confidence, we were careful to design an interface that communicates
          order statuses as clearly as possible.
        </div>
      </div>
      <Link className="bottom-right" activeClass="active" to="sketches" spy={true} smooth={true}>
        <div className="intro-bottom-right-corner">Next: Sketches</div>
      </Link>
    </div>
  );
}

export default Intro;
  