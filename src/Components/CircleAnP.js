import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

const CircleAnP = () => {
  const [rad, setRad] = useState("");
  const [area, setArea] = useState();
  const [perimeter, setPerimeter] = useState();
  const handleChange = (event) => {
    setRad(event.target.value);
  };
  const pi = Math.PI;
  const circleArea = (r) => {
    let a = pi * r * r;
    return a;
  };
  const circlePeri = (r) => {
    let p = 2 * pi * r;
    return p;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setArea(circleArea(rad));
    setPerimeter(circlePeri(rad));
    // setRad(""); //to make input field empty on submit of form
  };
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item justify="center" style={{ backgroundColor: "black" }}>
        <Card
          style={{
            backgroundColor: "khaki",
            textAlign: "center",
            width: "50vw",
            margin: "20px",
          }}
          variant="outlined"
        >
          <form onSubmit={handleSubmit}>
            <h2>Area N Perimeter of Circle</h2>

            <label>Enter radius of circle: </label>
            <input type="number" value={rad} onChange={handleChange} />
            <br />
            <button type="submit">Calculate!!</button>
            <p>
              radius: {rad}
              <br />
              <strong>Area of cicrcle:</strong>
              {area}
              <br />
              <strong>Perimeter of circle:</strong>
              {perimeter}
            </p>
            <br />
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};
export default CircleAnP;
