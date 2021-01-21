import { Link } from "react-router-dom";
import React, { useState } from "react";

const VowelNConso = () => {
  const [str, setStr] = useState("");
  // const [output, setOutput] = useState([]);
  const [vow, setVow] = useState([]);
  const [cons, setCons] = useState([]);

  const handleChange = (event) => {
    setStr(event.target.value);
  };
  const vowelsAndConsonants = () => {
    const s = str.toLowerCase();
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
        vowel.push(s[i]);
      } else {
        conso.push(s[i]);
      }
    }
    // console.log(vowel);
    // console.log(conso);
    setVow(vowel);
    setCons(conso);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    vowelsAndConsonants();
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
      <strong>Vowels</strong>
      <br />
      {vow.map((vowel, index) => {
        // console.log(vow);
        return (
          <div key={index}>
            {vowel}
            <br />
          </div>
        );
      })}
      <br />
      <strong>Consonants</strong>
      <br />
      {cons.map((c, ind) => (
        <div key={ind}>{c}</div>
      ))}
      <br />
      <Link to="/">
        {" "}
        <button>Home</button>
      </Link>
    </form>
  );
};
export default VowelNConso;
