import React, { useState } from "react";

const Factorial = () => {
  const [fact, setFact] = useState();
  const [num, setNum] = useState();
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
    <form onSubmit={handleSubmit}>
      <label>Enter the no:</label>
      <input type="number" value={num} onChange={handleChange} />
      <br />
      <button type="submit">Calculate</button>
      <br />
      Factorial: {fact}
    </form>
  );
};
export default Factorial;
