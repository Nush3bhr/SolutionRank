import React from "react";
import "./App.css";
import Home from "./Components/Home";
import AreaAndPerimeter from "./Components/AreaAndPerimeter";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useHistory, Link } from "react-router-dom";
import Factorial from "./Components/Factorial";
import CircleAnP from "./Components/CircleAnP";
import Score from "./Components/Score";
import FunVdSwitch from "./Components/FunVdSwitch";
import VowelNConso from "./Components/VowelNConso";
import SecondMaxNo from "./Components/SecondMaxNo";
import StringRev from "./Components/StringRev";

function App() {
  return (
    <Router>
      <Link to="/">
        {" "}
        <button>CoolHome</button>
      </Link>
      <Route path="/" component={Home} />
      <Route path="/AreaAndPerimeter" component={AreaAndPerimeter} />
      <Route path="/Factorial" component={Factorial} />
      <Route path="/CircleAnP" component={CircleAnP} />
      <Route path="/Score" component={Score} />
      <Route path="/FunVdSwitch" component={FunVdSwitch} />
      <Route path="/VowelNConso" component={VowelNConso} />
      <Route path="/SecondMaxNo" component={SecondMaxNo} />
      <Route path="/StringRev" component={StringRev} />
    </Router>
  );
}

export default App;
