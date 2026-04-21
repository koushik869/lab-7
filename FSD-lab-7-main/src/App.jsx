import { useState } from "react";
import "./App.css";
import "aframe";
import ARScene from "./assets/ARScene";

function App() {
  const [clr, setClr] = useState("#4CC3D9");

  const toggle = () => {
    setClr((c) => (c === "#4CC3D9" ? "#EF2D5E" : "#4CC3D9"));
  };

  if (document.querySelector("#box")) {
    document.querySelector("#box").setAttribute("color", clr);
  }

  return (
    <>
      <h2>AR Box Color Change</h2>
      <button onClick={toggle}>Toggle Color</button>
      <ARScene />
    </>
  );
}

export default App;