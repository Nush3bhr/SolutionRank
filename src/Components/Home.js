import React from "react";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import "./Home.css";

const Home = () => {
  const history = useHistory();
  const navigate = (route) => {
    history.push(route);
  };

  return (
    <div className="center">
      <div>
        <h1>DASHBOARD</h1>
      </div>

      <Grid
        container
        justify="center"
        style={{
          backgroundColor: "peachpuff",
          padding: "20px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() => navigate("/AreaAndPerimeter")}
              style={{
                cursor: "pointer",
                backgroundColor: "rgb(252, 252, 143)",
              }}
            >
              <CardContent style={{ fontWeight: "bold" }}>
                Area and Perimeter
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() => navigate("/Factorial")}
              style={{ cursor: "pointer" }}
            >
              <CardContent style={{ fontWeight: "bold" }}>
                Calculatefactorial
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() => navigate("/CircleAnP")}
              style={{
                cursor: "pointer",
                backgroundColor: "rgb(252, 252, 143)",
              }}
            >
              <CardContent style={{ fontWeight: "bold" }}>
                CircleAnP
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() => navigate("/Score")}
              style={{
                cursor: "pointer",
              }}
            >
              <CardContent style={{ fontWeight: "bold" }}>Score</CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() => navigate("/FunVdSwitch")}
              style={{
                cursor: "pointer",
                backgroundColor: "rgb(252, 252, 143)",
              }}
            >
              <CardContent style={{ fontWeight: "bold" }}>
                FunVdSwitch
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() => navigate("/VowelNConso")}
              style={{ cursor: "pointer" }}
            >
              <CardContent style={{ fontWeight: "bold" }}>
                VowelNConso
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() => navigate("/SecondMaxNo")}
              style={{
                cursor: "pointer",
                backgroundColor: "rgb(252, 252, 143)",
              }}
            >
              <CardContent style={{ fontWeight: "bold" }}>
                SecondMaxNo
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() => navigate("/StringRev")}
              style={{ cursor: "pointer" }}
            >
              <CardContent style={{ fontWeight: "bold" }}>
                StringRev
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() => navigate("/RectAnP")}
              style={{
                cursor: "pointer",
                backgroundColor: "rgb(252, 252, 143)",
              }}
            >
              <CardContent style={{ fontWeight: "bold" }}>RectAnP</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
