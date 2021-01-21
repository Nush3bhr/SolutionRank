import React from "react";
import "./App.css";
import Home from "./Components/Home";
import AreaAndPerimeter from "./Components/AreaAndPerimeter";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Factorial from "./Components/Factorial";
import CircleAnP from "./Components/CircleAnP";
import Score from "./Components/Score";
import FunVdSwitch from "./Components/FunVdSwitch";
import VowelNConso from "./Components/VowelNConso";
import SecondMaxNo from "./Components/SecondMaxNo";
import StringRev from "./Components/StringRev";
import RectAnP from "./Components/RectAnP";

import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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

function App() {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <AppBar position="fixed">
          <Toolbar>
            {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
            <Avatar
              alt="Remy Sharp"
              src="https://thumbs.dreamstime.com/b/logo-letter-monogram-slash-modern-logo-designs-template-black-color-white-background-sr-logo-letter-monogram-slash-175325271.jpg"
            />
            <Typography variant="h6" className={classes.title}>
              <Box fontWeight="fontWeightBold" fontSize="h4.fontSize" m={1}>
                SolutionRank
              </Box>
            </Typography>
            <Link to="/">
              {" "}
              <Button variant="contained" color="primary" size="large">
                HOME
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: "100px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/AreaAndPerimeter" exact component={AreaAndPerimeter} />
          <Route path="/Factorial" exact component={Factorial} />
          <Route path="/CircleAnP" exact component={CircleAnP} />
          <Route path="/Score" exact component={Score} />
          <Route path="/FunVdSwitch" exact component={FunVdSwitch} />
          <Route path="/VowelNConso" exact component={VowelNConso} />
          <Route path="/SecondMaxNo" exact component={SecondMaxNo} />
          <Route path="/StringRev" exact component={StringRev} />
          <Route path="/RectAnP" exact component={RectAnP} />
        </div>
      </Router>
    </div>
  );
}

export default App;
