import React, { useState } from "react";

const AreaAndPerimeter = () => {
  const [area, setArea] = useState();
  const [perimeter, setPerimeter] = useState();
  const [length, setLength] = useState();
  const [width, setWidth] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    //validate before going to next step
    console.log("length: ", length, "width: ", width);
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
    <form onSubmit={handleSubmit}>
      <label>Length:</label>
      <input
        name="length"
        type="number"
        placeholder="enter length"
        value={length}
        onChange={handleChange}
      />
      <div>
        <label>Width:</label>
        <input
          name="width"
          type="number"
          placeholder="enter width"
          value={width}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Calculate" />
      Area: {area} <br />
      Perimeter: {perimeter}
    </form>
  );
};

export default AreaAndPerimeter;
