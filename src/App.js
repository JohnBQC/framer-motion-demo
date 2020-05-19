import React, { useState } from "react";
import { Accordion, Magnify, Modal } from "./components";
import "./App.css";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <div className="accordion-container">
        <Accordion />
        <Accordion />
      </div>
      <Magnify />
      <button onClick={() => setIsToggled(!isToggled)}>Toggle Modal</button>
      <Modal {...{ isToggled, setIsToggled }}>
        <p>
          I'm baby biodiesel etsy sustainable hexagon occupy. PBR&B literally
          sriracha, jianbing skateboard you probably haven't heard of them man
          braid affogato blog actually forage mustache irony typewriter paleo.
          Dreamcatcher pitchfork gastropub, vaporware four loko pour-over
          succulents single-origin coffee.
        </p>
      </Modal>
    </div>
  );
}

export default App;
