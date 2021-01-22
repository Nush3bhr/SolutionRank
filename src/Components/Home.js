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
    <div>
      <div>
        <div className="center">
          <h1>DASHBOARD</h1>
        </div>

        <Container
          maxWidth="sm"
          style={{
            backgroundColor: "peachpuff",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                onClick={() => navigate("/AreaAndPerimeter")}
                style={{ cursor: "pointer" }}
              >
                <CardContent>Area and Perimeter</CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                onClick={() => navigate("/Factorial")}
                style={{ cursor: "pointer" }}
              >
                <CardContent>Calculatefactorial</CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                onClick={() => navigate("/CircleAnP")}
                style={{ cursor: "pointer" }}
              >
                <CardContent>CircleAnP</CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                onClick={() => navigate("/Score")}
                style={{ cursor: "pointer" }}
              >
                <CardContent>Score</CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                onClick={() => navigate("/FunVdSwitch")}
                style={{ cursor: "pointer" }}
              >
                <CardContent>FunVdSwitch</CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                onClick={() => navigate("/VowelNConso")}
                style={{ cursor: "pointer" }}
              >
                <CardContent>VowelNConso</CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                onClick={() => navigate("/SecondMaxNo")}
                style={{ cursor: "pointer" }}
              >
                <CardContent>SecondMaxNo</CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                onClick={() => navigate("/StringRev")}
                style={{ cursor: "pointer" }}
              >
                <CardContent>StringRev</CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                onClick={() => navigate("/RectAnP")}
                style={{ cursor: "pointer" }}
              >
                <CardContent>RectAnP</CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};
export default Home;
