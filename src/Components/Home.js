import React from "react";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";

import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import "./Home.css";
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

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const navigate = (route) => {
    history.push(route);
  };

  return (
    <div>
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
      <div>
        <Container
          maxWidth="sm"
          style={{
            backgroundColor: "peachpuff",
            height: "50vh",
          }}
        >
          <button onClick={() => navigate("/AreaAndPerimeter")}>
            AreaAndPerimeter
          </button>
          <br />
          <button onClick={() => navigate("/Factorial")}>
            Calculatefactorial
          </button>
          <br />
          <button onClick={() => navigate("/CircleAnP")}>CircleAnP</button>
          <br />
          <button onClick={() => navigate("/Score")}>Get ur Score</button>
          <br />
          <button onClick={() => navigate("/FunVdSwitch")}>Get Letter</button>
          <br />
          <button onClick={() => navigate("/VowelNConso")}>
            VowelNConsonants
          </button>
          <br />
          <button onClick={() => navigate("/SecondMaxNo")}>
            Second Max Number
          </button>
          <br />
          <button onClick={() => navigate("/StringRev")}>RevString</button>
          <br />
          <button onClick={() => navigate("/RectAnP")}>RectAnP</button>
        </Container>
      </div>
    </div>
  );
};
export default Home;
