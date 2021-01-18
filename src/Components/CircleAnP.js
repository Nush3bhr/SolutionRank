import React, { useState } from "react";

const CircleAnP = () => {
  const [rad, setRad] = useState();
  const [area, setArea] = useState();
  const [perimeter, setPerimeter] = useState();
  const handleChange = (event) => {
    setRad(event.target.value);
  };
  const pi = Math.PI;
  const circleArea = (r) => {
    let a = pi * r * r;
    return a;
  };
  const circlePeri = (r) => {
    let p = 2 * pi * r;
    return p;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setArea(circleArea(rad));
    setPerimeter(circlePeri(rad));
    setRad(""); //to make input field empty on submit of form
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Area N Perimeter of Circle</h2>
      <label>enter radius of circle: </label>
      <input type="number" value={rad} onChange={handleChange} />
      <br />
      <button type="submit">Calculate!!</button>
      <p>
        <strong>Area of cicrcle:</strong>
        {area}
        <br />
        <strong>Perimeter of circle:</strong>
        {perimeter}
      </p>
    </form>
  );
};
export default CircleAnP;
