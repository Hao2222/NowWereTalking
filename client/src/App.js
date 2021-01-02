import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
    </div>
    </Router>
  );
}

export default App;
