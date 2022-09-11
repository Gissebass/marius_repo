import "./App.css";
import Navbar from "./components/Navbar.js";
import "./components/Navbar.css";
import MainComponent from "./components/MainComponent.js";
import "./components/MainComponent.css";

function App() {
  return (
    <div className="App">
      <Navbar />
    <div className="content">
        <MainComponent />
    </div>
    </div>
  );
}

export default App;
