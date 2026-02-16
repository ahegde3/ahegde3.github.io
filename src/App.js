import "./styles/globals.css";
import Home from "./page/Home";
import { Navigation } from "./component/Navigation";
import { Resume } from "./component/Resume";
import { Projects } from "./component/Projects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Home />
        <Projects />
        <Resume />
      </main>
    </div>
  );
}

export default App;
