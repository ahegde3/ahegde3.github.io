import "./styles/globals.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import { Navigation } from "./component/Navigation";
import { Resume } from "./component/Resume";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Home />
        <Resume />
      </main>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
