import React from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import AreaAndPerimeter from "./Components/AreaAndPerimeter";
import Factorial from "./Components/Factorial";
import CircleAnP from "./Components/CircleAnP";
import Score from "./Components/Score";
import FunVdSwitch from "./Components/FunVdSwitch";
import VowelNConso from "./Components/VowelNConso";
import SecondMaxNo from "./Components/SecondMaxNo";
import StringRev from "./Components/StringRev";
import RectAnP from "./Components/RectAnP";
import Demo from "./Components/Demo";
import FinishedProduct from "./Components/FinishedProduct";
import Table from "./Components/Table";

import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginBottom: "20px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "rgb(207, 236, 236) " }}>
      <Router>
        <AppBar position="fixed">
          <Toolbar>
            <Link to="/">
              <Avatar
                alt="Remy Sharp"
                src="https://thumbs.dreamstime.com/b/logo-letter-monogram-slash-modern-logo-designs-template-black-color-white-background-sr-logo-letter-monogram-slash-175325271.jpg"
              />
            </Link>

            <Typography variant="h6" className={classes.title}>
              <Box fontWeight="fontWeightBold" fontSize="h4.fontSize" m={1}>
                SolutionRank
              </Box>
            </Typography>

            <Link to="/">
              {" "}
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ marginRight: "10px" }}
              >
                HOME
              </Button>
            </Link>

            <Link to="/Demo">
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ marginRight: "10px" }}
              >
                Demo
              </Button>
            </Link>

            <Link to="/Table">
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ marginRight: "10px" }}
              >
                Table
              </Button>
            </Link>

            <Link to="/FinishedProduct">
              <Button variant="contained" color="primary" size="large">
                Finished Product
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <div style={{ padding: "100px" }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Demo" exact component={Demo} />
            <Route path="/Table" exact component={Table} />
            <Route path="/FinishedProduct" exact component={FinishedProduct} />
            <Route
              path="/AreaAndPerimeter"
              exact
              component={AreaAndPerimeter}
            />
            <Route path="/Factorial" exact component={Factorial} />
            <Route path="/CircleAnP" exact component={CircleAnP} />
            <Route path="/Score" exact component={Score} />
            <Route path="/FunVdSwitch" exact component={FunVdSwitch} />
            <Route path="/VowelNConso" exact component={VowelNConso} />
            <Route path="/SecondMaxNo" exact component={SecondMaxNo} />
            <Route path="/StringRev" exact component={StringRev} />
            <Route path="/RectAnP" exact component={RectAnP} />
          </Switch>
        </div>
      </Router>{" "}
    </div>
  );
};

export default App;
