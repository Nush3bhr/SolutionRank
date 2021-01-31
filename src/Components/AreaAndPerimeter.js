import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

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
        backgroundColor: "#fceedd",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2 className="font">Q: Find the Area and Perimeter of rectangle.</h2>
        <br />
        <Typography>
          <strong>Length:</strong>{" "}
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          name="length"
          type="number"
          placeholder="Enter length"
          value={length}
          onChange={handleChange}
        />
        <br />
        <br />
        <Typography>
          <strong>Width:</strong>{" "}
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          name="width"
          type="number"
          placeholder="Enter width"
          value={width}
          onChange={handleChange}
        />
        <br />
        <br />
        {/* <input type="submit" value="Calculate" /> */}
        <Button variant="outlined" color="secondary" type="submit" size="small">
          Calculate
        </Button>
        <br />
        <p className="font">
          <strong>Area: </strong> {area} <br />
          <strong> Perimeter: </strong> {perimeter}
        </p>
      </form>
    </Container>
  );
};

export default AreaAndPerimeter;
