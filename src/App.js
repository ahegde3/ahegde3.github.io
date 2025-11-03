import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import "./styles/globals.css";
import { Navigation } from "./component/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
