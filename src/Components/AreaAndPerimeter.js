import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AreaAndPerimeter = () => {
  const [area, setArea] = useState("");
  const [perimeter, setPerimeter] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //validate before going to next step
    // console.log("length: ", length, "width: ", width);
    console.log("length: " + length, "width: " + width);
    setArea(length * width);
    setPerimeter(Number(length) + Number(width));
  };

  const handleChange = (event) => {
    if (event.target.name === "length") {
      setLength(event.target.value);
    } else if (event.target.name === "width") {
      setWidth(event.target.value);
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        backgroundColor: "peachpuff",
        height: "30vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2 className="font">Q: Find the Area and Perimeter of rectangle.</h2>
        <br />
        <label className="font">Length: </label>
        <input
          name="length"
          type="number"
          placeholder="enter length"
          value={length}
          onChange={handleChange}
        />
        <br />
        <label className="font">Width: </label>
        <input
          name="width"
          type="number"
          placeholder="enter width"
          value={width}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Calculate" />
        <br />
        <p className="font">
          Area: {area} <br />
          Perimeter: {perimeter}
        </p>
        <br />
        <Link to="/">
          {" "}
          <button>Home</button>
        </Link>
      </form>
    </Container>
  );
};

export default AreaAndPerimeter;
