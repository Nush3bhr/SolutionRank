import { Link } from "react-router-dom";
import React, { useState } from "react";

const Score = () => {
  const [marks, setMarks] = useState("");
  const [gradeEarn, setGradeEarn] = useState("");
  const handleChange = (event) => {
    setMarks(event.target.value);
  };
  const finalScore = (score) => {
    let grade;
    if (score > 25 && score <= 30) {
      grade = "A";
    } else if (score > 20 && score <= 25) {
      grade = "B";
    } else if (score > 15 && score <= 20) {
      grade = "C";
    } else if (score > 10 && score <= 15) {
      grade = "D";
    } else if (score > 5 && score <= 10) {
      grade = "E";
    } else {
      grade = "F";
    }
    return grade;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setGradeEarn(finalScore(marks));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>FINAL GRADE</h2>
      <label>enter score:</label>
      <input
        type="number"
        value={marks}
        onChange={handleChange}
        placeholder="MaxMarks:30"
      />
      <br />
      <button type="submit">GetGrade</button>
      <br />
      <strong>Final Grade earned:</strong>
      {gradeEarn}
      <br />
      <Link to="/">
        {" "}
        <button>Home</button>
      </Link>
    </form>
  );
};
export default Score;
