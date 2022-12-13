import './context.css';
import { Link } from 'react-scroll';

function Context() {
  return (
    <div className="App-section" id="context">
      <div className="context-top-left-corner">Iterative Design</div>
      <p className="context-preface">What is this project?</p>
      <div className="context">
        <p className="context-content">Design an interactive interface for an emerging startup, by going through the full iterative design process flow:</p>
        <ol className="context-content">
          <li className="context-item"><span>Sketching ideas of the interface</span></li>
          <li className="context-item"><span>Creating an interactive, high-fidelity prototype</span></li>
          <li className="context-item"><span>Conducting user testing on a final, revised prototype</span></li>
          <li className="context-item"><span>Contacting the startup</span></li>
        </ol>
      </div>
      <hr className="solid-hr"></hr>
      <p className="context-preface">What were we trying to achieve through this project?</p>
      <div className="context">
        <ol className="context-content">
          <li className="context-item"><span>To familiarize ourselves with a full iterative design process flow</span></li>
          <li className="context-item"><span>To take on a professional approach towards app design</span></li>
          <li className="context-item"><span>To build on our wireframing and prototyping skills</span></li>
          <li className="context-item"><span>To practice collaborative work in a design environment</span></li>
          <li className="context-item"><span>To be acquainted with receiving and incorporating feedback from critiques and user testing trials</span></li>
        </ol>
      </div>
      <Link className="bottom-right" activeClass="active" to="intro" spy={true} smooth={true}>
        <div className="context-bottom-right-corner">Next: Chosen startup</div>
      </Link>
    </div>
  );
}

export default Context;
  