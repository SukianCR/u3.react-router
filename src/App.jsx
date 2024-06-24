import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

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
            <Route
              path="/blue"
              element={<h1 className="hotblue hotblueP">Blue</h1>}
            />
            <Route
              path="/red"
              element={<h1 className="hotpink hotpinkP">Red</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
