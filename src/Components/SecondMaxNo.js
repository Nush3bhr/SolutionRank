import React, { useState } from "react";
import { Link } from "react-router-dom";

const SecondMaxNo = () => {
  const [n, setN] = useState("");
  const [numValue, setNumValue] = useState("");
  const [op, setOp] = useState([]);

  const handleChange = (event) => {
    if (event.target.name === "n") {
      setN(event.target.value);
    } else if (event.target.name === "val") {
      //n=5
      let inp = event.target.value;
      if (inp.split(",").length > n) {
        alert("dont type more than " + n);
      } else {
        setNumValue(inp);
      }
    }
  };

  // const handleInputChange = (event) => {
  //   //n=5
  //   let inp = event.target.value;
  //   if (inp.split(",").length > n) {
  //     alert("dont type more than " + n);
  //   } else {
  //     setNumValue(inp);
  //   }
  // };

  const getSecondLargest = (nums) => {
    nums = nums.split(",").map((element, index) => {
      return Number(element);
    }); //to split the string based on parameter into an array and map() used to call the provided function once for each element in array
    for (let j = 0; j < nums.length; j++) {
      for (let i = 0; i < nums.length - 1; i++) {
        //swapping 2 nos
        if (nums[i + 1] > nums[i]) {
          nums[i] = nums[i] + nums[i + 1];
          nums[i + 1] = nums[i] - nums[i + 1];
          nums[i] = nums[i] - nums[i + 1];
        }
      }
    } //sorted array in descending order
    console.log(nums);
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] !== nums[i + 1]) {
        return nums[i + 1];
      }
    }
    return " no second largest";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOp(getSecondLargest(numValue));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Get Second Largest Number</h3>
      <label>Enter length of an array:</label>
      <input type="number" value={n} onChange={handleChange} name="n" />
      <br />
      <label>enter values :</label>
      <input
        type="text"
        value={numValue}
        name="val"
        onChange={handleChange}
        placeholder=" seperate values by ',' "
      />
      <br />
      <button type="submit">Calculate</button>
      <br />
      <strong>Second largest element:</strong> {op}
      <br />
      <Link to="/">
        {" "}
        <button>Home</button>
      </Link>
    </form>
  );
};
export default SecondMaxNo;
