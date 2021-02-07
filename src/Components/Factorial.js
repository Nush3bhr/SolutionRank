import React, { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import CircleAnP from "./CircleAnP";

const Factorial = () => {
  const [fact, setFact] = useState("");
  const [num, setNum] = useState("num");
  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const factorial = (number) => {
    let factori = 1;
    for (let i = number; i > 0; i--) {
      factori = factori * i;
    }
    return factori;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFact(factorial(num));
  };

  return (
    <Fragment>
      {/* <CircleAnP result={setFact} /> */}

      <form onSubmit={handleSubmit}>
        <h3>Calculate Factorial</h3>
        <label>Enter the no:</label>
        <input type="number" value={num} onChange={handleChange} />
        <br />
        <button type="submit">Calculate</button>
        <br />
        <strong>Factorial of</strong> {num} <strong>is </strong>
        {fact}
        <br />
        <Link to="/">
          {" "}
          <button>Home</button>
        </Link>
      </form>
    </Fragment>
  );
};
export default Factorial;
