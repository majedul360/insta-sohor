import "./App.css";
import Bikes from "./components/bikes/Bikes";
function App() {
  return (
    <div className="app">
      <h1>
        <span>bike</span>Bd
      </h1>
      <h3 className="info">most popular bike portal of bangladesh</h3>
      <div className="section">
        <Bikes />
      </div>
    </div>
  );
}

export default App;
