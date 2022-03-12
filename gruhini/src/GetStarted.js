import React from "react";
import "./style/GetStarted.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "./assets/logo-gs.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import flower from "./assets/bg-flower.png";
import animation from "./assets/multi-tasking.png";
import help from "./assets/icons/help.svg";
import contact from "./assets/icons/contact.svg";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

function GetStarted() {
  return (
    <div className="container">
      <div>
        <AppBar
          position="static"
          elevation={0}
          sx={{ bgcolor: "var(--for-color)" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img className="logo" src={logo} alt="GetStarted logo"></img>
            </Typography>
            <Button
              className="nav-btn"
              variant="contained"
              sx={{ boxShadow: 0, bgcolor: "#97c1c8" }}
            >
              HELP
            </Button>
            <Button
              href="mailto:technocrats.gruhini@gmail.com"
              className="nav-btn"
              variant="contained"
              sx={{ boxShadow: 0, bgcolor: "#97c1c8" }}
            >
              CONTACT
            </Button>
            <Button
              className="nav-btn-sm"
              variant="contained"
              sx={{ boxShadow: 0, bgcolor: "#97c1c8" }}
              style={{
                maxWidth: "40px",
                maxHeight: "40px",
                minWidth: "40px",
                minHeight: "40px",
              }}
            >
              <img src={help} alt="help icon"></img>
            </Button>
            <Button
              className="nav-btn-sm"
              variant="contained"
              href="mailto:(gruhini.technocrats@gmail.com)"
              sx={{ boxShadow: 0, bgcolor: "#97c1c8" }}
              style={{
                maxWidth: "40px",
                maxHeight: "40px",
                minWidth: "40px",
                minHeight: "40px",
              }}
            >
              <img src={contact} alt="contact icon"></img>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <img
        src={flower}
        alt="flower"
        style={{
          height: "600px",
          width: "600px",
          position: "fixed",
          zIndex: "-1",
          left: "-10px",
          top: "100px",
        }}
      />
      <div className="body">
        <Grid className="grid" container spacing={2}>
          <Grid className="grid" item lg={6}>
            <Item sx={{ boxShadow: 0, bgcolor: "#ffffff00" }}>
              <Typography className="heading" variant="h2">
                About Us
              </Typography>
              <Typography>
                <em>
                  <i>FROM HOUSEWIVES TO ENTREPRENEURS</i>
                </em>
                <br />
                <br />
                Gruhini is an initiative for housewives who wish to grow,
                connect and start their entrepreneurial journey.
                <br></br>
                <br></br>
                If you are looking for a job opportunity, a homemade product or
                just want to know how to book a cab so that you don't have to
                depend on someone everytime you have to go somewhere, you're
                browsing through the right website.
                <br></br>
                <br></br>
                We have something for every Gruhini.
              </Typography>
              <Link to={"/login"} style={{ textDecoration: "none" }}>
              <Button
                className="CTC1"
                variant="contained"
                sx={{ boxShadow: 0 }}
              >
                Log In
              </Button>
              </Link>
              <Link to={"/register"} style={{ textDecoration: "none" }}>
              <Button className="CTC2" variant="outlined" sx={{ boxShadow: 0 }}>
                Register
              </Button>
              </Link>
            </Item>
          </Grid>
          <Grid item lg={6}>
            <Item sx={{ boxShadow: 0, bgcolor: "#ffffff00" }}>
              <img className="women" src={animation} alt="housewife"></img>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default GetStarted;
