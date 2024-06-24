import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">{/* navigation here */}</div>
        <div id="main-section">{/* routes here */}</div>
      </div>
    </>
  );
}

export default App;
