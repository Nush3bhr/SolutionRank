import React from "react";
import "./App.css";
import Home from "./Components/Home";
import AreaAndPerimeter from "./Components/AreaAndPerimeter";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Factorial from "./Components/Factorial";
import CircleAnP from "./Components/CircleAnP";
import Score from "./Components/Score";
import FunVdSwitch from "./Components/FunVdSwitch";
import VowelNConso from "./Components/VowelNConso";
import SecondMaxNo from "./Components/SecondMaxNo";
import StringRev from "./Components/StringRev";
import RectAnP from "./Components/RectAnP";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/AreaAndPerimeter" exact component={AreaAndPerimeter} />
        <Route path="/Factorial" exact component={Factorial} />
        <Route path="/CircleAnP" exact component={CircleAnP} />
        <Route path="/Score" exact component={Score} />
        <Route path="/FunVdSwitch" exact component={FunVdSwitch} />
        <Route path="/VowelNConso" exact component={VowelNConso} />
        <Route path="/SecondMaxNo" exact component={SecondMaxNo} />
        <Route path="/StringRev" exact component={StringRev} />
        <Route path="/RectAnP" exact component={RectAnP} />
      </Router>
    </div>
  );
}

export default App;
