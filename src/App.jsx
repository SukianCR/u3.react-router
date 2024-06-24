import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Red from "./Components/Red";
import Blue from "./Components/Blue";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <div id="container">
        {" "}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand hotgreen" to="/">
            Navbar
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link greenText hotgreen" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link blueText hotblue" to="/blue">
                  Blue
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link redText hotpink" to="/red">
                  Red
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
