import "./App.css";
import Vaccines from "./Vaccines";
import Homepage from "./Homepage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/vaccines" className="nav-item">
          Vaccines
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/vaccines" element={<Vaccines />} />
      </Routes>
    </div>
  );
}

export default App;
