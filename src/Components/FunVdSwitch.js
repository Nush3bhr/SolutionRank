import React, { useState } from "react";

const FunVdSwitch = () => {
  const [string, setString] = useState("");
  const [letter, setLetter] = useState("");
  const handleChange = (event) => {
    setString(event.target.value);
  };
  const getLetter = (s) => {
    let alpha;
    switch (
      s.charAt(0) //we can also us s[0]
    ) {
      case "a" || "e" || "i" || "o" || "u":
        alpha = "A";
        break;
      case "b" || "c" || "d" || "f" || "g":
        alpha = "B";
        break;
      case "h" || "j" || "k" || "l" || "m":
        alpha = "C";
        break;
      default:
        alpha = "D";
    }
    return alpha;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLetter(getLetter(string));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h5>
        Q:If the first character in string is in the set (a,e,i,o,u), then
        return A.
        <br />
        If the first character in string is in the set (b,c,d,f,g), then return
        B.
        <br />
        If the first character in string is in the set (h,j,k,l,m), then return
        C.
        <br />
        else return D.
      </h5>
      <input type="text" value={string} onChange={handleChange} />
      <br />
      <button type="submit">getLetter</button>
      <br />
      <strong>Letter:</strong>
      {letter}
    </form>
  );
};
export default FunVdSwitch;
