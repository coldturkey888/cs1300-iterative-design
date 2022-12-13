import './App.css';
import React from 'react';
import Context from './pages/context/context';
import Intro from './pages/intro/intro';
import Sketches from './pages/sketches/sketches';
import Wireframes from './pages/wireframes/wireframes';
import PrototypeCrit from './pages/prototype-crit/prototype-crit';
import PrototypeUserTesting from './pages/prototype-usertesting/prototype-usertesting';

function App() {
  return (
    <div className="App">
      <Context />
      <Intro />
      <Sketches />
      <Wireframes />
      <PrototypeCrit />
      <PrototypeUserTesting />
    </div>
  );
}

export default App;
