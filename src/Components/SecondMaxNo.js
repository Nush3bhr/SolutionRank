import React, { useState } from "react";

const SecondMaxNo = () => {
  //   const [n, setN] = useState();
  const [numValue, setNumValue] = useState("");
  const [op, setOp] = useState([]);
  //   const handleChange = (event) => {
  //     setN(event.target.value);
  //   };

  const handleInputChange = (event) => {
    setNumValue(event.target.value);
  };

  const getSecondLargest = (nums) => {
    nums = nums.split(",").map(Number);
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
      {/* <label>Enter length of an array:</label>
      <input type="number" value={n} onChange={handleChange} />
      <br /> */}
      <label>enter values :</label>
      <input
        type="text"
        value={numValue}
        onChange={handleInputChange}
        placeholder=" seperate values by ',' "
      />
      <br />
      <button type="submit">Calculate</button>
      <br />
      <strong>Second largest element:</strong> {op}
    </form>
  );
};
export default SecondMaxNo;
