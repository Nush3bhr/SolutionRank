import React from "react";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "./Home.css";

const Home = () => {
  const history = useHistory();
  const navigate = (route) => {
    history.push(route);
  };

  return (
    <div>
      <div>
        <Container
          maxWidth="sm"
          style={{
            backgroundColor: "peachpuff",
            height: "50vh",
          }}
        >
          <button onClick={() => navigate("/AreaAndPerimeter")}>
            AreaAndPerimeter
          </button>
          <br />
          <button onClick={() => navigate("/Factorial")}>
            Calculatefactorial
          </button>
          <br />
          <button onClick={() => navigate("/CircleAnP")}>CircleAnP</button>
          <br />
          <button onClick={() => navigate("/Score")}>Get ur Score</button>
          <br />
          <button onClick={() => navigate("/FunVdSwitch")}>Get Letter</button>
          <br />
          <button onClick={() => navigate("/VowelNConso")}>
            VowelNConsonants
          </button>
          <br />
          <button onClick={() => navigate("/SecondMaxNo")}>
            Second Max Number
          </button>
          <br />
          <button onClick={() => navigate("/StringRev")}>RevString</button>
          <br />
          <button onClick={() => navigate("/RectAnP")}>RectAnP</button>
        </Container>
      </div>
    </div>
  );
};
export default Home;
