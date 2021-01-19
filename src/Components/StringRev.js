import React, { useState } from "react";

const StringRev = () => {
  const [str, setStr] = useState("");
  const [revStr, setRevStr] = useState("");
  const handleChange = (event) => {
    setStr(event.target.value);
  };
  const reverseString = (s) => {
    try {
      let newStr = "";
      for (let i = s.length - 1; i >= 0; i--) {
        newStr = newStr + s.charAt(i);
      }
      return newStr;
    } catch (error) {
      return error.message;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setRevStr(reverseString(str));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Reverse String</h3>
      <label>Enter String:</label>
      <input type="text" value={str} onChange={handleChange} />
      <br />
      <button type="submit">Get It!</button>
      <br />
      Output: {revStr}
    </form>
  );
};
export default StringRev;
