import { BrowserRouter as Router } from "react-router-dom";
import Transition from "./Transition";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Transition />
      </Router>
    </div>
  );
}

export default App;
