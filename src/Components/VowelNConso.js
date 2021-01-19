import React, { useState } from "react";

const VowelNConso = () => {
  const [str, setStr] = useState("");
  const [output, setOutput] = useState([]);
  const handleChange = (event) => {
    setStr(event.target.value);
  };
  const vowelsAndConsonants = (newStr) => {
    const s = newStr.toLowerCase();
    let vowel = [];
    let conso = [];
    for (let i = 0; i < s.length; i++) {
      if (
        s[i] === "a" ||
        s[i] === "e" ||
        s[i] === "i" ||
        s[i] === "o" ||
        s[i] === "u"
      ) {
        vowel = vowel + s[i];
      } else {
        conso = conso + s[i];
      }
    }
    // console.log(vowel);
    // console.log(conso);

    let op = vowel.concat(conso);
    console.log(op);
    for (let j = 0; j < op.length; j++) {
      console.log(j + ":" + op[j] + "  "); //want to return the same output.how?
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(vowelsAndConsonants(str));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h5>
        Q: First, print each vowel on a new line (in the same order as they
        appeared in given string). Second, print each consonant on a new line
        (in the same order as they appeared in given string).
      </h5>
      <label>Type your string:</label>
      <input type="text" value={str} onChange={handleChange} />
      <br />
      <button type="submit">Click</button>
      <br />
      <strong>Output:{output}</strong>
    </form>
  );
};
export default VowelNConso;
