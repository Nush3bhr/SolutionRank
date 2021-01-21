import React, { useState } from "react";
import { Link } from "react-router-dom";

const RectAnP = () => {
  // const [input, setInput] = useState();
  const [op, setOp] = useState({});
  const rectangle = (a, b) => {
    return {
      length: a,
      width: b,
      area: a * b,
      perimeter: 2 * (a + b),
    };
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setOp(rectangle(2, 3));
  };

  return (
    <form onSubmit={handleSubmit}>
      {console.log(op)}
      <p>
        click to see output-<button type="submit">Click</button>
        <br />
        <strong>Output:</strong>
      </p>
      <ul>
        <li>length: {op.length}</li>
        <li>width: {op.width}</li>
        <li>area: {op.area}</li>
        <li>perimeter: {op.perimeter}</li>
      </ul>
      <br />
      <Link to="/">
        {" "}
        <button>Home</button>
      </Link>
    </form>
  );
};

export default RectAnP;
