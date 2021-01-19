import React from "react";
import { useHistory, Link } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const navigate = (route) => {
    history.push(route);
  };

  return (
    <div>
      <button onClick={() => navigate("/AreaAndPerimeter")}>
        AreaAndPerimeter
      </button>
      <br />
      <button onClick={() => navigate("/Factorial")}>Calculatefactorial</button>
      <br />
      <button onClick={() => navigate("/CircleAnP")}>CircleAnP</button>
      <br />
      <button onClick={() => navigate("/Score")}>Get ur Score</button>
      <br />
      <button onClick={() => navigate("/FunVdSwitch")}>Get Letter</button>
      <br />
      <button onClick={() => navigate("/VowelNConso")}>VowelNConsonants</button>
      <br />
      <button onClick={() => navigate("/SecondMaxNo")}>
        Second Max Number
      </button>
      <br />
      <button onClick={() => navigate("/StringRev")}>RevString</button>
    </div>
  );
};
export default Home;
