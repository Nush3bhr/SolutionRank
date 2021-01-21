import { Link } from "react-router-dom";
import React, { useState } from "react";

const FunVdSwitch = () => {
  const [string, setString] = useState("");
  const [letter, setLetter] = useState("");

  const handleChange = (event) => {
    setString(event.target.value);
  };

  const getLetter = (s) => {
    switch (
      s.charAt(0) //we can also use s[0]
    ) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        return "A";

      case "b":
      case "c":
      case "d":
      case "f":
      case "g":
        return "B";

      case "h":
      case "j":
      case "k":
      case "l":
      case "m":
        return "C";
      default:
        return "D";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevents the default bheaviour of form(ie always reload the page)
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
      <input
        type="text"
        placeholder="Type a string"
        value={string}
        onChange={handleChange}
      />
      <br />
      <button type="submit">getLetter</button>
      <br />
      <strong>Letter:</strong>
      {letter}
      <br />
      <Link to="/">
        {" "}
        <button>Home</button>
      </Link>
    </form>
  );
};
export default FunVdSwitch;
