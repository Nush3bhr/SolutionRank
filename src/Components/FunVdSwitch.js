import { Link } from "react-router-dom";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

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
    <Container
      maxWidth="sm"
      style={{
        backgroundColor: "rgb(255, 183, 183)",
        height: "60vh",
      }}
    >
      {/* <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{
          backgroundColor: "green",
          height: "50vh",
        }}
      >
        <Grid item xs={12} sm={6} md={4}> */}
      <form onSubmit={handleSubmit}>
        <h4>
          Q: If the first character in string is in the set (a,e,i,o,u), then
          return letter A.
          <br />
          If the first character in string is in the set (b,c,d,f,g), then
          return letter B.
          <br />
          If the first character in string is in the set (h,j,k,l,m), then
          return letter C.
          <br />
          else return letter D.
        </h4>
        <br />

        <Typography>Enter String below:</Typography>
        <TextField
          variant="outlined"
          size="small"
          type="text"
          placeholder="Type a string"
          value={string}
          onChange={handleChange}
        />
        <br />
        <br />

        <Button variant="contained" size="small" color="primary" type="submit">
          get Letter
        </Button>
        <br />
        <br />
        <strong>Letter:</strong>
        {letter}
        <br />
      </form>
      {/* </Grid>
      </Grid> */}
    </Container>
  );
};
export default FunVdSwitch;
