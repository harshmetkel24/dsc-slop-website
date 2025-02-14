import React from "react";
import { Router } from "@reach/router";
import Homepage from "./Pages/HomePage";
import LeaderBoard from "./Pages/LeaderBoard";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import MentorRegistration from "./Pages/MentorRegistration";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./tailwind.css";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#ffffff",
        light: "#F5CB5C",
        dark: "#ffffff",
      },
      secondary: {
        main: "#c1eb6f",
        light: "#f48fb1",
        dark: "#96cc29",
      },

      background: {
        paper: "#000000",
        default: "#333533",
      },

      text: {
        primary: "#ffff",
        secondary: "#bdbdbd",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Router primary={false}>
          <Homepage exact path="/" />
          <LeaderBoard exact path="/leaderboard" />
          <Projects exact path="/projects" />
          <Contacts exact path="/contacts" />
          <MentorRegistration exact path="/mentor-registration" />
        </Router>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
